/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/mcbuse_wallets.json`.
 */
export type McbuseWallets = {
  "address": "E4eWGJX7rctj5NjhKvPHLDfEUcN8mkT29uVC8tGoLZCZ",
  "metadata": {
    "name": "mcbuseWallets",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "approveBankAccountCreation",
      "discriminator": [
        139,
        243,
        136,
        177,
        186,
        77,
        82,
        243
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "approver",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "depositor",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeReserveWallet",
      "discriminator": [
        87,
        182,
        73,
        15,
        160,
        84,
        70,
        34
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "walletName"
              }
            ]
          }
        },
        {
          "name": "firstUser",
          "writable": true,
          "signer": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "walletName",
          "type": "string"
        },
        {
          "name": "threshold",
          "type": "u64"
        },
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "joinReserveWallet",
      "discriminator": [
        255,
        142,
        122,
        242,
        42,
        60,
        78,
        103
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "newUser",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "setBankAccountCreated",
      "discriminator": [
        89,
        230,
        3,
        194,
        236,
        9,
        157,
        202
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "bankWallet",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "bankAccountAddress",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "syncWalletBalance",
      "discriminator": [
        99,
        57,
        23,
        207,
        197,
        203,
        163,
        234
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "transferFromBankToWallet",
      "discriminator": [
        244,
        196,
        8,
        249,
        133,
        182,
        73,
        251
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "bankWallet",
          "writable": true,
          "signer": true
        },
        {
          "name": "userWallet",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawFunds",
      "discriminator": [
        241,
        36,
        29,
        111,
        208,
        31,
        104,
        217
      ],
      "accounts": [
        {
          "name": "reserveWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  115,
                  101,
                  114,
                  118,
                  101,
                  95,
                  119,
                  97,
                  108,
                  108,
                  101,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "reserve_wallet.name",
                "account": "reserveWallet"
              }
            ]
          }
        },
        {
          "name": "withdrawer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "reserveWallet",
      "discriminator": [
        175,
        254,
        32,
        95,
        184,
        54,
        186,
        12
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "userAlreadyExists",
      "msg": "User already exists in the wallet"
    },
    {
      "code": 6001,
      "name": "maxUsersReached",
      "msg": "Max 5 users allowed in the wallet"
    },
    {
      "code": 6002,
      "name": "userNotFound",
      "msg": "User not found in the wallet"
    },
    {
      "code": 6003,
      "name": "zeroAmount",
      "msg": "Amount cannot be zero"
    },
    {
      "code": 6004,
      "name": "alreadyApproved",
      "msg": "User has already approved"
    },
    {
      "code": 6005,
      "name": "notAllApproved",
      "msg": "Not all users have approved bank account creation"
    },
    {
      "code": 6006,
      "name": "zeroWithdrawalAmount",
      "msg": "Withdrawal amount must be greater than zero"
    },
    {
      "code": 6007,
      "name": "insufficientContribution",
      "msg": "Withdrawal amount is more than your contribution"
    },
    {
      "code": 6008,
      "name": "thresholdNotMet",
      "msg": "Threshold not met for bank account creation"
    },
    {
      "code": 6009,
      "name": "bankAccountAlreadyCreated",
      "msg": "Bank account already created"
    },
    {
      "code": 6010,
      "name": "bankAccountNotCreated",
      "msg": "Bank account not created"
    },
    {
      "code": 6011,
      "name": "invalidBankAccount",
      "msg": "Invalid bank account"
    }
  ],
  "types": [
    {
      "name": "contribution",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "reserveWallet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "walletBalance",
            "type": "u64"
          },
          {
            "name": "threshold",
            "type": "u64"
          },
          {
            "name": "bankAccountCreated",
            "type": "bool"
          },
          {
            "name": "bankAccountAddress",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "users",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "userContributions",
            "type": {
              "vec": {
                "defined": {
                  "name": "contribution"
                }
              }
            }
          },
          {
            "name": "userApprovals",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
