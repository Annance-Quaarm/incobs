use anchor_lang::prelude::*;

declare_id!("E4eWGJX7rctj5NjhKvPHLDfEUcN8mkT29uVC8tGoLZCZ");

const ACCOUNT_DISCRIMINATOR_SIZE: usize = 8;

/* ##################################### Program Logic ##################################### */

#[program]
pub mod mcbuse_wallets {
    use super::*;

    pub fn initialize_reserve_wallet(
        context: Context<InitializeReserveWallet>,
        wallet_name: String,
        threshold: u64,
        bump: u8,
    ) -> Result<()> {
        // get mutable ref of reserve wallet account and initialize attributes
        let reserve_wallet = &mut context.accounts.reserve_wallet;
        reserve_wallet.wallet_balance = 0;
        reserve_wallet.threshold = threshold;
        reserve_wallet.bank_account_created = false;

        reserve_wallet.users = Vec::new();
        reserve_wallet.users.push(context.accounts.first_user.key());

        reserve_wallet.user_contributions = Vec::new(); // init empty contributions vector

        reserve_wallet.name = wallet_name;
        reserve_wallet.bump = bump;

        msg!(
            "Reserve wallet created with threshold: {} SOL",
            threshold as f64 / 1_000_000_000.0
        );

        Ok(())
    }

    pub fn join_reserve_wallet(context: Context<JoinReserveWallet>) -> Result<()> {
        let reserve_wallet = &mut context.accounts.reserve_wallet;
        let new_user = context.accounts.new_user.key();

        // raise error if the user already exists in the wallet
        if reserve_wallet.users.contains(&new_user) {
            return Err(ErrorCode::UserAlreadyExists.into());
        }

        //raise error if user limit is reached
        if reserve_wallet.users.len() >= 5 {
            return Err(ErrorCode::MaxUsersReached.into());
        }

        reserve_wallet.users.push(new_user);
        msg!("User {} joined the wallet", new_user);

        Ok(())
    }

    pub fn deposit(context: Context<Deposit>, amount: u64) -> Result<()> {
        let reserve_wallet = &mut context.accounts.reserve_wallet;
        let depositor = context.accounts.depositor.key();

        // raise error: if the user does not exist in the wallet, amount zero
        if !reserve_wallet.users.contains(&depositor) {
            return Err(ErrorCode::UserNotFound.into());
        }

        if amount == 0 {
            return Err(ErrorCode::ZeroAmount.into());
        }

        // transfer
        let cpi_context = CpiContext::new(
            context.accounts.system_program.to_account_info(),
            anchor_lang::system_program::Transfer {
                from: context.accounts.depositor.to_account_info(),
                to: reserve_wallet.to_account_info(),
            },
        );

        anchor_lang::system_program::transfer(cpi_context, amount)?;

        // update reserve wallet balance and user contributions
        reserve_wallet.wallet_balance += amount;

        if let Some(contribution) = reserve_wallet
            .user_contributions
            .iter_mut()
            .find(|contribution| contribution.user == depositor)
        {
            contribution.amount += amount;
        } else {
            reserve_wallet.user_contributions.push(Contribution {
                user: depositor,
                amount,
            });
        }

        if reserve_wallet.wallet_balance >= reserve_wallet.threshold
            && !reserve_wallet.bank_account_created
        {
            msg!("Threshold met! The group can now create a bank account.")
        }

        if let Some(bank_account_address) = reserve_wallet.bank_account_address {
            msg!(
                "DIRECT_DEPOSIT:{}:{}:{}",
                bank_account_address,
                depositor,
                amount
            );
        } else {
            // If bank account isn't created yet, just log a simpler message
            msg!(
                "Deposit of {} SOL received from user {}. No bank account created yet.",
                amount as f64 / 1_000_000_000.0,
                depositor
            );
        }

        msg!(
            "Deposit of {} SOL received from user {}. New balance: {} SOL",
            amount as f64 / 1_000_000_000.0,
            depositor,
            reserve_wallet.wallet_balance as f64 / 1_000_000_000.0
        );

        Ok(())
    }

