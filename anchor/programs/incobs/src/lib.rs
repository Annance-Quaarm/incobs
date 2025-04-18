#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

#[program]
pub mod incobs {
    use super::*;

  pub fn close(_ctx: Context<CloseIncobs>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.incobs.count = ctx.accounts.incobs.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.incobs.count = ctx.accounts.incobs.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeIncobs>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.incobs.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeIncobs<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Incobs::INIT_SPACE,
  payer = payer
  )]
  pub incobs: Account<'info, Incobs>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseIncobs<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub incobs: Account<'info, Incobs>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub incobs: Account<'info, Incobs>,
}

#[account]
#[derive(InitSpace)]
pub struct Incobs {
  count: u8,
}