    pub fn approve_bank_account_creation(
        context: Context<ApproveBankAccountCreation>,
    ) -> Result<()> {
        let reserve_wallet = &mut context.accounts.reserve_wallet;
        let approver = context.accounts.approver.key();

        // raise error if the user does not exists in the wallet
        if !reserve_wallet.users.contains(&approver) {
            return Err(ErrorCode::UserNotFound.into());
        }

        // raise error if the user has already approved
        if reserve_wallet.user_approvals.contains(&approver) {
            return Err(ErrorCode::AlreadyApproved.into());
        }

        reserve_wallet.user_approvals.push(approver);

        let approvals_needed = reserve_wallet.users.len() - reserve_wallet.user_approvals.len();

        msg!("User {} approved bank account creation. {} more users has to approve to create a bank account", approver, approvals_needed);

        // log event for api
        msg!(
            "APPROVE_BANK_ACCOUNT:{}:{}:{}:{}",
            reserve_wallet.name,
            approver,
            reserve_wallet.user_approvals.len(),
            reserve_wallet.users.len()
        );

        Ok(())
    }

    pub fn set_bank_account_created(
        context: Context<SetBankAccountCreated>,
        bank_account_address: Pubkey,
    ) -> Result<()> {
        let reserve_wallet = &mut context.accounts.reserve_wallet;

        if reserve_wallet.user_approvals.len() != reserve_wallet.users.len() {
            return Err(ErrorCode::NotAllApproved.into());
        }

        let current_balance = **reserve_wallet.to_account_info().lamports.borrow();
        msg!("Current on-chain balance: {}", current_balance);

        let rent = Rent::get()?;
        let min_rent = rent.minimum_balance(reserve_wallet.to_account_info().data_len());

        let transfer_amount = current_balance.saturating_sub(min_rent);

        msg!("Transferring {} lamports to bank wallet", transfer_amount);

        **reserve_wallet.to_account_info().try_borrow_mut_lamports()? -= transfer_amount;
        **context
            .accounts
            .bank_wallet
            .to_account_info()
            .try_borrow_mut_lamports()? += transfer_amount;

        reserve_wallet.bank_account_created = true;
        reserve_wallet.bank_account_address = Some(bank_account_address);

        // Log event for API
        msg!(
            "BANK_ACCOUNT_CREATED:{}:{}:{}",
            reserve_wallet.name,
            bank_account_address,
            transfer_amount
        );

        reserve_wallet.wallet_balance = 0;

        msg!(
            "Bank account created for reserve wallet: {}",
            reserve_wallet.name
        );
        msg!("Bank account address: {}", bank_account_address);

        Ok(())
    }

    pub fn withdraw_funds(context: Context<WithdrawFunds>, amount: u64) -> Result<()> {
        let reserve_wallet = &mut context.accounts.reserve_wallet;
        let withdrawer = context.accounts.withdrawer.key();

        // raise error if: the user does not exists in the wallet, Withdrawal amount > user's contribution
        if !reserve_wallet.users.contains(&withdrawer) {
            return Err(ErrorCode::UserNotFound.into());
        }

        if amount == 0 {
            return Err(ErrorCode::ZeroWithdrawalAmount.into());
        }

        let user_contribution_option = reserve_wallet
            .user_contributions
            .iter()
            .find(|contribution| contribution.user == withdrawer)
            .map(|contribution| contribution.amount);

        let user_contribution = match user_contribution_option {
            Some(amount) => amount,
            None => 0,
        };

        if user_contribution < amount {
            return Err(ErrorCode::InsufficientContribution.into());
        }

        // transfer the funds (PDAs transfer is done by system program, but it doesnt have private keys thats why we use signer_seeds)
        let seeds = &[
            b"reserve_wallet".as_ref(),
            reserve_wallet.name.as_bytes(),
            &[reserve_wallet.bump],
        ];
        let signer_seeds = &[&seeds[..]];

        let cpi_context = CpiContext::new_with_signer(
            context.accounts.system_program.to_account_info(),
            anchor_lang::system_program::Transfer {
                from: reserve_wallet.to_account_info(),
                to: context.accounts.withdrawer.to_account_info(),
            },
            signer_seeds,
        );

        anchor_lang::system_program::transfer(cpi_context, amount)?;

        // update reserve wallet balance and user contributions
        reserve_wallet.wallet_balance -= amount;

        if let Some(contribution) = reserve_wallet
            .user_contributions
            .iter_mut()
            .find(|contribution| contribution.user == withdrawer)
        {
            contribution.amount -= amount;

            if contribution.amount == 0 {
                if let Some(pos) = reserve_wallet
                    .user_contributions
                    .iter()
                    .position(|contribution| contribution.user == withdrawer)
                {
                    reserve_wallet.user_contributions.remove(pos);
                }
            }
        }

        msg!("Withdrawal of {} SOL from reserve wallet by user {} processed. New reserve wallet balance: {} SOL",
              amount as f64 / 1_000_000_000.0,
              withdrawer,
              reserve_wallet.wallet_balance as f64 / 1_000_000_000.0
        );

        Ok(())
    }

    pub fn transfer_from_bank_to_wallet(
        context: Context<TransferFromBankToWallet>,
        amount: u64,
    ) -> Result<()> {
        if amount == 0 {
            return Err(ErrorCode::ZeroAmount.into());
        }

        let bank_wallet = &context.accounts.bank_wallet;
        let user_wallet = &context.accounts.user_wallet;

        // Perform transfer
        let transfer_ix = anchor_lang::system_program::Transfer {
            from: bank_wallet.to_account_info(),
            to: user_wallet.to_account_info(),
        };

        let cpi_context = CpiContext::new(
            context.accounts.system_program.to_account_info(),
            transfer_ix,
        );

        anchor_lang::system_program::transfer(cpi_context, amount)?;

        // log event to API
        msg!(
            "BANK_WITHDRAWAL:{}:{}:{}",
            bank_wallet.key(),
            user_wallet.key(),
            amount,
        );

        msg!(
            "Request to transfer {} SOL from bank account to user wallet {}",
            amount as f64 / 1_000_000_000.0,
            user_wallet.key()
        );

        Ok(())
    }

    pub fn sync_wallet_balance(context: Context<SyncWalletBalance>) -> Result<()> {
        let current_balance = **context
            .accounts
            .reserve_wallet
            .to_account_info()
            .lamports
            .borrow();

        let reserve_wallet = &mut context.accounts.reserve_wallet;
        reserve_wallet.wallet_balance = current_balance;

        msg!(
            "Wallet balance synced: {} SOL",
            current_balance as f64 / 1_000_000_000.0
        );

        Ok(())
    }
}

/* ##################################### Account Structures ##################################### */

#[account]
#[derive(InitSpace)]
pub struct ReserveWallet {
    pub wallet_balance: u64,        // total pooled SOL in reserve
    pub threshold: u64,             // suggested minimum to trigger bank creation option
    pub bank_account_created: bool, // true once a bank account is linked
    pub bank_account_address: Option<Pubkey>,
    #[max_len(5)]
    pub users: Vec<Pubkey>, // participants in the reserve pool
    #[max_len(5)]
    pub user_contributions: Vec<Contribution>, // track individual contributions
    #[max_len(5)]
    pub user_approvals: Vec<Pubkey>, // track user approvals for bank account creation
    #[max_len(20)]
    pub name: String, // unique wallet identifier
    pub bump: u8, // PDA because only our system can modify/sign
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Debug, InitSpace)]
pub struct Contribution {
    pub user: Pubkey,
    pub amount: u64,
}

/* ##################################### Error Codes ##################################### */

#[error_code]
pub enum ErrorCode {
    #[msg("User already exists in the wallet")]
    UserAlreadyExists,

    #[msg("Max 5 users allowed in the wallet")]
    MaxUsersReached,

    #[msg("User not found in the wallet")]
    UserNotFound,

    #[msg("Amount cannot be zero")]
    ZeroAmount,

    #[msg("User has already approved")]
    AlreadyApproved,

    #[msg("Not all users have approved bank account creation")]
    NotAllApproved,

    #[msg("Withdrawal amount must be greater than zero")]
    ZeroWithdrawalAmount,

    #[msg("Withdrawal amount is more than your contribution")]
    InsufficientContribution,

    #[msg("Threshold not met for bank account creation")]
    ThresholdNotMet,

    #[msg("Bank account already created")]
    BankAccountAlreadyCreated,

    #[msg("Bank account not created")]
    BankAccountNotCreated,

    #[msg("Invalid bank account")]
    InvalidBankAccount,
}

/* #####################################  Instruction Contexts ##################################### */

#[derive(Accounts)]
#[instruction(wallet_name: String, threshold: u64, bump: u8)]
pub struct InitializeReserveWallet<'info> {
    #[account(
        init,
        payer = payer,
        space = ACCOUNT_DISCRIMINATOR_SIZE + ReserveWallet::INIT_SPACE,
        seeds = [b"reserve_wallet", wallet_name.as_bytes()],
        bump,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    #[account(mut)] // mutable because we are adding user pubkey into wallet
    pub first_user: Signer<'info>,

    #[account(mut)]
    // mutable because the system program will deduct lamports from OUR account(we are sponsoring? feasible? our business to B2B2C)
    pub payer: Signer<'info>,

    pub system_program: Program<'info, System>, // creates the reserve wallet account
}

#[derive(Accounts)]
pub struct JoinReserveWallet<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>, // checking if the wallet exists with this pda

    #[account(
        mut,
        constraint = reserve_wallet.users.len() < 5 @ ErrorCode::MaxUsersReached,
    )]
    pub new_user: Signer<'info>, // user signs to authorize the transaction
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>, // checking if the wallet exists with this pda

    #[account(
        mut,
        constraint = reserve_wallet.users.contains(&depositor.key()) @ ErrorCode::UserNotFound,
    )]
    pub depositor: Signer<'info>, // user signs to authorize the transaction

    pub system_program: Program<'info, System>, // transfers the SOL
}

#[derive(Accounts)]
pub struct ApproveBankAccountCreation<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
        constraint = reserve_wallet.users.contains(&approver.key()) @ ErrorCode::UserNotFound,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    #[account(mut)]
    pub approver: Signer<'info>,
}

#[derive(Accounts)]
pub struct SetBankAccountCreated<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
        constraint = reserve_wallet.wallet_balance >= reserve_wallet.threshold @ ErrorCode::ThresholdNotMet,
        constraint = !reserve_wallet.bank_account_created @ ErrorCode::BankAccountAlreadyCreated,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    // The bank wallet that will receive the funds
    #[account(mut)]
    pub bank_wallet: SystemAccount<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawFunds<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    #[account(
        mut,
        constraint = reserve_wallet.users.contains(&withdrawer.key()) @ ErrorCode::UserNotFound,
    )]
    pub withdrawer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct TransferFromBankToWallet<'info> {
    #[account(
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
        constraint = reserve_wallet.bank_account_created @ ErrorCode::BankAccountNotCreated,
        constraint = reserve_wallet.users.contains(&user_wallet.key()) @ ErrorCode::UserNotFound,
        constraint = reserve_wallet.bank_account_address == Some(bank_wallet.key()) @ ErrorCode::InvalidBankAccount,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    // The bank wallet that holds the funds and MUST sign the transaction
    #[account(mut)]
    pub bank_wallet: Signer<'info>,

    // User receiving the funds
    #[account(mut)]
    pub user_wallet: SystemAccount<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct SyncWalletBalance<'info> {
    #[account(
        mut,
        seeds = [b"reserve_wallet", reserve_wallet.name.as_bytes()],
        bump = reserve_wallet.bump,
    )]
    pub reserve_wallet: Account<'info, ReserveWallet>,

    #[account(mut)]
    pub admin: Signer<'info>,
}
