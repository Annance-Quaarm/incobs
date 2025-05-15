
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bank
 * 
 */
export type Bank = $Result.DefaultSelection<Prisma.$BankPayload>
/**
 * Model BankAccount
 * 
 */
export type BankAccount = $Result.DefaultSelection<Prisma.$BankAccountPayload>
/**
 * Model VirtualIban
 * 
 */
export type VirtualIban = $Result.DefaultSelection<Prisma.$VirtualIbanPayload>
/**
 * Model BankTransaction
 * 
 */
export type BankTransaction = $Result.DefaultSelection<Prisma.$BankTransactionPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>
/**
 * Model ReserveWallet
 * 
 */
export type ReserveWallet = $Result.DefaultSelection<Prisma.$ReserveWalletPayload>
/**
 * Model ReserveWalletMember
 * 
 */
export type ReserveWalletMember = $Result.DefaultSelection<Prisma.$ReserveWalletMemberPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  CLOSED: 'CLOSED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const TransactionDirection: {
  INCOMING: 'INCOMING',
  OUTGOING: 'OUTGOING'
};

export type TransactionDirection = (typeof TransactionDirection)[keyof typeof TransactionDirection]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type TransactionDirection = $Enums.TransactionDirection

export const TransactionDirection: typeof $Enums.TransactionDirection

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banks
 * const banks = await prisma.bank.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banks
   * const banks = await prisma.bank.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bank`: Exposes CRUD operations for the **Bank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.bank.findMany()
    * ```
    */
  get bank(): Prisma.BankDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccount`: Exposes CRUD operations for the **BankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccount.findMany()
    * ```
    */
  get bankAccount(): Prisma.BankAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.virtualIban`: Exposes CRUD operations for the **VirtualIban** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VirtualIbans
    * const virtualIbans = await prisma.virtualIban.findMany()
    * ```
    */
  get virtualIban(): Prisma.VirtualIbanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankTransaction`: Exposes CRUD operations for the **BankTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankTransactions
    * const bankTransactions = await prisma.bankTransaction.findMany()
    * ```
    */
  get bankTransaction(): Prisma.BankTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserveWallet`: Exposes CRUD operations for the **ReserveWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReserveWallets
    * const reserveWallets = await prisma.reserveWallet.findMany()
    * ```
    */
  get reserveWallet(): Prisma.ReserveWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserveWalletMember`: Exposes CRUD operations for the **ReserveWalletMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReserveWalletMembers
    * const reserveWalletMembers = await prisma.reserveWalletMember.findMany()
    * ```
    */
  get reserveWalletMember(): Prisma.ReserveWalletMemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bank: 'Bank',
    BankAccount: 'BankAccount',
    VirtualIban: 'VirtualIban',
    BankTransaction: 'BankTransaction',
    WalletTransaction: 'WalletTransaction',
    ReserveWallet: 'ReserveWallet',
    ReserveWalletMember: 'ReserveWalletMember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bank" | "bankAccount" | "virtualIban" | "bankTransaction" | "walletTransaction" | "reserveWallet" | "reserveWalletMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bank: {
        payload: Prisma.$BankPayload<ExtArgs>
        fields: Prisma.BankFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findFirst: {
            args: Prisma.BankFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          findMany: {
            args: Prisma.BankFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          create: {
            args: Prisma.BankCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          createMany: {
            args: Prisma.BankCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          delete: {
            args: Prisma.BankDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          update: {
            args: Prisma.BankUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          deleteMany: {
            args: Prisma.BankDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>[]
          }
          upsert: {
            args: Prisma.BankUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankPayload>
          }
          aggregate: {
            args: Prisma.BankAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank>
          }
          groupBy: {
            args: Prisma.BankGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCountArgs<ExtArgs>
            result: $Utils.Optional<BankCountAggregateOutputType> | number
          }
        }
      }
      BankAccount: {
        payload: Prisma.$BankAccountPayload<ExtArgs>
        fields: Prisma.BankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findFirst: {
            args: Prisma.BankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          findMany: {
            args: Prisma.BankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          create: {
            args: Prisma.BankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          createMany: {
            args: Prisma.BankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          delete: {
            args: Prisma.BankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          update: {
            args: Prisma.BankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          deleteMany: {
            args: Prisma.BankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>[]
          }
          upsert: {
            args: Prisma.BankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankAccountPayload>
          }
          aggregate: {
            args: Prisma.BankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccount>
          }
          groupBy: {
            args: Prisma.BankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountCountAggregateOutputType> | number
          }
        }
      }
      VirtualIban: {
        payload: Prisma.$VirtualIbanPayload<ExtArgs>
        fields: Prisma.VirtualIbanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VirtualIbanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VirtualIbanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          findFirst: {
            args: Prisma.VirtualIbanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VirtualIbanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          findMany: {
            args: Prisma.VirtualIbanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>[]
          }
          create: {
            args: Prisma.VirtualIbanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          createMany: {
            args: Prisma.VirtualIbanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VirtualIbanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>[]
          }
          delete: {
            args: Prisma.VirtualIbanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          update: {
            args: Prisma.VirtualIbanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          deleteMany: {
            args: Prisma.VirtualIbanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VirtualIbanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VirtualIbanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>[]
          }
          upsert: {
            args: Prisma.VirtualIbanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VirtualIbanPayload>
          }
          aggregate: {
            args: Prisma.VirtualIbanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVirtualIban>
          }
          groupBy: {
            args: Prisma.VirtualIbanGroupByArgs<ExtArgs>
            result: $Utils.Optional<VirtualIbanGroupByOutputType>[]
          }
          count: {
            args: Prisma.VirtualIbanCountArgs<ExtArgs>
            result: $Utils.Optional<VirtualIbanCountAggregateOutputType> | number
          }
        }
      }
      BankTransaction: {
        payload: Prisma.$BankTransactionPayload<ExtArgs>
        fields: Prisma.BankTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findFirst: {
            args: Prisma.BankTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          findMany: {
            args: Prisma.BankTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          create: {
            args: Prisma.BankTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          createMany: {
            args: Prisma.BankTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          delete: {
            args: Prisma.BankTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          update: {
            args: Prisma.BankTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BankTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BankTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankTransactionPayload>
          }
          aggregate: {
            args: Prisma.BankTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankTransaction>
          }
          groupBy: {
            args: Prisma.BankTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BankTransactionCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
          }
        }
      }
      ReserveWallet: {
        payload: Prisma.$ReserveWalletPayload<ExtArgs>
        fields: Prisma.ReserveWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReserveWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReserveWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          findFirst: {
            args: Prisma.ReserveWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReserveWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          findMany: {
            args: Prisma.ReserveWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>[]
          }
          create: {
            args: Prisma.ReserveWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          createMany: {
            args: Prisma.ReserveWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReserveWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>[]
          }
          delete: {
            args: Prisma.ReserveWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          update: {
            args: Prisma.ReserveWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          deleteMany: {
            args: Prisma.ReserveWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReserveWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReserveWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>[]
          }
          upsert: {
            args: Prisma.ReserveWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletPayload>
          }
          aggregate: {
            args: Prisma.ReserveWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserveWallet>
          }
          groupBy: {
            args: Prisma.ReserveWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReserveWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReserveWalletCountArgs<ExtArgs>
            result: $Utils.Optional<ReserveWalletCountAggregateOutputType> | number
          }
        }
      }
      ReserveWalletMember: {
        payload: Prisma.$ReserveWalletMemberPayload<ExtArgs>
        fields: Prisma.ReserveWalletMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReserveWalletMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReserveWalletMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          findFirst: {
            args: Prisma.ReserveWalletMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReserveWalletMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          findMany: {
            args: Prisma.ReserveWalletMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>[]
          }
          create: {
            args: Prisma.ReserveWalletMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          createMany: {
            args: Prisma.ReserveWalletMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReserveWalletMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>[]
          }
          delete: {
            args: Prisma.ReserveWalletMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          update: {
            args: Prisma.ReserveWalletMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          deleteMany: {
            args: Prisma.ReserveWalletMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReserveWalletMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReserveWalletMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>[]
          }
          upsert: {
            args: Prisma.ReserveWalletMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReserveWalletMemberPayload>
          }
          aggregate: {
            args: Prisma.ReserveWalletMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserveWalletMember>
          }
          groupBy: {
            args: Prisma.ReserveWalletMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReserveWalletMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReserveWalletMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ReserveWalletMemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bank?: BankOmit
    bankAccount?: BankAccountOmit
    virtualIban?: VirtualIbanOmit
    bankTransaction?: BankTransactionOmit
    walletTransaction?: WalletTransactionOmit
    reserveWallet?: ReserveWalletOmit
    reserveWalletMember?: ReserveWalletMemberOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BankCountOutputType
   */

  export type BankCountOutputType = {
    accounts: number
  }

  export type BankCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | BankCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCountOutputType
     */
    select?: BankCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankCountOutputType without action
   */
  export type BankCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
  }


  /**
   * Count Type BankAccountCountOutputType
   */

  export type BankAccountCountOutputType = {
    virtualIbans: number
    transactions: number
  }

  export type BankAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    virtualIbans?: boolean | BankAccountCountOutputTypeCountVirtualIbansArgs
    transactions?: boolean | BankAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountCountOutputType
     */
    select?: BankAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountVirtualIbansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualIbanWhereInput
  }

  /**
   * BankAccountCountOutputType without action
   */
  export type BankAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }


  /**
   * Count Type VirtualIbanCountOutputType
   */

  export type VirtualIbanCountOutputType = {
    transactions: number
  }

  export type VirtualIbanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | VirtualIbanCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * VirtualIbanCountOutputType without action
   */
  export type VirtualIbanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIbanCountOutputType
     */
    select?: VirtualIbanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VirtualIbanCountOutputType without action
   */
  export type VirtualIbanCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
  }


  /**
   * Count Type ReserveWalletCountOutputType
   */

  export type ReserveWalletCountOutputType = {
    members: number
  }

  export type ReserveWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ReserveWalletCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ReserveWalletCountOutputType without action
   */
  export type ReserveWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletCountOutputType
     */
    select?: ReserveWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReserveWalletCountOutputType without action
   */
  export type ReserveWalletCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReserveWalletMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bank
   */

  export type AggregateBank = {
    _count: BankCountAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  export type BankMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank to aggregate.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banks
    **/
    _count?: true | BankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankMaxAggregateInputType
  }

  export type GetBankAggregateType<T extends BankAggregateArgs> = {
        [P in keyof T & keyof AggregateBank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank[P]>
      : GetScalarType<T[P], AggregateBank[P]>
  }




  export type BankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWhereInput
    orderBy?: BankOrderByWithAggregationInput | BankOrderByWithAggregationInput[]
    by: BankScalarFieldEnum[] | BankScalarFieldEnum
    having?: BankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCountAggregateInputType | true
    _min?: BankMinAggregateInputType
    _max?: BankMaxAggregateInputType
  }

  export type BankGroupByOutputType = {
    id: string
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: BankCountAggregateOutputType | null
    _min: BankMinAggregateOutputType | null
    _max: BankMaxAggregateOutputType | null
  }

  type GetBankGroupByPayload<T extends BankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankGroupByOutputType[P]>
            : GetScalarType<T[P], BankGroupByOutputType[P]>
        }
      >
    >


  export type BankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | Bank$accountsArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank"]>

  export type BankSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bank"]>

  export type BankSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bank"]>

  export type BankSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["bank"]>
  export type BankInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Bank$accountsArgs<ExtArgs>
    _count?: boolean | BankCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BankIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank"
    objects: {
      accounts: Prisma.$BankAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bank"]>
    composites: {}
  }

  type BankGetPayload<S extends boolean | null | undefined | BankDefaultArgs> = $Result.GetResult<Prisma.$BankPayload, S>

  type BankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCountAggregateInputType | true
    }

  export interface BankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank'], meta: { name: 'Bank' } }
    /**
     * Find zero or one Bank that matches the filter.
     * @param {BankFindUniqueArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankFindUniqueArgs>(args: SelectSubset<T, BankFindUniqueArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankFindUniqueOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankFindUniqueOrThrowArgs>(args: SelectSubset<T, BankFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankFindFirstArgs>(args?: SelectSubset<T, BankFindFirstArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindFirstOrThrowArgs} args - Arguments to find a Bank
     * @example
     * // Get one Bank
     * const bank = await prisma.bank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankFindFirstOrThrowArgs>(args?: SelectSubset<T, BankFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.bank.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.bank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithIdOnly = await prisma.bank.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankFindManyArgs>(args?: SelectSubset<T, BankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank.
     * @param {BankCreateArgs} args - Arguments to create a Bank.
     * @example
     * // Create one Bank
     * const Bank = await prisma.bank.create({
     *   data: {
     *     // ... data to create a Bank
     *   }
     * })
     * 
     */
    create<T extends BankCreateArgs>(args: SelectSubset<T, BankCreateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {BankCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCreateManyArgs>(args?: SelectSubset<T, BankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banks and returns the data saved in the database.
     * @param {BankCreateManyAndReturnArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const bank = await prisma.bank.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankCreateManyAndReturnArgs>(args?: SelectSubset<T, BankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank.
     * @param {BankDeleteArgs} args - Arguments to delete one Bank.
     * @example
     * // Delete one Bank
     * const Bank = await prisma.bank.delete({
     *   where: {
     *     // ... filter to delete one Bank
     *   }
     * })
     * 
     */
    delete<T extends BankDeleteArgs>(args: SelectSubset<T, BankDeleteArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank.
     * @param {BankUpdateArgs} args - Arguments to update one Bank.
     * @example
     * // Update one Bank
     * const bank = await prisma.bank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankUpdateArgs>(args: SelectSubset<T, BankUpdateArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {BankDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.bank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankDeleteManyArgs>(args?: SelectSubset<T, BankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankUpdateManyArgs>(args: SelectSubset<T, BankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks and returns the data updated in the database.
     * @param {BankUpdateManyAndReturnArgs} args - Arguments to update many Banks.
     * @example
     * // Update many Banks
     * const bank = await prisma.bank.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banks and only return the `id`
     * const bankWithIdOnly = await prisma.bank.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankUpdateManyAndReturnArgs>(args: SelectSubset<T, BankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank.
     * @param {BankUpsertArgs} args - Arguments to update or create a Bank.
     * @example
     * // Update or create a Bank
     * const bank = await prisma.bank.upsert({
     *   create: {
     *     // ... data to create a Bank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank we want to update
     *   }
     * })
     */
    upsert<T extends BankUpsertArgs>(args: SelectSubset<T, BankUpsertArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.bank.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends BankCountArgs>(
      args?: Subset<T, BankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAggregateArgs>(args: Subset<T, BankAggregateArgs>): Prisma.PrismaPromise<GetBankAggregateType<T>>

    /**
     * Group by Bank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankGroupByArgs['orderBy'] }
        : { orderBy?: BankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank model
   */
  readonly fields: BankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Bank$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Bank$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bank model
   */
  interface BankFieldRefs {
    readonly id: FieldRef<"Bank", 'String'>
    readonly name: FieldRef<"Bank", 'String'>
    readonly code: FieldRef<"Bank", 'String'>
    readonly createdAt: FieldRef<"Bank", 'DateTime'>
    readonly updatedAt: FieldRef<"Bank", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bank findUnique
   */
  export type BankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findUniqueOrThrow
   */
  export type BankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank findFirst
   */
  export type BankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findFirstOrThrow
   */
  export type BankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Bank to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banks.
     */
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank findMany
   */
  export type BankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter, which Banks to fetch.
     */
    where?: BankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banks to fetch.
     */
    orderBy?: BankOrderByWithRelationInput | BankOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banks.
     */
    cursor?: BankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banks.
     */
    skip?: number
    distinct?: BankScalarFieldEnum | BankScalarFieldEnum[]
  }

  /**
   * Bank create
   */
  export type BankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank.
     */
    data: XOR<BankCreateInput, BankUncheckedCreateInput>
  }

  /**
   * Bank createMany
   */
  export type BankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank createManyAndReturn
   */
  export type BankCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to create many Banks.
     */
    data: BankCreateManyInput | BankCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank update
   */
  export type BankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank.
     */
    data: XOR<BankUpdateInput, BankUncheckedUpdateInput>
    /**
     * Choose, which Bank to update.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank updateMany
   */
  export type BankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank updateManyAndReturn
   */
  export type BankUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * The data used to update Banks.
     */
    data: XOR<BankUpdateManyMutationInput, BankUncheckedUpdateManyInput>
    /**
     * Filter which Banks to update
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to update.
     */
    limit?: number
  }

  /**
   * Bank upsert
   */
  export type BankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank to update in case it exists.
     */
    where: BankWhereUniqueInput
    /**
     * In case the Bank found by the `where` argument doesn't exist, create a new Bank with this data.
     */
    create: XOR<BankCreateInput, BankUncheckedCreateInput>
    /**
     * In case the Bank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankUpdateInput, BankUncheckedUpdateInput>
  }

  /**
   * Bank delete
   */
  export type BankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
    /**
     * Filter which Bank to delete.
     */
    where: BankWhereUniqueInput
  }

  /**
   * Bank deleteMany
   */
  export type BankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banks to delete
     */
    where?: BankWhereInput
    /**
     * Limit how many Banks to delete.
     */
    limit?: number
  }

  /**
   * Bank.accounts
   */
  export type Bank$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    cursor?: BankAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * Bank without action
   */
  export type BankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank
     */
    select?: BankSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank
     */
    omit?: BankOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankInclude<ExtArgs> | null
  }


  /**
   * Model BankAccount
   */

  export type AggregateBankAccount = {
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  export type BankAccountAvgAggregateOutputType = {
    balance: number | null
  }

  export type BankAccountSumAggregateOutputType = {
    balance: bigint | null
  }

  export type BankAccountMinAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    balance: bigint | null
    status: $Enums.AccountStatus | null
    bankId: string | null
    reserveWalletId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountMaxAggregateOutputType = {
    id: string | null
    accountNumber: string | null
    balance: bigint | null
    status: $Enums.AccountStatus | null
    bankId: string | null
    reserveWalletId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankAccountCountAggregateOutputType = {
    id: number
    accountNumber: number
    balance: number
    status: number
    bankId: number
    reserveWalletId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankAccountAvgAggregateInputType = {
    balance?: true
  }

  export type BankAccountSumAggregateInputType = {
    balance?: true
  }

  export type BankAccountMinAggregateInputType = {
    id?: true
    accountNumber?: true
    balance?: true
    status?: true
    bankId?: true
    reserveWalletId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountMaxAggregateInputType = {
    id?: true
    accountNumber?: true
    balance?: true
    status?: true
    bankId?: true
    reserveWalletId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankAccountCountAggregateInputType = {
    id?: true
    accountNumber?: true
    balance?: true
    status?: true
    bankId?: true
    reserveWalletId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccount to aggregate.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankAccounts
    **/
    _count?: true | BankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountMaxAggregateInputType
  }

  export type GetBankAccountAggregateType<T extends BankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccount[P]>
      : GetScalarType<T[P], AggregateBankAccount[P]>
  }




  export type BankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankAccountWhereInput
    orderBy?: BankAccountOrderByWithAggregationInput | BankAccountOrderByWithAggregationInput[]
    by: BankAccountScalarFieldEnum[] | BankAccountScalarFieldEnum
    having?: BankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountCountAggregateInputType | true
    _avg?: BankAccountAvgAggregateInputType
    _sum?: BankAccountSumAggregateInputType
    _min?: BankAccountMinAggregateInputType
    _max?: BankAccountMaxAggregateInputType
  }

  export type BankAccountGroupByOutputType = {
    id: string
    accountNumber: string
    balance: bigint
    status: $Enums.AccountStatus
    bankId: string
    reserveWalletId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BankAccountCountAggregateOutputType | null
    _avg: BankAccountAvgAggregateOutputType | null
    _sum: BankAccountSumAggregateOutputType | null
    _min: BankAccountMinAggregateOutputType | null
    _max: BankAccountMaxAggregateOutputType | null
  }

  type GetBankAccountGroupByPayload<T extends BankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountGroupByOutputType[P]>
        }
      >
    >


  export type BankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    balance?: boolean
    status?: boolean
    bankId?: boolean
    reserveWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
    virtualIbans?: boolean | BankAccount$virtualIbansArgs<ExtArgs>
    transactions?: boolean | BankAccount$transactionsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    balance?: boolean
    status?: boolean
    bankId?: boolean
    reserveWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNumber?: boolean
    balance?: boolean
    status?: boolean
    bankId?: boolean
    reserveWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccount"]>

  export type BankAccountSelectScalar = {
    id?: boolean
    accountNumber?: boolean
    balance?: boolean
    status?: boolean
    bankId?: boolean
    reserveWalletId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountNumber" | "balance" | "status" | "bankId" | "reserveWalletId" | "createdAt" | "updatedAt", ExtArgs["result"]["bankAccount"]>
  export type BankAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
    virtualIbans?: boolean | BankAccount$virtualIbansArgs<ExtArgs>
    transactions?: boolean | BankAccount$transactionsArgs<ExtArgs>
    _count?: boolean | BankAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BankAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
  }
  export type BankAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | BankDefaultArgs<ExtArgs>
    reserveWallet?: boolean | BankAccount$reserveWalletArgs<ExtArgs>
  }

  export type $BankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankAccount"
    objects: {
      bank: Prisma.$BankPayload<ExtArgs>
      reserveWallet: Prisma.$ReserveWalletPayload<ExtArgs> | null
      virtualIbans: Prisma.$VirtualIbanPayload<ExtArgs>[]
      transactions: Prisma.$BankTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountNumber: string
      balance: bigint
      status: $Enums.AccountStatus
      bankId: string
      reserveWalletId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankAccount"]>
    composites: {}
  }

  type BankAccountGetPayload<S extends boolean | null | undefined | BankAccountDefaultArgs> = $Result.GetResult<Prisma.$BankAccountPayload, S>

  type BankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountCountAggregateInputType | true
    }

  export interface BankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankAccount'], meta: { name: 'BankAccount' } }
    /**
     * Find zero or one BankAccount that matches the filter.
     * @param {BankAccountFindUniqueArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankAccountFindUniqueArgs>(args: SelectSubset<T, BankAccountFindUniqueArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankAccountFindUniqueOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, BankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankAccountFindFirstArgs>(args?: SelectSubset<T, BankAccountFindFirstArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindFirstOrThrowArgs} args - Arguments to find a BankAccount
     * @example
     * // Get one BankAccount
     * const bankAccount = await prisma.bankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, BankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankAccountFindManyArgs>(args?: SelectSubset<T, BankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccount.
     * @param {BankAccountCreateArgs} args - Arguments to create a BankAccount.
     * @example
     * // Create one BankAccount
     * const BankAccount = await prisma.bankAccount.create({
     *   data: {
     *     // ... data to create a BankAccount
     *   }
     * })
     * 
     */
    create<T extends BankAccountCreateArgs>(args: SelectSubset<T, BankAccountCreateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {BankAccountCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankAccountCreateManyArgs>(args?: SelectSubset<T, BankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankAccounts and returns the data saved in the database.
     * @param {BankAccountCreateManyAndReturnArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccount = await prisma.bankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, BankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankAccount.
     * @param {BankAccountDeleteArgs} args - Arguments to delete one BankAccount.
     * @example
     * // Delete one BankAccount
     * const BankAccount = await prisma.bankAccount.delete({
     *   where: {
     *     // ... filter to delete one BankAccount
     *   }
     * })
     * 
     */
    delete<T extends BankAccountDeleteArgs>(args: SelectSubset<T, BankAccountDeleteArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccount.
     * @param {BankAccountUpdateArgs} args - Arguments to update one BankAccount.
     * @example
     * // Update one BankAccount
     * const bankAccount = await prisma.bankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankAccountUpdateArgs>(args: SelectSubset<T, BankAccountUpdateArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {BankAccountDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankAccountDeleteManyArgs>(args?: SelectSubset<T, BankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankAccountUpdateManyArgs>(args: SelectSubset<T, BankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts and returns the data updated in the database.
     * @param {BankAccountUpdateManyAndReturnArgs} args - Arguments to update many BankAccounts.
     * @example
     * // Update many BankAccounts
     * const bankAccount = await prisma.bankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankAccounts and only return the `id`
     * const bankAccountWithIdOnly = await prisma.bankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, BankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankAccount.
     * @param {BankAccountUpsertArgs} args - Arguments to update or create a BankAccount.
     * @example
     * // Update or create a BankAccount
     * const bankAccount = await prisma.bankAccount.upsert({
     *   create: {
     *     // ... data to create a BankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccount we want to update
     *   }
     * })
     */
    upsert<T extends BankAccountUpsertArgs>(args: SelectSubset<T, BankAccountUpsertArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccount.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends BankAccountCountArgs>(
      args?: Subset<T, BankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountAggregateArgs>(args: Subset<T, BankAccountAggregateArgs>): Prisma.PrismaPromise<GetBankAccountAggregateType<T>>

    /**
     * Group by BankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankAccountGroupByArgs['orderBy'] }
        : { orderBy?: BankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankAccount model
   */
  readonly fields: BankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends BankDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankDefaultArgs<ExtArgs>>): Prisma__BankClient<$Result.GetResult<Prisma.$BankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserveWallet<T extends BankAccount$reserveWalletArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$reserveWalletArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    virtualIbans<T extends BankAccount$virtualIbansArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$virtualIbansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends BankAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, BankAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankAccount model
   */
  interface BankAccountFieldRefs {
    readonly id: FieldRef<"BankAccount", 'String'>
    readonly accountNumber: FieldRef<"BankAccount", 'String'>
    readonly balance: FieldRef<"BankAccount", 'BigInt'>
    readonly status: FieldRef<"BankAccount", 'AccountStatus'>
    readonly bankId: FieldRef<"BankAccount", 'String'>
    readonly reserveWalletId: FieldRef<"BankAccount", 'String'>
    readonly createdAt: FieldRef<"BankAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"BankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankAccount findUnique
   */
  export type BankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findUniqueOrThrow
   */
  export type BankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount findFirst
   */
  export type BankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findFirstOrThrow
   */
  export type BankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccount to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankAccounts.
     */
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount findMany
   */
  export type BankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter, which BankAccounts to fetch.
     */
    where?: BankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankAccounts to fetch.
     */
    orderBy?: BankAccountOrderByWithRelationInput | BankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankAccounts.
     */
    cursor?: BankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankAccounts.
     */
    skip?: number
    distinct?: BankAccountScalarFieldEnum | BankAccountScalarFieldEnum[]
  }

  /**
   * BankAccount create
   */
  export type BankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a BankAccount.
     */
    data: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
  }

  /**
   * BankAccount createMany
   */
  export type BankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankAccount createManyAndReturn
   */
  export type BankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many BankAccounts.
     */
    data: BankAccountCreateManyInput | BankAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount update
   */
  export type BankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a BankAccount.
     */
    data: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
    /**
     * Choose, which BankAccount to update.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount updateMany
   */
  export type BankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
  }

  /**
   * BankAccount updateManyAndReturn
   */
  export type BankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * The data used to update BankAccounts.
     */
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyInput>
    /**
     * Filter which BankAccounts to update
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankAccount upsert
   */
  export type BankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the BankAccount to update in case it exists.
     */
    where: BankAccountWhereUniqueInput
    /**
     * In case the BankAccount found by the `where` argument doesn't exist, create a new BankAccount with this data.
     */
    create: XOR<BankAccountCreateInput, BankAccountUncheckedCreateInput>
    /**
     * In case the BankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankAccountUpdateInput, BankAccountUncheckedUpdateInput>
  }

  /**
   * BankAccount delete
   */
  export type BankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    /**
     * Filter which BankAccount to delete.
     */
    where: BankAccountWhereUniqueInput
  }

  /**
   * BankAccount deleteMany
   */
  export type BankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankAccounts to delete
     */
    where?: BankAccountWhereInput
    /**
     * Limit how many BankAccounts to delete.
     */
    limit?: number
  }

  /**
   * BankAccount.reserveWallet
   */
  export type BankAccount$reserveWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    where?: ReserveWalletWhereInput
  }

  /**
   * BankAccount.virtualIbans
   */
  export type BankAccount$virtualIbansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    where?: VirtualIbanWhereInput
    orderBy?: VirtualIbanOrderByWithRelationInput | VirtualIbanOrderByWithRelationInput[]
    cursor?: VirtualIbanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VirtualIbanScalarFieldEnum | VirtualIbanScalarFieldEnum[]
  }

  /**
   * BankAccount.transactions
   */
  export type BankAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankAccount without action
   */
  export type BankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
  }


  /**
   * Model VirtualIban
   */

  export type AggregateVirtualIban = {
    _count: VirtualIbanCountAggregateOutputType | null
    _min: VirtualIbanMinAggregateOutputType | null
    _max: VirtualIbanMaxAggregateOutputType | null
  }

  export type VirtualIbanMinAggregateOutputType = {
    id: string | null
    iban: string | null
    bankAccountId: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VirtualIbanMaxAggregateOutputType = {
    id: string | null
    iban: string | null
    bankAccountId: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VirtualIbanCountAggregateOutputType = {
    id: number
    iban: number
    bankAccountId: number
    walletAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VirtualIbanMinAggregateInputType = {
    id?: true
    iban?: true
    bankAccountId?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VirtualIbanMaxAggregateInputType = {
    id?: true
    iban?: true
    bankAccountId?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VirtualIbanCountAggregateInputType = {
    id?: true
    iban?: true
    bankAccountId?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VirtualIbanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualIban to aggregate.
     */
    where?: VirtualIbanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualIbans to fetch.
     */
    orderBy?: VirtualIbanOrderByWithRelationInput | VirtualIbanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VirtualIbanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualIbans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualIbans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VirtualIbans
    **/
    _count?: true | VirtualIbanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VirtualIbanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VirtualIbanMaxAggregateInputType
  }

  export type GetVirtualIbanAggregateType<T extends VirtualIbanAggregateArgs> = {
        [P in keyof T & keyof AggregateVirtualIban]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVirtualIban[P]>
      : GetScalarType<T[P], AggregateVirtualIban[P]>
  }




  export type VirtualIbanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VirtualIbanWhereInput
    orderBy?: VirtualIbanOrderByWithAggregationInput | VirtualIbanOrderByWithAggregationInput[]
    by: VirtualIbanScalarFieldEnum[] | VirtualIbanScalarFieldEnum
    having?: VirtualIbanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VirtualIbanCountAggregateInputType | true
    _min?: VirtualIbanMinAggregateInputType
    _max?: VirtualIbanMaxAggregateInputType
  }

  export type VirtualIbanGroupByOutputType = {
    id: string
    iban: string
    bankAccountId: string
    walletAddress: string
    createdAt: Date
    updatedAt: Date
    _count: VirtualIbanCountAggregateOutputType | null
    _min: VirtualIbanMinAggregateOutputType | null
    _max: VirtualIbanMaxAggregateOutputType | null
  }

  type GetVirtualIbanGroupByPayload<T extends VirtualIbanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VirtualIbanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VirtualIbanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VirtualIbanGroupByOutputType[P]>
            : GetScalarType<T[P], VirtualIbanGroupByOutputType[P]>
        }
      >
    >


  export type VirtualIbanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iban?: boolean
    bankAccountId?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    transactions?: boolean | VirtualIban$transactionsArgs<ExtArgs>
    _count?: boolean | VirtualIbanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualIban"]>

  export type VirtualIbanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iban?: boolean
    bankAccountId?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualIban"]>

  export type VirtualIbanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iban?: boolean
    bankAccountId?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["virtualIban"]>

  export type VirtualIbanSelectScalar = {
    id?: boolean
    iban?: boolean
    bankAccountId?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VirtualIbanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iban" | "bankAccountId" | "walletAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["virtualIban"]>
  export type VirtualIbanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    transactions?: boolean | VirtualIban$transactionsArgs<ExtArgs>
    _count?: boolean | VirtualIbanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VirtualIbanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }
  export type VirtualIbanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
  }

  export type $VirtualIbanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VirtualIban"
    objects: {
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
      transactions: Prisma.$BankTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      iban: string
      bankAccountId: string
      walletAddress: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["virtualIban"]>
    composites: {}
  }

  type VirtualIbanGetPayload<S extends boolean | null | undefined | VirtualIbanDefaultArgs> = $Result.GetResult<Prisma.$VirtualIbanPayload, S>

  type VirtualIbanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VirtualIbanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VirtualIbanCountAggregateInputType | true
    }

  export interface VirtualIbanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VirtualIban'], meta: { name: 'VirtualIban' } }
    /**
     * Find zero or one VirtualIban that matches the filter.
     * @param {VirtualIbanFindUniqueArgs} args - Arguments to find a VirtualIban
     * @example
     * // Get one VirtualIban
     * const virtualIban = await prisma.virtualIban.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VirtualIbanFindUniqueArgs>(args: SelectSubset<T, VirtualIbanFindUniqueArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VirtualIban that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VirtualIbanFindUniqueOrThrowArgs} args - Arguments to find a VirtualIban
     * @example
     * // Get one VirtualIban
     * const virtualIban = await prisma.virtualIban.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VirtualIbanFindUniqueOrThrowArgs>(args: SelectSubset<T, VirtualIbanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualIban that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanFindFirstArgs} args - Arguments to find a VirtualIban
     * @example
     * // Get one VirtualIban
     * const virtualIban = await prisma.virtualIban.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VirtualIbanFindFirstArgs>(args?: SelectSubset<T, VirtualIbanFindFirstArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VirtualIban that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanFindFirstOrThrowArgs} args - Arguments to find a VirtualIban
     * @example
     * // Get one VirtualIban
     * const virtualIban = await prisma.virtualIban.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VirtualIbanFindFirstOrThrowArgs>(args?: SelectSubset<T, VirtualIbanFindFirstOrThrowArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VirtualIbans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VirtualIbans
     * const virtualIbans = await prisma.virtualIban.findMany()
     * 
     * // Get first 10 VirtualIbans
     * const virtualIbans = await prisma.virtualIban.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const virtualIbanWithIdOnly = await prisma.virtualIban.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VirtualIbanFindManyArgs>(args?: SelectSubset<T, VirtualIbanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VirtualIban.
     * @param {VirtualIbanCreateArgs} args - Arguments to create a VirtualIban.
     * @example
     * // Create one VirtualIban
     * const VirtualIban = await prisma.virtualIban.create({
     *   data: {
     *     // ... data to create a VirtualIban
     *   }
     * })
     * 
     */
    create<T extends VirtualIbanCreateArgs>(args: SelectSubset<T, VirtualIbanCreateArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VirtualIbans.
     * @param {VirtualIbanCreateManyArgs} args - Arguments to create many VirtualIbans.
     * @example
     * // Create many VirtualIbans
     * const virtualIban = await prisma.virtualIban.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VirtualIbanCreateManyArgs>(args?: SelectSubset<T, VirtualIbanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VirtualIbans and returns the data saved in the database.
     * @param {VirtualIbanCreateManyAndReturnArgs} args - Arguments to create many VirtualIbans.
     * @example
     * // Create many VirtualIbans
     * const virtualIban = await prisma.virtualIban.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VirtualIbans and only return the `id`
     * const virtualIbanWithIdOnly = await prisma.virtualIban.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VirtualIbanCreateManyAndReturnArgs>(args?: SelectSubset<T, VirtualIbanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VirtualIban.
     * @param {VirtualIbanDeleteArgs} args - Arguments to delete one VirtualIban.
     * @example
     * // Delete one VirtualIban
     * const VirtualIban = await prisma.virtualIban.delete({
     *   where: {
     *     // ... filter to delete one VirtualIban
     *   }
     * })
     * 
     */
    delete<T extends VirtualIbanDeleteArgs>(args: SelectSubset<T, VirtualIbanDeleteArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VirtualIban.
     * @param {VirtualIbanUpdateArgs} args - Arguments to update one VirtualIban.
     * @example
     * // Update one VirtualIban
     * const virtualIban = await prisma.virtualIban.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VirtualIbanUpdateArgs>(args: SelectSubset<T, VirtualIbanUpdateArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VirtualIbans.
     * @param {VirtualIbanDeleteManyArgs} args - Arguments to filter VirtualIbans to delete.
     * @example
     * // Delete a few VirtualIbans
     * const { count } = await prisma.virtualIban.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VirtualIbanDeleteManyArgs>(args?: SelectSubset<T, VirtualIbanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualIbans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VirtualIbans
     * const virtualIban = await prisma.virtualIban.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VirtualIbanUpdateManyArgs>(args: SelectSubset<T, VirtualIbanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VirtualIbans and returns the data updated in the database.
     * @param {VirtualIbanUpdateManyAndReturnArgs} args - Arguments to update many VirtualIbans.
     * @example
     * // Update many VirtualIbans
     * const virtualIban = await prisma.virtualIban.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VirtualIbans and only return the `id`
     * const virtualIbanWithIdOnly = await prisma.virtualIban.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VirtualIbanUpdateManyAndReturnArgs>(args: SelectSubset<T, VirtualIbanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VirtualIban.
     * @param {VirtualIbanUpsertArgs} args - Arguments to update or create a VirtualIban.
     * @example
     * // Update or create a VirtualIban
     * const virtualIban = await prisma.virtualIban.upsert({
     *   create: {
     *     // ... data to create a VirtualIban
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VirtualIban we want to update
     *   }
     * })
     */
    upsert<T extends VirtualIbanUpsertArgs>(args: SelectSubset<T, VirtualIbanUpsertArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VirtualIbans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanCountArgs} args - Arguments to filter VirtualIbans to count.
     * @example
     * // Count the number of VirtualIbans
     * const count = await prisma.virtualIban.count({
     *   where: {
     *     // ... the filter for the VirtualIbans we want to count
     *   }
     * })
    **/
    count<T extends VirtualIbanCountArgs>(
      args?: Subset<T, VirtualIbanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VirtualIbanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VirtualIban.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VirtualIbanAggregateArgs>(args: Subset<T, VirtualIbanAggregateArgs>): Prisma.PrismaPromise<GetVirtualIbanAggregateType<T>>

    /**
     * Group by VirtualIban.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VirtualIbanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VirtualIbanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VirtualIbanGroupByArgs['orderBy'] }
        : { orderBy?: VirtualIbanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VirtualIbanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVirtualIbanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VirtualIban model
   */
  readonly fields: VirtualIbanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VirtualIban.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VirtualIbanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends VirtualIban$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, VirtualIban$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VirtualIban model
   */
  interface VirtualIbanFieldRefs {
    readonly id: FieldRef<"VirtualIban", 'String'>
    readonly iban: FieldRef<"VirtualIban", 'String'>
    readonly bankAccountId: FieldRef<"VirtualIban", 'String'>
    readonly walletAddress: FieldRef<"VirtualIban", 'String'>
    readonly createdAt: FieldRef<"VirtualIban", 'DateTime'>
    readonly updatedAt: FieldRef<"VirtualIban", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VirtualIban findUnique
   */
  export type VirtualIbanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter, which VirtualIban to fetch.
     */
    where: VirtualIbanWhereUniqueInput
  }

  /**
   * VirtualIban findUniqueOrThrow
   */
  export type VirtualIbanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter, which VirtualIban to fetch.
     */
    where: VirtualIbanWhereUniqueInput
  }

  /**
   * VirtualIban findFirst
   */
  export type VirtualIbanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter, which VirtualIban to fetch.
     */
    where?: VirtualIbanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualIbans to fetch.
     */
    orderBy?: VirtualIbanOrderByWithRelationInput | VirtualIbanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualIbans.
     */
    cursor?: VirtualIbanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualIbans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualIbans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualIbans.
     */
    distinct?: VirtualIbanScalarFieldEnum | VirtualIbanScalarFieldEnum[]
  }

  /**
   * VirtualIban findFirstOrThrow
   */
  export type VirtualIbanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter, which VirtualIban to fetch.
     */
    where?: VirtualIbanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualIbans to fetch.
     */
    orderBy?: VirtualIbanOrderByWithRelationInput | VirtualIbanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VirtualIbans.
     */
    cursor?: VirtualIbanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualIbans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualIbans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VirtualIbans.
     */
    distinct?: VirtualIbanScalarFieldEnum | VirtualIbanScalarFieldEnum[]
  }

  /**
   * VirtualIban findMany
   */
  export type VirtualIbanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter, which VirtualIbans to fetch.
     */
    where?: VirtualIbanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VirtualIbans to fetch.
     */
    orderBy?: VirtualIbanOrderByWithRelationInput | VirtualIbanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VirtualIbans.
     */
    cursor?: VirtualIbanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VirtualIbans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VirtualIbans.
     */
    skip?: number
    distinct?: VirtualIbanScalarFieldEnum | VirtualIbanScalarFieldEnum[]
  }

  /**
   * VirtualIban create
   */
  export type VirtualIbanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * The data needed to create a VirtualIban.
     */
    data: XOR<VirtualIbanCreateInput, VirtualIbanUncheckedCreateInput>
  }

  /**
   * VirtualIban createMany
   */
  export type VirtualIbanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VirtualIbans.
     */
    data: VirtualIbanCreateManyInput | VirtualIbanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VirtualIban createManyAndReturn
   */
  export type VirtualIbanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * The data used to create many VirtualIbans.
     */
    data: VirtualIbanCreateManyInput | VirtualIbanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualIban update
   */
  export type VirtualIbanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * The data needed to update a VirtualIban.
     */
    data: XOR<VirtualIbanUpdateInput, VirtualIbanUncheckedUpdateInput>
    /**
     * Choose, which VirtualIban to update.
     */
    where: VirtualIbanWhereUniqueInput
  }

  /**
   * VirtualIban updateMany
   */
  export type VirtualIbanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VirtualIbans.
     */
    data: XOR<VirtualIbanUpdateManyMutationInput, VirtualIbanUncheckedUpdateManyInput>
    /**
     * Filter which VirtualIbans to update
     */
    where?: VirtualIbanWhereInput
    /**
     * Limit how many VirtualIbans to update.
     */
    limit?: number
  }

  /**
   * VirtualIban updateManyAndReturn
   */
  export type VirtualIbanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * The data used to update VirtualIbans.
     */
    data: XOR<VirtualIbanUpdateManyMutationInput, VirtualIbanUncheckedUpdateManyInput>
    /**
     * Filter which VirtualIbans to update
     */
    where?: VirtualIbanWhereInput
    /**
     * Limit how many VirtualIbans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VirtualIban upsert
   */
  export type VirtualIbanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * The filter to search for the VirtualIban to update in case it exists.
     */
    where: VirtualIbanWhereUniqueInput
    /**
     * In case the VirtualIban found by the `where` argument doesn't exist, create a new VirtualIban with this data.
     */
    create: XOR<VirtualIbanCreateInput, VirtualIbanUncheckedCreateInput>
    /**
     * In case the VirtualIban was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VirtualIbanUpdateInput, VirtualIbanUncheckedUpdateInput>
  }

  /**
   * VirtualIban delete
   */
  export type VirtualIbanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    /**
     * Filter which VirtualIban to delete.
     */
    where: VirtualIbanWhereUniqueInput
  }

  /**
   * VirtualIban deleteMany
   */
  export type VirtualIbanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VirtualIbans to delete
     */
    where?: VirtualIbanWhereInput
    /**
     * Limit how many VirtualIbans to delete.
     */
    limit?: number
  }

  /**
   * VirtualIban.transactions
   */
  export type VirtualIban$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    cursor?: BankTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * VirtualIban without action
   */
  export type VirtualIbanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
  }


  /**
   * Model BankTransaction
   */

  export type AggregateBankTransaction = {
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  export type BankTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type BankTransactionSumAggregateOutputType = {
    amount: bigint | null
  }

  export type BankTransactionMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    direction: $Enums.TransactionDirection | null
    description: string | null
    status: $Enums.TransactionStatus | null
    senderName: string | null
    senderReference: string | null
    bankAccountId: string | null
    virtualIbanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankTransactionMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    direction: $Enums.TransactionDirection | null
    description: string | null
    status: $Enums.TransactionStatus | null
    senderName: string | null
    senderReference: string | null
    bankAccountId: string | null
    virtualIbanId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BankTransactionCountAggregateOutputType = {
    id: number
    amount: number
    direction: number
    description: number
    status: number
    senderName: number
    senderReference: number
    bankAccountId: number
    virtualIbanId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BankTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type BankTransactionSumAggregateInputType = {
    amount?: true
  }

  export type BankTransactionMinAggregateInputType = {
    id?: true
    amount?: true
    direction?: true
    description?: true
    status?: true
    senderName?: true
    senderReference?: true
    bankAccountId?: true
    virtualIbanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankTransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    direction?: true
    description?: true
    status?: true
    senderName?: true
    senderReference?: true
    bankAccountId?: true
    virtualIbanId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BankTransactionCountAggregateInputType = {
    id?: true
    amount?: true
    direction?: true
    description?: true
    status?: true
    senderName?: true
    senderReference?: true
    bankAccountId?: true
    virtualIbanId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BankTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransaction to aggregate.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankTransactions
    **/
    _count?: true | BankTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankTransactionMaxAggregateInputType
  }

  export type GetBankTransactionAggregateType<T extends BankTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBankTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankTransaction[P]>
      : GetScalarType<T[P], AggregateBankTransaction[P]>
  }




  export type BankTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankTransactionWhereInput
    orderBy?: BankTransactionOrderByWithAggregationInput | BankTransactionOrderByWithAggregationInput[]
    by: BankTransactionScalarFieldEnum[] | BankTransactionScalarFieldEnum
    having?: BankTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankTransactionCountAggregateInputType | true
    _avg?: BankTransactionAvgAggregateInputType
    _sum?: BankTransactionSumAggregateInputType
    _min?: BankTransactionMinAggregateInputType
    _max?: BankTransactionMaxAggregateInputType
  }

  export type BankTransactionGroupByOutputType = {
    id: string
    amount: bigint
    direction: $Enums.TransactionDirection
    description: string | null
    status: $Enums.TransactionStatus
    senderName: string | null
    senderReference: string | null
    bankAccountId: string
    virtualIbanId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BankTransactionCountAggregateOutputType | null
    _avg: BankTransactionAvgAggregateOutputType | null
    _sum: BankTransactionSumAggregateOutputType | null
    _min: BankTransactionMinAggregateOutputType | null
    _max: BankTransactionMaxAggregateOutputType | null
  }

  type GetBankTransactionGroupByPayload<T extends BankTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BankTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BankTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    direction?: boolean
    description?: boolean
    status?: boolean
    senderName?: boolean
    senderReference?: boolean
    bankAccountId?: boolean
    virtualIbanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
    walletTransaction?: boolean | BankTransaction$walletTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    direction?: boolean
    description?: boolean
    status?: boolean
    senderName?: boolean
    senderReference?: boolean
    bankAccountId?: boolean
    virtualIbanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    direction?: boolean
    description?: boolean
    status?: boolean
    senderName?: boolean
    senderReference?: boolean
    bankAccountId?: boolean
    virtualIbanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
  }, ExtArgs["result"]["bankTransaction"]>

  export type BankTransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    direction?: boolean
    description?: boolean
    status?: boolean
    senderName?: boolean
    senderReference?: boolean
    bankAccountId?: boolean
    virtualIbanId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BankTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "direction" | "description" | "status" | "senderName" | "senderReference" | "bankAccountId" | "virtualIbanId" | "createdAt" | "updatedAt", ExtArgs["result"]["bankTransaction"]>
  export type BankTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
    walletTransaction?: boolean | BankTransaction$walletTransactionArgs<ExtArgs>
  }
  export type BankTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
  }
  export type BankTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | BankAccountDefaultArgs<ExtArgs>
    virtualIban?: boolean | BankTransaction$virtualIbanArgs<ExtArgs>
  }

  export type $BankTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankTransaction"
    objects: {
      bankAccount: Prisma.$BankAccountPayload<ExtArgs>
      virtualIban: Prisma.$VirtualIbanPayload<ExtArgs> | null
      walletTransaction: Prisma.$WalletTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      direction: $Enums.TransactionDirection
      description: string | null
      status: $Enums.TransactionStatus
      senderName: string | null
      senderReference: string | null
      bankAccountId: string
      virtualIbanId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bankTransaction"]>
    composites: {}
  }

  type BankTransactionGetPayload<S extends boolean | null | undefined | BankTransactionDefaultArgs> = $Result.GetResult<Prisma.$BankTransactionPayload, S>

  type BankTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankTransactionCountAggregateInputType | true
    }

  export interface BankTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankTransaction'], meta: { name: 'BankTransaction' } }
    /**
     * Find zero or one BankTransaction that matches the filter.
     * @param {BankTransactionFindUniqueArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankTransactionFindUniqueArgs>(args: SelectSubset<T, BankTransactionFindUniqueArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankTransactionFindUniqueOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BankTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankTransactionFindFirstArgs>(args?: SelectSubset<T, BankTransactionFindFirstArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindFirstOrThrowArgs} args - Arguments to find a BankTransaction
     * @example
     * // Get one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BankTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany()
     * 
     * // Get first 10 BankTransactions
     * const bankTransactions = await prisma.bankTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankTransactionFindManyArgs>(args?: SelectSubset<T, BankTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankTransaction.
     * @param {BankTransactionCreateArgs} args - Arguments to create a BankTransaction.
     * @example
     * // Create one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.create({
     *   data: {
     *     // ... data to create a BankTransaction
     *   }
     * })
     * 
     */
    create<T extends BankTransactionCreateArgs>(args: SelectSubset<T, BankTransactionCreateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankTransactions.
     * @param {BankTransactionCreateManyArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankTransactionCreateManyArgs>(args?: SelectSubset<T, BankTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankTransactions and returns the data saved in the database.
     * @param {BankTransactionCreateManyAndReturnArgs} args - Arguments to create many BankTransactions.
     * @example
     * // Create many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BankTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankTransaction.
     * @param {BankTransactionDeleteArgs} args - Arguments to delete one BankTransaction.
     * @example
     * // Delete one BankTransaction
     * const BankTransaction = await prisma.bankTransaction.delete({
     *   where: {
     *     // ... filter to delete one BankTransaction
     *   }
     * })
     * 
     */
    delete<T extends BankTransactionDeleteArgs>(args: SelectSubset<T, BankTransactionDeleteArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankTransaction.
     * @param {BankTransactionUpdateArgs} args - Arguments to update one BankTransaction.
     * @example
     * // Update one BankTransaction
     * const bankTransaction = await prisma.bankTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankTransactionUpdateArgs>(args: SelectSubset<T, BankTransactionUpdateArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankTransactions.
     * @param {BankTransactionDeleteManyArgs} args - Arguments to filter BankTransactions to delete.
     * @example
     * // Delete a few BankTransactions
     * const { count } = await prisma.bankTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankTransactionDeleteManyArgs>(args?: SelectSubset<T, BankTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankTransactionUpdateManyArgs>(args: SelectSubset<T, BankTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankTransactions and returns the data updated in the database.
     * @param {BankTransactionUpdateManyAndReturnArgs} args - Arguments to update many BankTransactions.
     * @example
     * // Update many BankTransactions
     * const bankTransaction = await prisma.bankTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankTransactions and only return the `id`
     * const bankTransactionWithIdOnly = await prisma.bankTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BankTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankTransaction.
     * @param {BankTransactionUpsertArgs} args - Arguments to update or create a BankTransaction.
     * @example
     * // Update or create a BankTransaction
     * const bankTransaction = await prisma.bankTransaction.upsert({
     *   create: {
     *     // ... data to create a BankTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BankTransactionUpsertArgs>(args: SelectSubset<T, BankTransactionUpsertArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionCountArgs} args - Arguments to filter BankTransactions to count.
     * @example
     * // Count the number of BankTransactions
     * const count = await prisma.bankTransaction.count({
     *   where: {
     *     // ... the filter for the BankTransactions we want to count
     *   }
     * })
    **/
    count<T extends BankTransactionCountArgs>(
      args?: Subset<T, BankTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankTransactionAggregateArgs>(args: Subset<T, BankTransactionAggregateArgs>): Prisma.PrismaPromise<GetBankTransactionAggregateType<T>>

    /**
     * Group by BankTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BankTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankTransaction model
   */
  readonly fields: BankTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccount<T extends BankAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BankAccountDefaultArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    virtualIban<T extends BankTransaction$virtualIbanArgs<ExtArgs> = {}>(args?: Subset<T, BankTransaction$virtualIbanArgs<ExtArgs>>): Prisma__VirtualIbanClient<$Result.GetResult<Prisma.$VirtualIbanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    walletTransaction<T extends BankTransaction$walletTransactionArgs<ExtArgs> = {}>(args?: Subset<T, BankTransaction$walletTransactionArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankTransaction model
   */
  interface BankTransactionFieldRefs {
    readonly id: FieldRef<"BankTransaction", 'String'>
    readonly amount: FieldRef<"BankTransaction", 'BigInt'>
    readonly direction: FieldRef<"BankTransaction", 'TransactionDirection'>
    readonly description: FieldRef<"BankTransaction", 'String'>
    readonly status: FieldRef<"BankTransaction", 'TransactionStatus'>
    readonly senderName: FieldRef<"BankTransaction", 'String'>
    readonly senderReference: FieldRef<"BankTransaction", 'String'>
    readonly bankAccountId: FieldRef<"BankTransaction", 'String'>
    readonly virtualIbanId: FieldRef<"BankTransaction", 'String'>
    readonly createdAt: FieldRef<"BankTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"BankTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankTransaction findUnique
   */
  export type BankTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findUniqueOrThrow
   */
  export type BankTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction findFirst
   */
  export type BankTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findFirstOrThrow
   */
  export type BankTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransaction to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankTransactions.
     */
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction findMany
   */
  export type BankTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BankTransactions to fetch.
     */
    where?: BankTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankTransactions to fetch.
     */
    orderBy?: BankTransactionOrderByWithRelationInput | BankTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankTransactions.
     */
    cursor?: BankTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankTransactions.
     */
    skip?: number
    distinct?: BankTransactionScalarFieldEnum | BankTransactionScalarFieldEnum[]
  }

  /**
   * BankTransaction create
   */
  export type BankTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BankTransaction.
     */
    data: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
  }

  /**
   * BankTransaction createMany
   */
  export type BankTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankTransaction createManyAndReturn
   */
  export type BankTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BankTransactions.
     */
    data: BankTransactionCreateManyInput | BankTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction update
   */
  export type BankTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BankTransaction.
     */
    data: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
    /**
     * Choose, which BankTransaction to update.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction updateMany
   */
  export type BankTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
  }

  /**
   * BankTransaction updateManyAndReturn
   */
  export type BankTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BankTransactions.
     */
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BankTransactions to update
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankTransaction upsert
   */
  export type BankTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BankTransaction to update in case it exists.
     */
    where: BankTransactionWhereUniqueInput
    /**
     * In case the BankTransaction found by the `where` argument doesn't exist, create a new BankTransaction with this data.
     */
    create: XOR<BankTransactionCreateInput, BankTransactionUncheckedCreateInput>
    /**
     * In case the BankTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankTransactionUpdateInput, BankTransactionUncheckedUpdateInput>
  }

  /**
   * BankTransaction delete
   */
  export type BankTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    /**
     * Filter which BankTransaction to delete.
     */
    where: BankTransactionWhereUniqueInput
  }

  /**
   * BankTransaction deleteMany
   */
  export type BankTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankTransactions to delete
     */
    where?: BankTransactionWhereInput
    /**
     * Limit how many BankTransactions to delete.
     */
    limit?: number
  }

  /**
   * BankTransaction.virtualIban
   */
  export type BankTransaction$virtualIbanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VirtualIban
     */
    select?: VirtualIbanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VirtualIban
     */
    omit?: VirtualIbanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VirtualIbanInclude<ExtArgs> | null
    where?: VirtualIbanWhereInput
  }

  /**
   * BankTransaction.walletTransaction
   */
  export type BankTransaction$walletTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
  }

  /**
   * BankTransaction without action
   */
  export type BankTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    amount: bigint | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    description: string | null
    walletAddress: string | null
    bankTransactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    description: string | null
    walletAddress: string | null
    bankTransactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    walletAddress: number
    bankTransactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    walletAddress?: true
    bankTransactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    walletAddress?: true
    bankTransactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    walletAddress?: true
    bankTransactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: string
    amount: bigint
    description: string | null
    walletAddress: string
    bankTransactionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    walletAddress?: boolean
    bankTransactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    walletAddress?: boolean
    bankTransactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    walletAddress?: boolean
    bankTransactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    walletAddress?: boolean
    bankTransactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "walletAddress" | "bankTransactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }
  export type WalletTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }
  export type WalletTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankTransaction?: boolean | WalletTransaction$bankTransactionArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      bankTransaction: Prisma.$BankTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      description: string | null
      walletAddress: string
      bankTransactionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransactions and returns the data saved in the database.
     * @param {WalletTransactionCreateManyAndReturnArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions and returns the data updated in the database.
     * @param {WalletTransactionUpdateManyAndReturnArgs} args - Arguments to update many WalletTransactions.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankTransaction<T extends WalletTransaction$bankTransactionArgs<ExtArgs> = {}>(args?: Subset<T, WalletTransaction$bankTransactionArgs<ExtArgs>>): Prisma__BankTransactionClient<$Result.GetResult<Prisma.$BankTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletTransaction model
   */
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'String'>
    readonly amount: FieldRef<"WalletTransaction", 'BigInt'>
    readonly description: FieldRef<"WalletTransaction", 'String'>
    readonly walletAddress: FieldRef<"WalletTransaction", 'String'>
    readonly bankTransactionId: FieldRef<"WalletTransaction", 'String'>
    readonly createdAt: FieldRef<"WalletTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction createManyAndReturn
   */
  export type WalletTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
  }

  /**
   * WalletTransaction updateManyAndReturn
   */
  export type WalletTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to delete.
     */
    limit?: number
  }

  /**
   * WalletTransaction.bankTransaction
   */
  export type WalletTransaction$bankTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankTransaction
     */
    select?: BankTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankTransaction
     */
    omit?: BankTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankTransactionInclude<ExtArgs> | null
    where?: BankTransactionWhereInput
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
  }


  /**
   * Model ReserveWallet
   */

  export type AggregateReserveWallet = {
    _count: ReserveWalletCountAggregateOutputType | null
    _avg: ReserveWalletAvgAggregateOutputType | null
    _sum: ReserveWalletSumAggregateOutputType | null
    _min: ReserveWalletMinAggregateOutputType | null
    _max: ReserveWalletMaxAggregateOutputType | null
  }

  export type ReserveWalletAvgAggregateOutputType = {
    balance: number | null
    threshold: number | null
  }

  export type ReserveWalletSumAggregateOutputType = {
    balance: bigint | null
    threshold: bigint | null
  }

  export type ReserveWalletMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: bigint | null
    threshold: bigint | null
    bankAccountCreated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReserveWalletMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: bigint | null
    threshold: bigint | null
    bankAccountCreated: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReserveWalletCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    threshold: number
    bankAccountCreated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReserveWalletAvgAggregateInputType = {
    balance?: true
    threshold?: true
  }

  export type ReserveWalletSumAggregateInputType = {
    balance?: true
    threshold?: true
  }

  export type ReserveWalletMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    threshold?: true
    bankAccountCreated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReserveWalletMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    threshold?: true
    bankAccountCreated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReserveWalletCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    threshold?: true
    bankAccountCreated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReserveWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveWallet to aggregate.
     */
    where?: ReserveWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWallets to fetch.
     */
    orderBy?: ReserveWalletOrderByWithRelationInput | ReserveWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReserveWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReserveWallets
    **/
    _count?: true | ReserveWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReserveWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReserveWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReserveWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReserveWalletMaxAggregateInputType
  }

  export type GetReserveWalletAggregateType<T extends ReserveWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateReserveWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserveWallet[P]>
      : GetScalarType<T[P], AggregateReserveWallet[P]>
  }




  export type ReserveWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReserveWalletWhereInput
    orderBy?: ReserveWalletOrderByWithAggregationInput | ReserveWalletOrderByWithAggregationInput[]
    by: ReserveWalletScalarFieldEnum[] | ReserveWalletScalarFieldEnum
    having?: ReserveWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReserveWalletCountAggregateInputType | true
    _avg?: ReserveWalletAvgAggregateInputType
    _sum?: ReserveWalletSumAggregateInputType
    _min?: ReserveWalletMinAggregateInputType
    _max?: ReserveWalletMaxAggregateInputType
  }

  export type ReserveWalletGroupByOutputType = {
    id: string
    name: string
    balance: bigint
    threshold: bigint
    bankAccountCreated: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReserveWalletCountAggregateOutputType | null
    _avg: ReserveWalletAvgAggregateOutputType | null
    _sum: ReserveWalletSumAggregateOutputType | null
    _min: ReserveWalletMinAggregateOutputType | null
    _max: ReserveWalletMaxAggregateOutputType | null
  }

  type GetReserveWalletGroupByPayload<T extends ReserveWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReserveWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReserveWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReserveWalletGroupByOutputType[P]>
            : GetScalarType<T[P], ReserveWalletGroupByOutputType[P]>
        }
      >
    >


  export type ReserveWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    threshold?: boolean
    bankAccountCreated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bankAccount?: boolean | ReserveWallet$bankAccountArgs<ExtArgs>
    members?: boolean | ReserveWallet$membersArgs<ExtArgs>
    _count?: boolean | ReserveWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserveWallet"]>

  export type ReserveWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    threshold?: boolean
    bankAccountCreated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reserveWallet"]>

  export type ReserveWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    threshold?: boolean
    bankAccountCreated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reserveWallet"]>

  export type ReserveWalletSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    threshold?: boolean
    bankAccountCreated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReserveWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "threshold" | "bankAccountCreated" | "createdAt" | "updatedAt", ExtArgs["result"]["reserveWallet"]>
  export type ReserveWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccount?: boolean | ReserveWallet$bankAccountArgs<ExtArgs>
    members?: boolean | ReserveWallet$membersArgs<ExtArgs>
    _count?: boolean | ReserveWalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReserveWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReserveWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReserveWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReserveWallet"
    objects: {
      bankAccount: Prisma.$BankAccountPayload<ExtArgs> | null
      members: Prisma.$ReserveWalletMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: bigint
      threshold: bigint
      bankAccountCreated: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserveWallet"]>
    composites: {}
  }

  type ReserveWalletGetPayload<S extends boolean | null | undefined | ReserveWalletDefaultArgs> = $Result.GetResult<Prisma.$ReserveWalletPayload, S>

  type ReserveWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReserveWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReserveWalletCountAggregateInputType | true
    }

  export interface ReserveWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReserveWallet'], meta: { name: 'ReserveWallet' } }
    /**
     * Find zero or one ReserveWallet that matches the filter.
     * @param {ReserveWalletFindUniqueArgs} args - Arguments to find a ReserveWallet
     * @example
     * // Get one ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReserveWalletFindUniqueArgs>(args: SelectSubset<T, ReserveWalletFindUniqueArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReserveWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReserveWalletFindUniqueOrThrowArgs} args - Arguments to find a ReserveWallet
     * @example
     * // Get one ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReserveWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, ReserveWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletFindFirstArgs} args - Arguments to find a ReserveWallet
     * @example
     * // Get one ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReserveWalletFindFirstArgs>(args?: SelectSubset<T, ReserveWalletFindFirstArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletFindFirstOrThrowArgs} args - Arguments to find a ReserveWallet
     * @example
     * // Get one ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReserveWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, ReserveWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReserveWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReserveWallets
     * const reserveWallets = await prisma.reserveWallet.findMany()
     * 
     * // Get first 10 ReserveWallets
     * const reserveWallets = await prisma.reserveWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reserveWalletWithIdOnly = await prisma.reserveWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReserveWalletFindManyArgs>(args?: SelectSubset<T, ReserveWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReserveWallet.
     * @param {ReserveWalletCreateArgs} args - Arguments to create a ReserveWallet.
     * @example
     * // Create one ReserveWallet
     * const ReserveWallet = await prisma.reserveWallet.create({
     *   data: {
     *     // ... data to create a ReserveWallet
     *   }
     * })
     * 
     */
    create<T extends ReserveWalletCreateArgs>(args: SelectSubset<T, ReserveWalletCreateArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReserveWallets.
     * @param {ReserveWalletCreateManyArgs} args - Arguments to create many ReserveWallets.
     * @example
     * // Create many ReserveWallets
     * const reserveWallet = await prisma.reserveWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReserveWalletCreateManyArgs>(args?: SelectSubset<T, ReserveWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReserveWallets and returns the data saved in the database.
     * @param {ReserveWalletCreateManyAndReturnArgs} args - Arguments to create many ReserveWallets.
     * @example
     * // Create many ReserveWallets
     * const reserveWallet = await prisma.reserveWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReserveWallets and only return the `id`
     * const reserveWalletWithIdOnly = await prisma.reserveWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReserveWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, ReserveWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReserveWallet.
     * @param {ReserveWalletDeleteArgs} args - Arguments to delete one ReserveWallet.
     * @example
     * // Delete one ReserveWallet
     * const ReserveWallet = await prisma.reserveWallet.delete({
     *   where: {
     *     // ... filter to delete one ReserveWallet
     *   }
     * })
     * 
     */
    delete<T extends ReserveWalletDeleteArgs>(args: SelectSubset<T, ReserveWalletDeleteArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReserveWallet.
     * @param {ReserveWalletUpdateArgs} args - Arguments to update one ReserveWallet.
     * @example
     * // Update one ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReserveWalletUpdateArgs>(args: SelectSubset<T, ReserveWalletUpdateArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReserveWallets.
     * @param {ReserveWalletDeleteManyArgs} args - Arguments to filter ReserveWallets to delete.
     * @example
     * // Delete a few ReserveWallets
     * const { count } = await prisma.reserveWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReserveWalletDeleteManyArgs>(args?: SelectSubset<T, ReserveWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReserveWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReserveWallets
     * const reserveWallet = await prisma.reserveWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReserveWalletUpdateManyArgs>(args: SelectSubset<T, ReserveWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReserveWallets and returns the data updated in the database.
     * @param {ReserveWalletUpdateManyAndReturnArgs} args - Arguments to update many ReserveWallets.
     * @example
     * // Update many ReserveWallets
     * const reserveWallet = await prisma.reserveWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReserveWallets and only return the `id`
     * const reserveWalletWithIdOnly = await prisma.reserveWallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReserveWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, ReserveWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReserveWallet.
     * @param {ReserveWalletUpsertArgs} args - Arguments to update or create a ReserveWallet.
     * @example
     * // Update or create a ReserveWallet
     * const reserveWallet = await prisma.reserveWallet.upsert({
     *   create: {
     *     // ... data to create a ReserveWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReserveWallet we want to update
     *   }
     * })
     */
    upsert<T extends ReserveWalletUpsertArgs>(args: SelectSubset<T, ReserveWalletUpsertArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReserveWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletCountArgs} args - Arguments to filter ReserveWallets to count.
     * @example
     * // Count the number of ReserveWallets
     * const count = await prisma.reserveWallet.count({
     *   where: {
     *     // ... the filter for the ReserveWallets we want to count
     *   }
     * })
    **/
    count<T extends ReserveWalletCountArgs>(
      args?: Subset<T, ReserveWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReserveWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReserveWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReserveWalletAggregateArgs>(args: Subset<T, ReserveWalletAggregateArgs>): Prisma.PrismaPromise<GetReserveWalletAggregateType<T>>

    /**
     * Group by ReserveWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReserveWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReserveWalletGroupByArgs['orderBy'] }
        : { orderBy?: ReserveWalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReserveWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserveWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReserveWallet model
   */
  readonly fields: ReserveWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReserveWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReserveWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccount<T extends ReserveWallet$bankAccountArgs<ExtArgs> = {}>(args?: Subset<T, ReserveWallet$bankAccountArgs<ExtArgs>>): Prisma__BankAccountClient<$Result.GetResult<Prisma.$BankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends ReserveWallet$membersArgs<ExtArgs> = {}>(args?: Subset<T, ReserveWallet$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReserveWallet model
   */
  interface ReserveWalletFieldRefs {
    readonly id: FieldRef<"ReserveWallet", 'String'>
    readonly name: FieldRef<"ReserveWallet", 'String'>
    readonly balance: FieldRef<"ReserveWallet", 'BigInt'>
    readonly threshold: FieldRef<"ReserveWallet", 'BigInt'>
    readonly bankAccountCreated: FieldRef<"ReserveWallet", 'Boolean'>
    readonly createdAt: FieldRef<"ReserveWallet", 'DateTime'>
    readonly updatedAt: FieldRef<"ReserveWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReserveWallet findUnique
   */
  export type ReserveWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWallet to fetch.
     */
    where: ReserveWalletWhereUniqueInput
  }

  /**
   * ReserveWallet findUniqueOrThrow
   */
  export type ReserveWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWallet to fetch.
     */
    where: ReserveWalletWhereUniqueInput
  }

  /**
   * ReserveWallet findFirst
   */
  export type ReserveWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWallet to fetch.
     */
    where?: ReserveWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWallets to fetch.
     */
    orderBy?: ReserveWalletOrderByWithRelationInput | ReserveWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveWallets.
     */
    cursor?: ReserveWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveWallets.
     */
    distinct?: ReserveWalletScalarFieldEnum | ReserveWalletScalarFieldEnum[]
  }

  /**
   * ReserveWallet findFirstOrThrow
   */
  export type ReserveWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWallet to fetch.
     */
    where?: ReserveWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWallets to fetch.
     */
    orderBy?: ReserveWalletOrderByWithRelationInput | ReserveWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveWallets.
     */
    cursor?: ReserveWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveWallets.
     */
    distinct?: ReserveWalletScalarFieldEnum | ReserveWalletScalarFieldEnum[]
  }

  /**
   * ReserveWallet findMany
   */
  export type ReserveWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWallets to fetch.
     */
    where?: ReserveWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWallets to fetch.
     */
    orderBy?: ReserveWalletOrderByWithRelationInput | ReserveWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReserveWallets.
     */
    cursor?: ReserveWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWallets.
     */
    skip?: number
    distinct?: ReserveWalletScalarFieldEnum | ReserveWalletScalarFieldEnum[]
  }

  /**
   * ReserveWallet create
   */
  export type ReserveWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a ReserveWallet.
     */
    data: XOR<ReserveWalletCreateInput, ReserveWalletUncheckedCreateInput>
  }

  /**
   * ReserveWallet createMany
   */
  export type ReserveWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReserveWallets.
     */
    data: ReserveWalletCreateManyInput | ReserveWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReserveWallet createManyAndReturn
   */
  export type ReserveWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * The data used to create many ReserveWallets.
     */
    data: ReserveWalletCreateManyInput | ReserveWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReserveWallet update
   */
  export type ReserveWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a ReserveWallet.
     */
    data: XOR<ReserveWalletUpdateInput, ReserveWalletUncheckedUpdateInput>
    /**
     * Choose, which ReserveWallet to update.
     */
    where: ReserveWalletWhereUniqueInput
  }

  /**
   * ReserveWallet updateMany
   */
  export type ReserveWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReserveWallets.
     */
    data: XOR<ReserveWalletUpdateManyMutationInput, ReserveWalletUncheckedUpdateManyInput>
    /**
     * Filter which ReserveWallets to update
     */
    where?: ReserveWalletWhereInput
    /**
     * Limit how many ReserveWallets to update.
     */
    limit?: number
  }

  /**
   * ReserveWallet updateManyAndReturn
   */
  export type ReserveWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * The data used to update ReserveWallets.
     */
    data: XOR<ReserveWalletUpdateManyMutationInput, ReserveWalletUncheckedUpdateManyInput>
    /**
     * Filter which ReserveWallets to update
     */
    where?: ReserveWalletWhereInput
    /**
     * Limit how many ReserveWallets to update.
     */
    limit?: number
  }

  /**
   * ReserveWallet upsert
   */
  export type ReserveWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the ReserveWallet to update in case it exists.
     */
    where: ReserveWalletWhereUniqueInput
    /**
     * In case the ReserveWallet found by the `where` argument doesn't exist, create a new ReserveWallet with this data.
     */
    create: XOR<ReserveWalletCreateInput, ReserveWalletUncheckedCreateInput>
    /**
     * In case the ReserveWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReserveWalletUpdateInput, ReserveWalletUncheckedUpdateInput>
  }

  /**
   * ReserveWallet delete
   */
  export type ReserveWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
    /**
     * Filter which ReserveWallet to delete.
     */
    where: ReserveWalletWhereUniqueInput
  }

  /**
   * ReserveWallet deleteMany
   */
  export type ReserveWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveWallets to delete
     */
    where?: ReserveWalletWhereInput
    /**
     * Limit how many ReserveWallets to delete.
     */
    limit?: number
  }

  /**
   * ReserveWallet.bankAccount
   */
  export type ReserveWallet$bankAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccount
     */
    select?: BankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankAccount
     */
    omit?: BankAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankAccountInclude<ExtArgs> | null
    where?: BankAccountWhereInput
  }

  /**
   * ReserveWallet.members
   */
  export type ReserveWallet$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    where?: ReserveWalletMemberWhereInput
    orderBy?: ReserveWalletMemberOrderByWithRelationInput | ReserveWalletMemberOrderByWithRelationInput[]
    cursor?: ReserveWalletMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReserveWalletMemberScalarFieldEnum | ReserveWalletMemberScalarFieldEnum[]
  }

  /**
   * ReserveWallet without action
   */
  export type ReserveWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWallet
     */
    select?: ReserveWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWallet
     */
    omit?: ReserveWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletInclude<ExtArgs> | null
  }


  /**
   * Model ReserveWalletMember
   */

  export type AggregateReserveWalletMember = {
    _count: ReserveWalletMemberCountAggregateOutputType | null
    _avg: ReserveWalletMemberAvgAggregateOutputType | null
    _sum: ReserveWalletMemberSumAggregateOutputType | null
    _min: ReserveWalletMemberMinAggregateOutputType | null
    _max: ReserveWalletMemberMaxAggregateOutputType | null
  }

  export type ReserveWalletMemberAvgAggregateOutputType = {
    contribution: number | null
  }

  export type ReserveWalletMemberSumAggregateOutputType = {
    contribution: bigint | null
  }

  export type ReserveWalletMemberMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    reserveWalletId: string | null
    contribution: bigint | null
    hasApproved: boolean | null
    isAdmin: boolean | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type ReserveWalletMemberMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    name: string | null
    reserveWalletId: string | null
    contribution: bigint | null
    hasApproved: boolean | null
    isAdmin: boolean | null
    joinedAt: Date | null
    updatedAt: Date | null
  }

  export type ReserveWalletMemberCountAggregateOutputType = {
    id: number
    walletAddress: number
    name: number
    reserveWalletId: number
    contribution: number
    hasApproved: number
    isAdmin: number
    joinedAt: number
    updatedAt: number
    _all: number
  }


  export type ReserveWalletMemberAvgAggregateInputType = {
    contribution?: true
  }

  export type ReserveWalletMemberSumAggregateInputType = {
    contribution?: true
  }

  export type ReserveWalletMemberMinAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    reserveWalletId?: true
    contribution?: true
    hasApproved?: true
    isAdmin?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type ReserveWalletMemberMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    reserveWalletId?: true
    contribution?: true
    hasApproved?: true
    isAdmin?: true
    joinedAt?: true
    updatedAt?: true
  }

  export type ReserveWalletMemberCountAggregateInputType = {
    id?: true
    walletAddress?: true
    name?: true
    reserveWalletId?: true
    contribution?: true
    hasApproved?: true
    isAdmin?: true
    joinedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReserveWalletMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveWalletMember to aggregate.
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWalletMembers to fetch.
     */
    orderBy?: ReserveWalletMemberOrderByWithRelationInput | ReserveWalletMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReserveWalletMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWalletMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWalletMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReserveWalletMembers
    **/
    _count?: true | ReserveWalletMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReserveWalletMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReserveWalletMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReserveWalletMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReserveWalletMemberMaxAggregateInputType
  }

  export type GetReserveWalletMemberAggregateType<T extends ReserveWalletMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateReserveWalletMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserveWalletMember[P]>
      : GetScalarType<T[P], AggregateReserveWalletMember[P]>
  }




  export type ReserveWalletMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReserveWalletMemberWhereInput
    orderBy?: ReserveWalletMemberOrderByWithAggregationInput | ReserveWalletMemberOrderByWithAggregationInput[]
    by: ReserveWalletMemberScalarFieldEnum[] | ReserveWalletMemberScalarFieldEnum
    having?: ReserveWalletMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReserveWalletMemberCountAggregateInputType | true
    _avg?: ReserveWalletMemberAvgAggregateInputType
    _sum?: ReserveWalletMemberSumAggregateInputType
    _min?: ReserveWalletMemberMinAggregateInputType
    _max?: ReserveWalletMemberMaxAggregateInputType
  }

  export type ReserveWalletMemberGroupByOutputType = {
    id: string
    walletAddress: string
    name: string | null
    reserveWalletId: string
    contribution: bigint
    hasApproved: boolean
    isAdmin: boolean
    joinedAt: Date
    updatedAt: Date
    _count: ReserveWalletMemberCountAggregateOutputType | null
    _avg: ReserveWalletMemberAvgAggregateOutputType | null
    _sum: ReserveWalletMemberSumAggregateOutputType | null
    _min: ReserveWalletMemberMinAggregateOutputType | null
    _max: ReserveWalletMemberMaxAggregateOutputType | null
  }

  type GetReserveWalletMemberGroupByPayload<T extends ReserveWalletMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReserveWalletMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReserveWalletMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReserveWalletMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ReserveWalletMemberGroupByOutputType[P]>
        }
      >
    >


  export type ReserveWalletMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    reserveWalletId?: boolean
    contribution?: boolean
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserveWalletMember"]>

  export type ReserveWalletMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    reserveWalletId?: boolean
    contribution?: boolean
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserveWalletMember"]>

  export type ReserveWalletMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    reserveWalletId?: boolean
    contribution?: boolean
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserveWalletMember"]>

  export type ReserveWalletMemberSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    name?: boolean
    reserveWalletId?: boolean
    contribution?: boolean
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
  }

  export type ReserveWalletMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "name" | "reserveWalletId" | "contribution" | "hasApproved" | "isAdmin" | "joinedAt" | "updatedAt", ExtArgs["result"]["reserveWalletMember"]>
  export type ReserveWalletMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }
  export type ReserveWalletMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }
  export type ReserveWalletMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserveWallet?: boolean | ReserveWalletDefaultArgs<ExtArgs>
  }

  export type $ReserveWalletMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReserveWalletMember"
    objects: {
      reserveWallet: Prisma.$ReserveWalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      name: string | null
      reserveWalletId: string
      contribution: bigint
      hasApproved: boolean
      isAdmin: boolean
      joinedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserveWalletMember"]>
    composites: {}
  }

  type ReserveWalletMemberGetPayload<S extends boolean | null | undefined | ReserveWalletMemberDefaultArgs> = $Result.GetResult<Prisma.$ReserveWalletMemberPayload, S>

  type ReserveWalletMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReserveWalletMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReserveWalletMemberCountAggregateInputType | true
    }

  export interface ReserveWalletMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReserveWalletMember'], meta: { name: 'ReserveWalletMember' } }
    /**
     * Find zero or one ReserveWalletMember that matches the filter.
     * @param {ReserveWalletMemberFindUniqueArgs} args - Arguments to find a ReserveWalletMember
     * @example
     * // Get one ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReserveWalletMemberFindUniqueArgs>(args: SelectSubset<T, ReserveWalletMemberFindUniqueArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReserveWalletMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReserveWalletMemberFindUniqueOrThrowArgs} args - Arguments to find a ReserveWalletMember
     * @example
     * // Get one ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReserveWalletMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ReserveWalletMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveWalletMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberFindFirstArgs} args - Arguments to find a ReserveWalletMember
     * @example
     * // Get one ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReserveWalletMemberFindFirstArgs>(args?: SelectSubset<T, ReserveWalletMemberFindFirstArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReserveWalletMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberFindFirstOrThrowArgs} args - Arguments to find a ReserveWalletMember
     * @example
     * // Get one ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReserveWalletMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ReserveWalletMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReserveWalletMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReserveWalletMembers
     * const reserveWalletMembers = await prisma.reserveWalletMember.findMany()
     * 
     * // Get first 10 ReserveWalletMembers
     * const reserveWalletMembers = await prisma.reserveWalletMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reserveWalletMemberWithIdOnly = await prisma.reserveWalletMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReserveWalletMemberFindManyArgs>(args?: SelectSubset<T, ReserveWalletMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReserveWalletMember.
     * @param {ReserveWalletMemberCreateArgs} args - Arguments to create a ReserveWalletMember.
     * @example
     * // Create one ReserveWalletMember
     * const ReserveWalletMember = await prisma.reserveWalletMember.create({
     *   data: {
     *     // ... data to create a ReserveWalletMember
     *   }
     * })
     * 
     */
    create<T extends ReserveWalletMemberCreateArgs>(args: SelectSubset<T, ReserveWalletMemberCreateArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReserveWalletMembers.
     * @param {ReserveWalletMemberCreateManyArgs} args - Arguments to create many ReserveWalletMembers.
     * @example
     * // Create many ReserveWalletMembers
     * const reserveWalletMember = await prisma.reserveWalletMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReserveWalletMemberCreateManyArgs>(args?: SelectSubset<T, ReserveWalletMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReserveWalletMembers and returns the data saved in the database.
     * @param {ReserveWalletMemberCreateManyAndReturnArgs} args - Arguments to create many ReserveWalletMembers.
     * @example
     * // Create many ReserveWalletMembers
     * const reserveWalletMember = await prisma.reserveWalletMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReserveWalletMembers and only return the `id`
     * const reserveWalletMemberWithIdOnly = await prisma.reserveWalletMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReserveWalletMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ReserveWalletMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReserveWalletMember.
     * @param {ReserveWalletMemberDeleteArgs} args - Arguments to delete one ReserveWalletMember.
     * @example
     * // Delete one ReserveWalletMember
     * const ReserveWalletMember = await prisma.reserveWalletMember.delete({
     *   where: {
     *     // ... filter to delete one ReserveWalletMember
     *   }
     * })
     * 
     */
    delete<T extends ReserveWalletMemberDeleteArgs>(args: SelectSubset<T, ReserveWalletMemberDeleteArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReserveWalletMember.
     * @param {ReserveWalletMemberUpdateArgs} args - Arguments to update one ReserveWalletMember.
     * @example
     * // Update one ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReserveWalletMemberUpdateArgs>(args: SelectSubset<T, ReserveWalletMemberUpdateArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReserveWalletMembers.
     * @param {ReserveWalletMemberDeleteManyArgs} args - Arguments to filter ReserveWalletMembers to delete.
     * @example
     * // Delete a few ReserveWalletMembers
     * const { count } = await prisma.reserveWalletMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReserveWalletMemberDeleteManyArgs>(args?: SelectSubset<T, ReserveWalletMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReserveWalletMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReserveWalletMembers
     * const reserveWalletMember = await prisma.reserveWalletMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReserveWalletMemberUpdateManyArgs>(args: SelectSubset<T, ReserveWalletMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReserveWalletMembers and returns the data updated in the database.
     * @param {ReserveWalletMemberUpdateManyAndReturnArgs} args - Arguments to update many ReserveWalletMembers.
     * @example
     * // Update many ReserveWalletMembers
     * const reserveWalletMember = await prisma.reserveWalletMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReserveWalletMembers and only return the `id`
     * const reserveWalletMemberWithIdOnly = await prisma.reserveWalletMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReserveWalletMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ReserveWalletMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReserveWalletMember.
     * @param {ReserveWalletMemberUpsertArgs} args - Arguments to update or create a ReserveWalletMember.
     * @example
     * // Update or create a ReserveWalletMember
     * const reserveWalletMember = await prisma.reserveWalletMember.upsert({
     *   create: {
     *     // ... data to create a ReserveWalletMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReserveWalletMember we want to update
     *   }
     * })
     */
    upsert<T extends ReserveWalletMemberUpsertArgs>(args: SelectSubset<T, ReserveWalletMemberUpsertArgs<ExtArgs>>): Prisma__ReserveWalletMemberClient<$Result.GetResult<Prisma.$ReserveWalletMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReserveWalletMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberCountArgs} args - Arguments to filter ReserveWalletMembers to count.
     * @example
     * // Count the number of ReserveWalletMembers
     * const count = await prisma.reserveWalletMember.count({
     *   where: {
     *     // ... the filter for the ReserveWalletMembers we want to count
     *   }
     * })
    **/
    count<T extends ReserveWalletMemberCountArgs>(
      args?: Subset<T, ReserveWalletMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReserveWalletMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReserveWalletMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReserveWalletMemberAggregateArgs>(args: Subset<T, ReserveWalletMemberAggregateArgs>): Prisma.PrismaPromise<GetReserveWalletMemberAggregateType<T>>

    /**
     * Group by ReserveWalletMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReserveWalletMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReserveWalletMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReserveWalletMemberGroupByArgs['orderBy'] }
        : { orderBy?: ReserveWalletMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReserveWalletMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserveWalletMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReserveWalletMember model
   */
  readonly fields: ReserveWalletMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReserveWalletMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReserveWalletMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserveWallet<T extends ReserveWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReserveWalletDefaultArgs<ExtArgs>>): Prisma__ReserveWalletClient<$Result.GetResult<Prisma.$ReserveWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReserveWalletMember model
   */
  interface ReserveWalletMemberFieldRefs {
    readonly id: FieldRef<"ReserveWalletMember", 'String'>
    readonly walletAddress: FieldRef<"ReserveWalletMember", 'String'>
    readonly name: FieldRef<"ReserveWalletMember", 'String'>
    readonly reserveWalletId: FieldRef<"ReserveWalletMember", 'String'>
    readonly contribution: FieldRef<"ReserveWalletMember", 'BigInt'>
    readonly hasApproved: FieldRef<"ReserveWalletMember", 'Boolean'>
    readonly isAdmin: FieldRef<"ReserveWalletMember", 'Boolean'>
    readonly joinedAt: FieldRef<"ReserveWalletMember", 'DateTime'>
    readonly updatedAt: FieldRef<"ReserveWalletMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReserveWalletMember findUnique
   */
  export type ReserveWalletMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWalletMember to fetch.
     */
    where: ReserveWalletMemberWhereUniqueInput
  }

  /**
   * ReserveWalletMember findUniqueOrThrow
   */
  export type ReserveWalletMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWalletMember to fetch.
     */
    where: ReserveWalletMemberWhereUniqueInput
  }

  /**
   * ReserveWalletMember findFirst
   */
  export type ReserveWalletMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWalletMember to fetch.
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWalletMembers to fetch.
     */
    orderBy?: ReserveWalletMemberOrderByWithRelationInput | ReserveWalletMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveWalletMembers.
     */
    cursor?: ReserveWalletMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWalletMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWalletMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveWalletMembers.
     */
    distinct?: ReserveWalletMemberScalarFieldEnum | ReserveWalletMemberScalarFieldEnum[]
  }

  /**
   * ReserveWalletMember findFirstOrThrow
   */
  export type ReserveWalletMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWalletMember to fetch.
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWalletMembers to fetch.
     */
    orderBy?: ReserveWalletMemberOrderByWithRelationInput | ReserveWalletMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReserveWalletMembers.
     */
    cursor?: ReserveWalletMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWalletMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWalletMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReserveWalletMembers.
     */
    distinct?: ReserveWalletMemberScalarFieldEnum | ReserveWalletMemberScalarFieldEnum[]
  }

  /**
   * ReserveWalletMember findMany
   */
  export type ReserveWalletMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter, which ReserveWalletMembers to fetch.
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReserveWalletMembers to fetch.
     */
    orderBy?: ReserveWalletMemberOrderByWithRelationInput | ReserveWalletMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReserveWalletMembers.
     */
    cursor?: ReserveWalletMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReserveWalletMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReserveWalletMembers.
     */
    skip?: number
    distinct?: ReserveWalletMemberScalarFieldEnum | ReserveWalletMemberScalarFieldEnum[]
  }

  /**
   * ReserveWalletMember create
   */
  export type ReserveWalletMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ReserveWalletMember.
     */
    data: XOR<ReserveWalletMemberCreateInput, ReserveWalletMemberUncheckedCreateInput>
  }

  /**
   * ReserveWalletMember createMany
   */
  export type ReserveWalletMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReserveWalletMembers.
     */
    data: ReserveWalletMemberCreateManyInput | ReserveWalletMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReserveWalletMember createManyAndReturn
   */
  export type ReserveWalletMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ReserveWalletMembers.
     */
    data: ReserveWalletMemberCreateManyInput | ReserveWalletMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReserveWalletMember update
   */
  export type ReserveWalletMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ReserveWalletMember.
     */
    data: XOR<ReserveWalletMemberUpdateInput, ReserveWalletMemberUncheckedUpdateInput>
    /**
     * Choose, which ReserveWalletMember to update.
     */
    where: ReserveWalletMemberWhereUniqueInput
  }

  /**
   * ReserveWalletMember updateMany
   */
  export type ReserveWalletMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReserveWalletMembers.
     */
    data: XOR<ReserveWalletMemberUpdateManyMutationInput, ReserveWalletMemberUncheckedUpdateManyInput>
    /**
     * Filter which ReserveWalletMembers to update
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * Limit how many ReserveWalletMembers to update.
     */
    limit?: number
  }

  /**
   * ReserveWalletMember updateManyAndReturn
   */
  export type ReserveWalletMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * The data used to update ReserveWalletMembers.
     */
    data: XOR<ReserveWalletMemberUpdateManyMutationInput, ReserveWalletMemberUncheckedUpdateManyInput>
    /**
     * Filter which ReserveWalletMembers to update
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * Limit how many ReserveWalletMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReserveWalletMember upsert
   */
  export type ReserveWalletMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ReserveWalletMember to update in case it exists.
     */
    where: ReserveWalletMemberWhereUniqueInput
    /**
     * In case the ReserveWalletMember found by the `where` argument doesn't exist, create a new ReserveWalletMember with this data.
     */
    create: XOR<ReserveWalletMemberCreateInput, ReserveWalletMemberUncheckedCreateInput>
    /**
     * In case the ReserveWalletMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReserveWalletMemberUpdateInput, ReserveWalletMemberUncheckedUpdateInput>
  }

  /**
   * ReserveWalletMember delete
   */
  export type ReserveWalletMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
    /**
     * Filter which ReserveWalletMember to delete.
     */
    where: ReserveWalletMemberWhereUniqueInput
  }

  /**
   * ReserveWalletMember deleteMany
   */
  export type ReserveWalletMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReserveWalletMembers to delete
     */
    where?: ReserveWalletMemberWhereInput
    /**
     * Limit how many ReserveWalletMembers to delete.
     */
    limit?: number
  }

  /**
   * ReserveWalletMember without action
   */
  export type ReserveWalletMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReserveWalletMember
     */
    select?: ReserveWalletMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReserveWalletMember
     */
    omit?: ReserveWalletMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReserveWalletMemberInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankScalarFieldEnum = (typeof BankScalarFieldEnum)[keyof typeof BankScalarFieldEnum]


  export const BankAccountScalarFieldEnum: {
    id: 'id',
    accountNumber: 'accountNumber',
    balance: 'balance',
    status: 'status',
    bankId: 'bankId',
    reserveWalletId: 'reserveWalletId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankAccountScalarFieldEnum = (typeof BankAccountScalarFieldEnum)[keyof typeof BankAccountScalarFieldEnum]


  export const VirtualIbanScalarFieldEnum: {
    id: 'id',
    iban: 'iban',
    bankAccountId: 'bankAccountId',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VirtualIbanScalarFieldEnum = (typeof VirtualIbanScalarFieldEnum)[keyof typeof VirtualIbanScalarFieldEnum]


  export const BankTransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    direction: 'direction',
    description: 'description',
    status: 'status',
    senderName: 'senderName',
    senderReference: 'senderReference',
    bankAccountId: 'bankAccountId',
    virtualIbanId: 'virtualIbanId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BankTransactionScalarFieldEnum = (typeof BankTransactionScalarFieldEnum)[keyof typeof BankTransactionScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    walletAddress: 'walletAddress',
    bankTransactionId: 'bankTransactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const ReserveWalletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    threshold: 'threshold',
    bankAccountCreated: 'bankAccountCreated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReserveWalletScalarFieldEnum = (typeof ReserveWalletScalarFieldEnum)[keyof typeof ReserveWalletScalarFieldEnum]


  export const ReserveWalletMemberScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    name: 'name',
    reserveWalletId: 'reserveWalletId',
    contribution: 'contribution',
    hasApproved: 'hasApproved',
    isAdmin: 'isAdmin',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt'
  };

  export type ReserveWalletMemberScalarFieldEnum = (typeof ReserveWalletMemberScalarFieldEnum)[keyof typeof ReserveWalletMemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionDirection'
   */
  export type EnumTransactionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionDirection'>
    


  /**
   * Reference to a field of type 'TransactionDirection[]'
   */
  export type ListEnumTransactionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionDirection[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BankWhereInput = {
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    id?: StringFilter<"Bank"> | string
    name?: StringFilter<"Bank"> | string
    code?: StringFilter<"Bank"> | string
    createdAt?: DateTimeFilter<"Bank"> | Date | string
    updatedAt?: DateTimeFilter<"Bank"> | Date | string
    accounts?: BankAccountListRelationFilter
  }

  export type BankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: BankAccountOrderByRelationAggregateInput
  }

  export type BankWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BankWhereInput | BankWhereInput[]
    OR?: BankWhereInput[]
    NOT?: BankWhereInput | BankWhereInput[]
    name?: StringFilter<"Bank"> | string
    createdAt?: DateTimeFilter<"Bank"> | Date | string
    updatedAt?: DateTimeFilter<"Bank"> | Date | string
    accounts?: BankAccountListRelationFilter
  }, "id" | "code">

  export type BankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankCountOrderByAggregateInput
    _max?: BankMaxOrderByAggregateInput
    _min?: BankMinOrderByAggregateInput
  }

  export type BankScalarWhereWithAggregatesInput = {
    AND?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    OR?: BankScalarWhereWithAggregatesInput[]
    NOT?: BankScalarWhereWithAggregatesInput | BankScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bank"> | string
    name?: StringWithAggregatesFilter<"Bank"> | string
    code?: StringWithAggregatesFilter<"Bank"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bank"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bank"> | Date | string
  }

  export type BankAccountWhereInput = {
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    balance?: BigIntFilter<"BankAccount"> | bigint | number
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    bankId?: StringFilter<"BankAccount"> | string
    reserveWalletId?: StringNullableFilter<"BankAccount"> | string | null
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    reserveWallet?: XOR<ReserveWalletNullableScalarRelationFilter, ReserveWalletWhereInput> | null
    virtualIbans?: VirtualIbanListRelationFilter
    transactions?: BankTransactionListRelationFilter
  }

  export type BankAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    bankId?: SortOrder
    reserveWalletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bank?: BankOrderByWithRelationInput
    reserveWallet?: ReserveWalletOrderByWithRelationInput
    virtualIbans?: VirtualIbanOrderByRelationAggregateInput
    transactions?: BankTransactionOrderByRelationAggregateInput
  }

  export type BankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountNumber?: string
    reserveWalletId?: string
    AND?: BankAccountWhereInput | BankAccountWhereInput[]
    OR?: BankAccountWhereInput[]
    NOT?: BankAccountWhereInput | BankAccountWhereInput[]
    balance?: BigIntFilter<"BankAccount"> | bigint | number
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    bankId?: StringFilter<"BankAccount"> | string
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
    bank?: XOR<BankScalarRelationFilter, BankWhereInput>
    reserveWallet?: XOR<ReserveWalletNullableScalarRelationFilter, ReserveWalletWhereInput> | null
    virtualIbans?: VirtualIbanListRelationFilter
    transactions?: BankTransactionListRelationFilter
  }, "id" | "accountNumber" | "reserveWalletId">

  export type BankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    bankId?: SortOrder
    reserveWalletId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankAccountCountOrderByAggregateInput
    _avg?: BankAccountAvgOrderByAggregateInput
    _max?: BankAccountMaxOrderByAggregateInput
    _min?: BankAccountMinOrderByAggregateInput
    _sum?: BankAccountSumOrderByAggregateInput
  }

  export type BankAccountScalarWhereWithAggregatesInput = {
    AND?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    OR?: BankAccountScalarWhereWithAggregatesInput[]
    NOT?: BankAccountScalarWhereWithAggregatesInput | BankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"BankAccount"> | string
    balance?: BigIntWithAggregatesFilter<"BankAccount"> | bigint | number
    status?: EnumAccountStatusWithAggregatesFilter<"BankAccount"> | $Enums.AccountStatus
    bankId?: StringWithAggregatesFilter<"BankAccount"> | string
    reserveWalletId?: StringNullableWithAggregatesFilter<"BankAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankAccount"> | Date | string
  }

  export type VirtualIbanWhereInput = {
    AND?: VirtualIbanWhereInput | VirtualIbanWhereInput[]
    OR?: VirtualIbanWhereInput[]
    NOT?: VirtualIbanWhereInput | VirtualIbanWhereInput[]
    id?: StringFilter<"VirtualIban"> | string
    iban?: StringFilter<"VirtualIban"> | string
    bankAccountId?: StringFilter<"VirtualIban"> | string
    walletAddress?: StringFilter<"VirtualIban"> | string
    createdAt?: DateTimeFilter<"VirtualIban"> | Date | string
    updatedAt?: DateTimeFilter<"VirtualIban"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    transactions?: BankTransactionListRelationFilter
  }

  export type VirtualIbanOrderByWithRelationInput = {
    id?: SortOrder
    iban?: SortOrder
    bankAccountId?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccount?: BankAccountOrderByWithRelationInput
    transactions?: BankTransactionOrderByRelationAggregateInput
  }

  export type VirtualIbanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    iban?: string
    AND?: VirtualIbanWhereInput | VirtualIbanWhereInput[]
    OR?: VirtualIbanWhereInput[]
    NOT?: VirtualIbanWhereInput | VirtualIbanWhereInput[]
    bankAccountId?: StringFilter<"VirtualIban"> | string
    walletAddress?: StringFilter<"VirtualIban"> | string
    createdAt?: DateTimeFilter<"VirtualIban"> | Date | string
    updatedAt?: DateTimeFilter<"VirtualIban"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    transactions?: BankTransactionListRelationFilter
  }, "id" | "iban">

  export type VirtualIbanOrderByWithAggregationInput = {
    id?: SortOrder
    iban?: SortOrder
    bankAccountId?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VirtualIbanCountOrderByAggregateInput
    _max?: VirtualIbanMaxOrderByAggregateInput
    _min?: VirtualIbanMinOrderByAggregateInput
  }

  export type VirtualIbanScalarWhereWithAggregatesInput = {
    AND?: VirtualIbanScalarWhereWithAggregatesInput | VirtualIbanScalarWhereWithAggregatesInput[]
    OR?: VirtualIbanScalarWhereWithAggregatesInput[]
    NOT?: VirtualIbanScalarWhereWithAggregatesInput | VirtualIbanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VirtualIban"> | string
    iban?: StringWithAggregatesFilter<"VirtualIban"> | string
    bankAccountId?: StringWithAggregatesFilter<"VirtualIban"> | string
    walletAddress?: StringWithAggregatesFilter<"VirtualIban"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VirtualIban"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VirtualIban"> | Date | string
  }

  export type BankTransactionWhereInput = {
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    id?: StringFilter<"BankTransaction"> | string
    amount?: BigIntFilter<"BankTransaction"> | bigint | number
    direction?: EnumTransactionDirectionFilter<"BankTransaction"> | $Enums.TransactionDirection
    description?: StringNullableFilter<"BankTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"BankTransaction"> | $Enums.TransactionStatus
    senderName?: StringNullableFilter<"BankTransaction"> | string | null
    senderReference?: StringNullableFilter<"BankTransaction"> | string | null
    bankAccountId?: StringFilter<"BankTransaction"> | string
    virtualIbanId?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    virtualIban?: XOR<VirtualIbanNullableScalarRelationFilter, VirtualIbanWhereInput> | null
    walletTransaction?: XOR<WalletTransactionNullableScalarRelationFilter, WalletTransactionWhereInput> | null
  }

  export type BankTransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    senderName?: SortOrderInput | SortOrder
    senderReference?: SortOrderInput | SortOrder
    bankAccountId?: SortOrder
    virtualIbanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccount?: BankAccountOrderByWithRelationInput
    virtualIban?: VirtualIbanOrderByWithRelationInput
    walletTransaction?: WalletTransactionOrderByWithRelationInput
  }

  export type BankTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BankTransactionWhereInput | BankTransactionWhereInput[]
    OR?: BankTransactionWhereInput[]
    NOT?: BankTransactionWhereInput | BankTransactionWhereInput[]
    amount?: BigIntFilter<"BankTransaction"> | bigint | number
    direction?: EnumTransactionDirectionFilter<"BankTransaction"> | $Enums.TransactionDirection
    description?: StringNullableFilter<"BankTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"BankTransaction"> | $Enums.TransactionStatus
    senderName?: StringNullableFilter<"BankTransaction"> | string | null
    senderReference?: StringNullableFilter<"BankTransaction"> | string | null
    bankAccountId?: StringFilter<"BankTransaction"> | string
    virtualIbanId?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
    bankAccount?: XOR<BankAccountScalarRelationFilter, BankAccountWhereInput>
    virtualIban?: XOR<VirtualIbanNullableScalarRelationFilter, VirtualIbanWhereInput> | null
    walletTransaction?: XOR<WalletTransactionNullableScalarRelationFilter, WalletTransactionWhereInput> | null
  }, "id">

  export type BankTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    senderName?: SortOrderInput | SortOrder
    senderReference?: SortOrderInput | SortOrder
    bankAccountId?: SortOrder
    virtualIbanId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BankTransactionCountOrderByAggregateInput
    _avg?: BankTransactionAvgOrderByAggregateInput
    _max?: BankTransactionMaxOrderByAggregateInput
    _min?: BankTransactionMinOrderByAggregateInput
    _sum?: BankTransactionSumOrderByAggregateInput
  }

  export type BankTransactionScalarWhereWithAggregatesInput = {
    AND?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    OR?: BankTransactionScalarWhereWithAggregatesInput[]
    NOT?: BankTransactionScalarWhereWithAggregatesInput | BankTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BankTransaction"> | string
    amount?: BigIntWithAggregatesFilter<"BankTransaction"> | bigint | number
    direction?: EnumTransactionDirectionWithAggregatesFilter<"BankTransaction"> | $Enums.TransactionDirection
    description?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    status?: EnumTransactionStatusWithAggregatesFilter<"BankTransaction"> | $Enums.TransactionStatus
    senderName?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    senderReference?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    bankAccountId?: StringWithAggregatesFilter<"BankTransaction"> | string
    virtualIbanId?: StringNullableWithAggregatesFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankTransaction"> | Date | string
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    amount?: BigIntFilter<"WalletTransaction"> | bigint | number
    description?: StringNullableFilter<"WalletTransaction"> | string | null
    walletAddress?: StringFilter<"WalletTransaction"> | string
    bankTransactionId?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    bankTransaction?: XOR<BankTransactionNullableScalarRelationFilter, BankTransactionWhereInput> | null
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    walletAddress?: SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankTransaction?: BankTransactionOrderByWithRelationInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bankTransactionId?: string
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    amount?: BigIntFilter<"WalletTransaction"> | bigint | number
    description?: StringNullableFilter<"WalletTransaction"> | string | null
    walletAddress?: StringFilter<"WalletTransaction"> | string
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    bankTransaction?: XOR<BankTransactionNullableScalarRelationFilter, BankTransactionWhereInput> | null
  }, "id" | "bankTransactionId">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    walletAddress?: SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletTransaction"> | string
    amount?: BigIntWithAggregatesFilter<"WalletTransaction"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    walletAddress?: StringWithAggregatesFilter<"WalletTransaction"> | string
    bankTransactionId?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type ReserveWalletWhereInput = {
    AND?: ReserveWalletWhereInput | ReserveWalletWhereInput[]
    OR?: ReserveWalletWhereInput[]
    NOT?: ReserveWalletWhereInput | ReserveWalletWhereInput[]
    id?: StringFilter<"ReserveWallet"> | string
    name?: StringFilter<"ReserveWallet"> | string
    balance?: BigIntFilter<"ReserveWallet"> | bigint | number
    threshold?: BigIntFilter<"ReserveWallet"> | bigint | number
    bankAccountCreated?: BoolFilter<"ReserveWallet"> | boolean
    createdAt?: DateTimeFilter<"ReserveWallet"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveWallet"> | Date | string
    bankAccount?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    members?: ReserveWalletMemberListRelationFilter
  }

  export type ReserveWalletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    threshold?: SortOrder
    bankAccountCreated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bankAccount?: BankAccountOrderByWithRelationInput
    members?: ReserveWalletMemberOrderByRelationAggregateInput
  }

  export type ReserveWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReserveWalletWhereInput | ReserveWalletWhereInput[]
    OR?: ReserveWalletWhereInput[]
    NOT?: ReserveWalletWhereInput | ReserveWalletWhereInput[]
    name?: StringFilter<"ReserveWallet"> | string
    balance?: BigIntFilter<"ReserveWallet"> | bigint | number
    threshold?: BigIntFilter<"ReserveWallet"> | bigint | number
    bankAccountCreated?: BoolFilter<"ReserveWallet"> | boolean
    createdAt?: DateTimeFilter<"ReserveWallet"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveWallet"> | Date | string
    bankAccount?: XOR<BankAccountNullableScalarRelationFilter, BankAccountWhereInput> | null
    members?: ReserveWalletMemberListRelationFilter
  }, "id">

  export type ReserveWalletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    threshold?: SortOrder
    bankAccountCreated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReserveWalletCountOrderByAggregateInput
    _avg?: ReserveWalletAvgOrderByAggregateInput
    _max?: ReserveWalletMaxOrderByAggregateInput
    _min?: ReserveWalletMinOrderByAggregateInput
    _sum?: ReserveWalletSumOrderByAggregateInput
  }

  export type ReserveWalletScalarWhereWithAggregatesInput = {
    AND?: ReserveWalletScalarWhereWithAggregatesInput | ReserveWalletScalarWhereWithAggregatesInput[]
    OR?: ReserveWalletScalarWhereWithAggregatesInput[]
    NOT?: ReserveWalletScalarWhereWithAggregatesInput | ReserveWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReserveWallet"> | string
    name?: StringWithAggregatesFilter<"ReserveWallet"> | string
    balance?: BigIntWithAggregatesFilter<"ReserveWallet"> | bigint | number
    threshold?: BigIntWithAggregatesFilter<"ReserveWallet"> | bigint | number
    bankAccountCreated?: BoolWithAggregatesFilter<"ReserveWallet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ReserveWallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReserveWallet"> | Date | string
  }

  export type ReserveWalletMemberWhereInput = {
    AND?: ReserveWalletMemberWhereInput | ReserveWalletMemberWhereInput[]
    OR?: ReserveWalletMemberWhereInput[]
    NOT?: ReserveWalletMemberWhereInput | ReserveWalletMemberWhereInput[]
    id?: StringFilter<"ReserveWalletMember"> | string
    walletAddress?: StringFilter<"ReserveWalletMember"> | string
    name?: StringNullableFilter<"ReserveWalletMember"> | string | null
    reserveWalletId?: StringFilter<"ReserveWalletMember"> | string
    contribution?: BigIntFilter<"ReserveWalletMember"> | bigint | number
    hasApproved?: BoolFilter<"ReserveWalletMember"> | boolean
    isAdmin?: BoolFilter<"ReserveWalletMember"> | boolean
    joinedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
    reserveWallet?: XOR<ReserveWalletScalarRelationFilter, ReserveWalletWhereInput>
  }

  export type ReserveWalletMemberOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    reserveWalletId?: SortOrder
    contribution?: SortOrder
    hasApproved?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    reserveWallet?: ReserveWalletOrderByWithRelationInput
  }

  export type ReserveWalletMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress_reserveWalletId?: ReserveWalletMemberWalletAddressReserveWalletIdCompoundUniqueInput
    AND?: ReserveWalletMemberWhereInput | ReserveWalletMemberWhereInput[]
    OR?: ReserveWalletMemberWhereInput[]
    NOT?: ReserveWalletMemberWhereInput | ReserveWalletMemberWhereInput[]
    walletAddress?: StringFilter<"ReserveWalletMember"> | string
    name?: StringNullableFilter<"ReserveWalletMember"> | string | null
    reserveWalletId?: StringFilter<"ReserveWalletMember"> | string
    contribution?: BigIntFilter<"ReserveWalletMember"> | bigint | number
    hasApproved?: BoolFilter<"ReserveWalletMember"> | boolean
    isAdmin?: BoolFilter<"ReserveWalletMember"> | boolean
    joinedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
    reserveWallet?: XOR<ReserveWalletScalarRelationFilter, ReserveWalletWhereInput>
  }, "id" | "walletAddress_reserveWalletId">

  export type ReserveWalletMemberOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrderInput | SortOrder
    reserveWalletId?: SortOrder
    contribution?: SortOrder
    hasApproved?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReserveWalletMemberCountOrderByAggregateInput
    _avg?: ReserveWalletMemberAvgOrderByAggregateInput
    _max?: ReserveWalletMemberMaxOrderByAggregateInput
    _min?: ReserveWalletMemberMinOrderByAggregateInput
    _sum?: ReserveWalletMemberSumOrderByAggregateInput
  }

  export type ReserveWalletMemberScalarWhereWithAggregatesInput = {
    AND?: ReserveWalletMemberScalarWhereWithAggregatesInput | ReserveWalletMemberScalarWhereWithAggregatesInput[]
    OR?: ReserveWalletMemberScalarWhereWithAggregatesInput[]
    NOT?: ReserveWalletMemberScalarWhereWithAggregatesInput | ReserveWalletMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReserveWalletMember"> | string
    walletAddress?: StringWithAggregatesFilter<"ReserveWalletMember"> | string
    name?: StringNullableWithAggregatesFilter<"ReserveWalletMember"> | string | null
    reserveWalletId?: StringWithAggregatesFilter<"ReserveWalletMember"> | string
    contribution?: BigIntWithAggregatesFilter<"ReserveWalletMember"> | bigint | number
    hasApproved?: BoolWithAggregatesFilter<"ReserveWalletMember"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"ReserveWalletMember"> | boolean
    joinedAt?: DateTimeWithAggregatesFilter<"ReserveWalletMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReserveWalletMember"> | Date | string
  }

  export type BankCreateInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: BankAccountCreateNestedManyWithoutBankInput
  }

  export type BankUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: BankAccountUncheckedCreateNestedManyWithoutBankInput
  }

  export type BankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: BankAccountUpdateManyWithoutBankNestedInput
  }

  export type BankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: BankAccountUncheckedUpdateManyWithoutBankNestedInput
  }

  export type BankCreateManyInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutAccountsInput
    reserveWallet?: ReserveWalletCreateNestedOneWithoutBankAccountInput
    virtualIbans?: VirtualIbanCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    bankId: string
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    virtualIbans?: VirtualIbanUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutAccountsNestedInput
    reserveWallet?: ReserveWalletUpdateOneWithoutBankAccountNestedInput
    virtualIbans?: VirtualIbanUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    bankId?: StringFieldUpdateOperationsInput | string
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    virtualIbans?: VirtualIbanUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountCreateManyInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    bankId: string
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    bankId?: StringFieldUpdateOperationsInput | string
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualIbanCreateInput = {
    id?: string
    iban: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutVirtualIbansInput
    transactions?: BankTransactionCreateNestedManyWithoutVirtualIbanInput
  }

  export type VirtualIbanUncheckedCreateInput = {
    id?: string
    iban: string
    bankAccountId: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutVirtualIbanInput
  }

  export type VirtualIbanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutVirtualIbansNestedInput
    transactions?: BankTransactionUpdateManyWithoutVirtualIbanNestedInput
  }

  export type VirtualIbanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUncheckedUpdateManyWithoutVirtualIbanNestedInput
  }

  export type VirtualIbanCreateManyInput = {
    id?: string
    iban: string
    bankAccountId: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VirtualIbanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualIbanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    virtualIban?: VirtualIbanCreateNestedOneWithoutTransactionsInput
    walletTransaction?: WalletTransactionCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionUncheckedCreateInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    bankAccountId: string
    virtualIbanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    walletTransaction?: WalletTransactionUncheckedCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    virtualIban?: VirtualIbanUpdateOneWithoutTransactionsNestedInput
    walletTransaction?: WalletTransactionUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountId?: StringFieldUpdateOperationsInput | string
    virtualIbanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletTransaction?: WalletTransactionUncheckedUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionCreateManyInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    bankAccountId: string
    virtualIbanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountId?: StringFieldUpdateOperationsInput | string
    virtualIbanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateInput = {
    id?: string
    amount: bigint | number
    description?: string | null
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankTransaction?: BankTransactionCreateNestedOneWithoutWalletTransactionInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: string
    amount: bigint | number
    description?: string | null
    walletAddress: string
    bankTransactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankTransaction?: BankTransactionUpdateOneWithoutWalletTransactionNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: string
    amount: bigint | number
    description?: string | null
    walletAddress: string
    bankTransactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletCreateInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount?: BankAccountCreateNestedOneWithoutReserveWalletInput
    members?: ReserveWalletMemberCreateNestedManyWithoutReserveWalletInput
  }

  export type ReserveWalletUncheckedCreateInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount?: BankAccountUncheckedCreateNestedOneWithoutReserveWalletInput
    members?: ReserveWalletMemberUncheckedCreateNestedManyWithoutReserveWalletInput
  }

  export type ReserveWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneWithoutReserveWalletNestedInput
    members?: ReserveWalletMemberUpdateManyWithoutReserveWalletNestedInput
  }

  export type ReserveWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUncheckedUpdateOneWithoutReserveWalletNestedInput
    members?: ReserveWalletMemberUncheckedUpdateManyWithoutReserveWalletNestedInput
  }

  export type ReserveWalletCreateManyInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberCreateInput = {
    id?: string
    walletAddress: string
    name?: string | null
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
    reserveWallet: ReserveWalletCreateNestedOneWithoutMembersInput
  }

  export type ReserveWalletMemberUncheckedCreateInput = {
    id?: string
    walletAddress: string
    name?: string | null
    reserveWalletId: string
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserveWallet?: ReserveWalletUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ReserveWalletMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    reserveWalletId?: StringFieldUpdateOperationsInput | string
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberCreateManyInput = {
    id?: string
    walletAddress: string
    name?: string | null
    reserveWalletId: string
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    reserveWalletId?: StringFieldUpdateOperationsInput | string
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BankAccountListRelationFilter = {
    every?: BankAccountWhereInput
    some?: BankAccountWhereInput
    none?: BankAccountWhereInput
  }

  export type BankAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BankScalarRelationFilter = {
    is?: BankWhereInput
    isNot?: BankWhereInput
  }

  export type ReserveWalletNullableScalarRelationFilter = {
    is?: ReserveWalletWhereInput | null
    isNot?: ReserveWalletWhereInput | null
  }

  export type VirtualIbanListRelationFilter = {
    every?: VirtualIbanWhereInput
    some?: VirtualIbanWhereInput
    none?: VirtualIbanWhereInput
  }

  export type BankTransactionListRelationFilter = {
    every?: BankTransactionWhereInput
    some?: BankTransactionWhereInput
    none?: BankTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VirtualIbanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    bankId?: SortOrder
    reserveWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    bankId?: SortOrder
    reserveWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    status?: SortOrder
    bankId?: SortOrder
    reserveWalletId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankAccountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BankAccountScalarRelationFilter = {
    is?: BankAccountWhereInput
    isNot?: BankAccountWhereInput
  }

  export type VirtualIbanCountOrderByAggregateInput = {
    id?: SortOrder
    iban?: SortOrder
    bankAccountId?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VirtualIbanMaxOrderByAggregateInput = {
    id?: SortOrder
    iban?: SortOrder
    bankAccountId?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VirtualIbanMinOrderByAggregateInput = {
    id?: SortOrder
    iban?: SortOrder
    bankAccountId?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type VirtualIbanNullableScalarRelationFilter = {
    is?: VirtualIbanWhereInput | null
    isNot?: VirtualIbanWhereInput | null
  }

  export type WalletTransactionNullableScalarRelationFilter = {
    is?: WalletTransactionWhereInput | null
    isNot?: WalletTransactionWhereInput | null
  }

  export type BankTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    description?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderReference?: SortOrder
    bankAccountId?: SortOrder
    virtualIbanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BankTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    description?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderReference?: SortOrder
    bankAccountId?: SortOrder
    virtualIbanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    description?: SortOrder
    status?: SortOrder
    senderName?: SortOrder
    senderReference?: SortOrder
    bankAccountId?: SortOrder
    virtualIbanId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BankTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type BankTransactionNullableScalarRelationFilter = {
    is?: BankTransactionWhereInput | null
    isNot?: BankTransactionWhereInput | null
  }

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    walletAddress?: SortOrder
    bankTransactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    walletAddress?: SortOrder
    bankTransactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    walletAddress?: SortOrder
    bankTransactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BankAccountNullableScalarRelationFilter = {
    is?: BankAccountWhereInput | null
    isNot?: BankAccountWhereInput | null
  }

  export type ReserveWalletMemberListRelationFilter = {
    every?: ReserveWalletMemberWhereInput
    some?: ReserveWalletMemberWhereInput
    none?: ReserveWalletMemberWhereInput
  }

  export type ReserveWalletMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReserveWalletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    threshold?: SortOrder
    bankAccountCreated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletAvgOrderByAggregateInput = {
    balance?: SortOrder
    threshold?: SortOrder
  }

  export type ReserveWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    threshold?: SortOrder
    bankAccountCreated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    threshold?: SortOrder
    bankAccountCreated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletSumOrderByAggregateInput = {
    balance?: SortOrder
    threshold?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReserveWalletScalarRelationFilter = {
    is?: ReserveWalletWhereInput
    isNot?: ReserveWalletWhereInput
  }

  export type ReserveWalletMemberWalletAddressReserveWalletIdCompoundUniqueInput = {
    walletAddress: string
    reserveWalletId: string
  }

  export type ReserveWalletMemberCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    reserveWalletId?: SortOrder
    contribution?: SortOrder
    hasApproved?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletMemberAvgOrderByAggregateInput = {
    contribution?: SortOrder
  }

  export type ReserveWalletMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    reserveWalletId?: SortOrder
    contribution?: SortOrder
    hasApproved?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletMemberMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    name?: SortOrder
    reserveWalletId?: SortOrder
    contribution?: SortOrder
    hasApproved?: SortOrder
    isAdmin?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReserveWalletMemberSumOrderByAggregateInput = {
    contribution?: SortOrder
  }

  export type BankAccountCreateNestedManyWithoutBankInput = {
    create?: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput> | BankAccountCreateWithoutBankInput[] | BankAccountUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutBankInput | BankAccountCreateOrConnectWithoutBankInput[]
    createMany?: BankAccountCreateManyBankInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput> | BankAccountCreateWithoutBankInput[] | BankAccountUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutBankInput | BankAccountCreateOrConnectWithoutBankInput[]
    createMany?: BankAccountCreateManyBankInputEnvelope
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BankAccountUpdateManyWithoutBankNestedInput = {
    create?: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput> | BankAccountCreateWithoutBankInput[] | BankAccountUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutBankInput | BankAccountCreateOrConnectWithoutBankInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutBankInput | BankAccountUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: BankAccountCreateManyBankInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutBankInput | BankAccountUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutBankInput | BankAccountUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput> | BankAccountCreateWithoutBankInput[] | BankAccountUncheckedCreateWithoutBankInput[]
    connectOrCreate?: BankAccountCreateOrConnectWithoutBankInput | BankAccountCreateOrConnectWithoutBankInput[]
    upsert?: BankAccountUpsertWithWhereUniqueWithoutBankInput | BankAccountUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: BankAccountCreateManyBankInputEnvelope
    set?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    disconnect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    delete?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    connect?: BankAccountWhereUniqueInput | BankAccountWhereUniqueInput[]
    update?: BankAccountUpdateWithWhereUniqueWithoutBankInput | BankAccountUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: BankAccountUpdateManyWithWhereWithoutBankInput | BankAccountUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
  }

  export type BankCreateNestedOneWithoutAccountsInput = {
    create?: XOR<BankCreateWithoutAccountsInput, BankUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: BankCreateOrConnectWithoutAccountsInput
    connect?: BankWhereUniqueInput
  }

  export type ReserveWalletCreateNestedOneWithoutBankAccountInput = {
    create?: XOR<ReserveWalletCreateWithoutBankAccountInput, ReserveWalletUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: ReserveWalletCreateOrConnectWithoutBankAccountInput
    connect?: ReserveWalletWhereUniqueInput
  }

  export type VirtualIbanCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput> | VirtualIbanCreateWithoutBankAccountInput[] | VirtualIbanUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutBankAccountInput | VirtualIbanCreateOrConnectWithoutBankAccountInput[]
    createMany?: VirtualIbanCreateManyBankAccountInputEnvelope
    connect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
  }

  export type BankTransactionCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type VirtualIbanUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput> | VirtualIbanCreateWithoutBankAccountInput[] | VirtualIbanUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutBankAccountInput | VirtualIbanCreateOrConnectWithoutBankAccountInput[]
    createMany?: VirtualIbanCreateManyBankAccountInputEnvelope
    connect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type BankUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<BankCreateWithoutAccountsInput, BankUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: BankCreateOrConnectWithoutAccountsInput
    upsert?: BankUpsertWithoutAccountsInput
    connect?: BankWhereUniqueInput
    update?: XOR<XOR<BankUpdateToOneWithWhereWithoutAccountsInput, BankUpdateWithoutAccountsInput>, BankUncheckedUpdateWithoutAccountsInput>
  }

  export type ReserveWalletUpdateOneWithoutBankAccountNestedInput = {
    create?: XOR<ReserveWalletCreateWithoutBankAccountInput, ReserveWalletUncheckedCreateWithoutBankAccountInput>
    connectOrCreate?: ReserveWalletCreateOrConnectWithoutBankAccountInput
    upsert?: ReserveWalletUpsertWithoutBankAccountInput
    disconnect?: ReserveWalletWhereInput | boolean
    delete?: ReserveWalletWhereInput | boolean
    connect?: ReserveWalletWhereUniqueInput
    update?: XOR<XOR<ReserveWalletUpdateToOneWithWhereWithoutBankAccountInput, ReserveWalletUpdateWithoutBankAccountInput>, ReserveWalletUncheckedUpdateWithoutBankAccountInput>
  }

  export type VirtualIbanUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput> | VirtualIbanCreateWithoutBankAccountInput[] | VirtualIbanUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutBankAccountInput | VirtualIbanCreateOrConnectWithoutBankAccountInput[]
    upsert?: VirtualIbanUpsertWithWhereUniqueWithoutBankAccountInput | VirtualIbanUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: VirtualIbanCreateManyBankAccountInputEnvelope
    set?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    disconnect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    delete?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    connect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    update?: VirtualIbanUpdateWithWhereUniqueWithoutBankAccountInput | VirtualIbanUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: VirtualIbanUpdateManyWithWhereWithoutBankAccountInput | VirtualIbanUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: VirtualIbanScalarWhereInput | VirtualIbanScalarWhereInput[]
  }

  export type BankTransactionUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput | BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput | BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutBankAccountInput | BankTransactionUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VirtualIbanUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput> | VirtualIbanCreateWithoutBankAccountInput[] | VirtualIbanUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutBankAccountInput | VirtualIbanCreateOrConnectWithoutBankAccountInput[]
    upsert?: VirtualIbanUpsertWithWhereUniqueWithoutBankAccountInput | VirtualIbanUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: VirtualIbanCreateManyBankAccountInputEnvelope
    set?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    disconnect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    delete?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    connect?: VirtualIbanWhereUniqueInput | VirtualIbanWhereUniqueInput[]
    update?: VirtualIbanUpdateWithWhereUniqueWithoutBankAccountInput | VirtualIbanUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: VirtualIbanUpdateManyWithWhereWithoutBankAccountInput | VirtualIbanUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: VirtualIbanScalarWhereInput | VirtualIbanScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput> | BankTransactionCreateWithoutBankAccountInput[] | BankTransactionUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutBankAccountInput | BankTransactionCreateOrConnectWithoutBankAccountInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput | BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: BankTransactionCreateManyBankAccountInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput | BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutBankAccountInput | BankTransactionUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankAccountCreateNestedOneWithoutVirtualIbansInput = {
    create?: XOR<BankAccountCreateWithoutVirtualIbansInput, BankAccountUncheckedCreateWithoutVirtualIbansInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutVirtualIbansInput
    connect?: BankAccountWhereUniqueInput
  }

  export type BankTransactionCreateNestedManyWithoutVirtualIbanInput = {
    create?: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput> | BankTransactionCreateWithoutVirtualIbanInput[] | BankTransactionUncheckedCreateWithoutVirtualIbanInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutVirtualIbanInput | BankTransactionCreateOrConnectWithoutVirtualIbanInput[]
    createMany?: BankTransactionCreateManyVirtualIbanInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type BankTransactionUncheckedCreateNestedManyWithoutVirtualIbanInput = {
    create?: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput> | BankTransactionCreateWithoutVirtualIbanInput[] | BankTransactionUncheckedCreateWithoutVirtualIbanInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutVirtualIbanInput | BankTransactionCreateOrConnectWithoutVirtualIbanInput[]
    createMany?: BankTransactionCreateManyVirtualIbanInputEnvelope
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
  }

  export type BankAccountUpdateOneRequiredWithoutVirtualIbansNestedInput = {
    create?: XOR<BankAccountCreateWithoutVirtualIbansInput, BankAccountUncheckedCreateWithoutVirtualIbansInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutVirtualIbansInput
    upsert?: BankAccountUpsertWithoutVirtualIbansInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutVirtualIbansInput, BankAccountUpdateWithoutVirtualIbansInput>, BankAccountUncheckedUpdateWithoutVirtualIbansInput>
  }

  export type BankTransactionUpdateManyWithoutVirtualIbanNestedInput = {
    create?: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput> | BankTransactionCreateWithoutVirtualIbanInput[] | BankTransactionUncheckedCreateWithoutVirtualIbanInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutVirtualIbanInput | BankTransactionCreateOrConnectWithoutVirtualIbanInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutVirtualIbanInput | BankTransactionUpsertWithWhereUniqueWithoutVirtualIbanInput[]
    createMany?: BankTransactionCreateManyVirtualIbanInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutVirtualIbanInput | BankTransactionUpdateWithWhereUniqueWithoutVirtualIbanInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutVirtualIbanInput | BankTransactionUpdateManyWithWhereWithoutVirtualIbanInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankTransactionUncheckedUpdateManyWithoutVirtualIbanNestedInput = {
    create?: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput> | BankTransactionCreateWithoutVirtualIbanInput[] | BankTransactionUncheckedCreateWithoutVirtualIbanInput[]
    connectOrCreate?: BankTransactionCreateOrConnectWithoutVirtualIbanInput | BankTransactionCreateOrConnectWithoutVirtualIbanInput[]
    upsert?: BankTransactionUpsertWithWhereUniqueWithoutVirtualIbanInput | BankTransactionUpsertWithWhereUniqueWithoutVirtualIbanInput[]
    createMany?: BankTransactionCreateManyVirtualIbanInputEnvelope
    set?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    disconnect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    delete?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    connect?: BankTransactionWhereUniqueInput | BankTransactionWhereUniqueInput[]
    update?: BankTransactionUpdateWithWhereUniqueWithoutVirtualIbanInput | BankTransactionUpdateWithWhereUniqueWithoutVirtualIbanInput[]
    updateMany?: BankTransactionUpdateManyWithWhereWithoutVirtualIbanInput | BankTransactionUpdateManyWithWhereWithoutVirtualIbanInput[]
    deleteMany?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
  }

  export type BankAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutTransactionsInput
    connect?: BankAccountWhereUniqueInput
  }

  export type VirtualIbanCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<VirtualIbanCreateWithoutTransactionsInput, VirtualIbanUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutTransactionsInput
    connect?: VirtualIbanWhereUniqueInput
  }

  export type WalletTransactionCreateNestedOneWithoutBankTransactionInput = {
    create?: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutBankTransactionInput
    connect?: WalletTransactionWhereUniqueInput
  }

  export type WalletTransactionUncheckedCreateNestedOneWithoutBankTransactionInput = {
    create?: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutBankTransactionInput
    connect?: WalletTransactionWhereUniqueInput
  }

  export type EnumTransactionDirectionFieldUpdateOperationsInput = {
    set?: $Enums.TransactionDirection
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type BankAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutTransactionsInput
    upsert?: BankAccountUpsertWithoutTransactionsInput
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutTransactionsInput, BankAccountUpdateWithoutTransactionsInput>, BankAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type VirtualIbanUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<VirtualIbanCreateWithoutTransactionsInput, VirtualIbanUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VirtualIbanCreateOrConnectWithoutTransactionsInput
    upsert?: VirtualIbanUpsertWithoutTransactionsInput
    disconnect?: VirtualIbanWhereInput | boolean
    delete?: VirtualIbanWhereInput | boolean
    connect?: VirtualIbanWhereUniqueInput
    update?: XOR<XOR<VirtualIbanUpdateToOneWithWhereWithoutTransactionsInput, VirtualIbanUpdateWithoutTransactionsInput>, VirtualIbanUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletTransactionUpdateOneWithoutBankTransactionNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutBankTransactionInput
    upsert?: WalletTransactionUpsertWithoutBankTransactionInput
    disconnect?: WalletTransactionWhereInput | boolean
    delete?: WalletTransactionWhereInput | boolean
    connect?: WalletTransactionWhereUniqueInput
    update?: XOR<XOR<WalletTransactionUpdateToOneWithWhereWithoutBankTransactionInput, WalletTransactionUpdateWithoutBankTransactionInput>, WalletTransactionUncheckedUpdateWithoutBankTransactionInput>
  }

  export type WalletTransactionUncheckedUpdateOneWithoutBankTransactionNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutBankTransactionInput
    upsert?: WalletTransactionUpsertWithoutBankTransactionInput
    disconnect?: WalletTransactionWhereInput | boolean
    delete?: WalletTransactionWhereInput | boolean
    connect?: WalletTransactionWhereUniqueInput
    update?: XOR<XOR<WalletTransactionUpdateToOneWithWhereWithoutBankTransactionInput, WalletTransactionUpdateWithoutBankTransactionInput>, WalletTransactionUncheckedUpdateWithoutBankTransactionInput>
  }

  export type BankTransactionCreateNestedOneWithoutWalletTransactionInput = {
    create?: XOR<BankTransactionCreateWithoutWalletTransactionInput, BankTransactionUncheckedCreateWithoutWalletTransactionInput>
    connectOrCreate?: BankTransactionCreateOrConnectWithoutWalletTransactionInput
    connect?: BankTransactionWhereUniqueInput
  }

  export type BankTransactionUpdateOneWithoutWalletTransactionNestedInput = {
    create?: XOR<BankTransactionCreateWithoutWalletTransactionInput, BankTransactionUncheckedCreateWithoutWalletTransactionInput>
    connectOrCreate?: BankTransactionCreateOrConnectWithoutWalletTransactionInput
    upsert?: BankTransactionUpsertWithoutWalletTransactionInput
    disconnect?: BankTransactionWhereInput | boolean
    delete?: BankTransactionWhereInput | boolean
    connect?: BankTransactionWhereUniqueInput
    update?: XOR<XOR<BankTransactionUpdateToOneWithWhereWithoutWalletTransactionInput, BankTransactionUpdateWithoutWalletTransactionInput>, BankTransactionUncheckedUpdateWithoutWalletTransactionInput>
  }

  export type BankAccountCreateNestedOneWithoutReserveWalletInput = {
    create?: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReserveWalletInput
    connect?: BankAccountWhereUniqueInput
  }

  export type ReserveWalletMemberCreateNestedManyWithoutReserveWalletInput = {
    create?: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput> | ReserveWalletMemberCreateWithoutReserveWalletInput[] | ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput[]
    connectOrCreate?: ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput | ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput[]
    createMany?: ReserveWalletMemberCreateManyReserveWalletInputEnvelope
    connect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
  }

  export type BankAccountUncheckedCreateNestedOneWithoutReserveWalletInput = {
    create?: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReserveWalletInput
    connect?: BankAccountWhereUniqueInput
  }

  export type ReserveWalletMemberUncheckedCreateNestedManyWithoutReserveWalletInput = {
    create?: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput> | ReserveWalletMemberCreateWithoutReserveWalletInput[] | ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput[]
    connectOrCreate?: ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput | ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput[]
    createMany?: ReserveWalletMemberCreateManyReserveWalletInputEnvelope
    connect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BankAccountUpdateOneWithoutReserveWalletNestedInput = {
    create?: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReserveWalletInput
    upsert?: BankAccountUpsertWithoutReserveWalletInput
    disconnect?: BankAccountWhereInput | boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutReserveWalletInput, BankAccountUpdateWithoutReserveWalletInput>, BankAccountUncheckedUpdateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberUpdateManyWithoutReserveWalletNestedInput = {
    create?: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput> | ReserveWalletMemberCreateWithoutReserveWalletInput[] | ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput[]
    connectOrCreate?: ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput | ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput[]
    upsert?: ReserveWalletMemberUpsertWithWhereUniqueWithoutReserveWalletInput | ReserveWalletMemberUpsertWithWhereUniqueWithoutReserveWalletInput[]
    createMany?: ReserveWalletMemberCreateManyReserveWalletInputEnvelope
    set?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    disconnect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    delete?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    connect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    update?: ReserveWalletMemberUpdateWithWhereUniqueWithoutReserveWalletInput | ReserveWalletMemberUpdateWithWhereUniqueWithoutReserveWalletInput[]
    updateMany?: ReserveWalletMemberUpdateManyWithWhereWithoutReserveWalletInput | ReserveWalletMemberUpdateManyWithWhereWithoutReserveWalletInput[]
    deleteMany?: ReserveWalletMemberScalarWhereInput | ReserveWalletMemberScalarWhereInput[]
  }

  export type BankAccountUncheckedUpdateOneWithoutReserveWalletNestedInput = {
    create?: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
    connectOrCreate?: BankAccountCreateOrConnectWithoutReserveWalletInput
    upsert?: BankAccountUpsertWithoutReserveWalletInput
    disconnect?: BankAccountWhereInput | boolean
    delete?: BankAccountWhereInput | boolean
    connect?: BankAccountWhereUniqueInput
    update?: XOR<XOR<BankAccountUpdateToOneWithWhereWithoutReserveWalletInput, BankAccountUpdateWithoutReserveWalletInput>, BankAccountUncheckedUpdateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberUncheckedUpdateManyWithoutReserveWalletNestedInput = {
    create?: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput> | ReserveWalletMemberCreateWithoutReserveWalletInput[] | ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput[]
    connectOrCreate?: ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput | ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput[]
    upsert?: ReserveWalletMemberUpsertWithWhereUniqueWithoutReserveWalletInput | ReserveWalletMemberUpsertWithWhereUniqueWithoutReserveWalletInput[]
    createMany?: ReserveWalletMemberCreateManyReserveWalletInputEnvelope
    set?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    disconnect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    delete?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    connect?: ReserveWalletMemberWhereUniqueInput | ReserveWalletMemberWhereUniqueInput[]
    update?: ReserveWalletMemberUpdateWithWhereUniqueWithoutReserveWalletInput | ReserveWalletMemberUpdateWithWhereUniqueWithoutReserveWalletInput[]
    updateMany?: ReserveWalletMemberUpdateManyWithWhereWithoutReserveWalletInput | ReserveWalletMemberUpdateManyWithWhereWithoutReserveWalletInput[]
    deleteMany?: ReserveWalletMemberScalarWhereInput | ReserveWalletMemberScalarWhereInput[]
  }

  export type ReserveWalletCreateNestedOneWithoutMembersInput = {
    create?: XOR<ReserveWalletCreateWithoutMembersInput, ReserveWalletUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ReserveWalletCreateOrConnectWithoutMembersInput
    connect?: ReserveWalletWhereUniqueInput
  }

  export type ReserveWalletUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ReserveWalletCreateWithoutMembersInput, ReserveWalletUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ReserveWalletCreateOrConnectWithoutMembersInput
    upsert?: ReserveWalletUpsertWithoutMembersInput
    connect?: ReserveWalletWhereUniqueInput
    update?: XOR<XOR<ReserveWalletUpdateToOneWithWhereWithoutMembersInput, ReserveWalletUpdateWithoutMembersInput>, ReserveWalletUncheckedUpdateWithoutMembersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionDirection[] | ListEnumTransactionDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BankAccountCreateWithoutBankInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reserveWallet?: ReserveWalletCreateNestedOneWithoutBankAccountInput
    virtualIbans?: VirtualIbanCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutBankInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    virtualIbans?: VirtualIbanUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutBankInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput>
  }

  export type BankAccountCreateManyBankInputEnvelope = {
    data: BankAccountCreateManyBankInput | BankAccountCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithWhereUniqueWithoutBankInput = {
    where: BankAccountWhereUniqueInput
    update: XOR<BankAccountUpdateWithoutBankInput, BankAccountUncheckedUpdateWithoutBankInput>
    create: XOR<BankAccountCreateWithoutBankInput, BankAccountUncheckedCreateWithoutBankInput>
  }

  export type BankAccountUpdateWithWhereUniqueWithoutBankInput = {
    where: BankAccountWhereUniqueInput
    data: XOR<BankAccountUpdateWithoutBankInput, BankAccountUncheckedUpdateWithoutBankInput>
  }

  export type BankAccountUpdateManyWithWhereWithoutBankInput = {
    where: BankAccountScalarWhereInput
    data: XOR<BankAccountUpdateManyMutationInput, BankAccountUncheckedUpdateManyWithoutBankInput>
  }

  export type BankAccountScalarWhereInput = {
    AND?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    OR?: BankAccountScalarWhereInput[]
    NOT?: BankAccountScalarWhereInput | BankAccountScalarWhereInput[]
    id?: StringFilter<"BankAccount"> | string
    accountNumber?: StringFilter<"BankAccount"> | string
    balance?: BigIntFilter<"BankAccount"> | bigint | number
    status?: EnumAccountStatusFilter<"BankAccount"> | $Enums.AccountStatus
    bankId?: StringFilter<"BankAccount"> | string
    reserveWalletId?: StringNullableFilter<"BankAccount"> | string | null
    createdAt?: DateTimeFilter<"BankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"BankAccount"> | Date | string
  }

  export type BankCreateWithoutAccountsInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankCreateOrConnectWithoutAccountsInput = {
    where: BankWhereUniqueInput
    create: XOR<BankCreateWithoutAccountsInput, BankUncheckedCreateWithoutAccountsInput>
  }

  export type ReserveWalletCreateWithoutBankAccountInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ReserveWalletMemberCreateNestedManyWithoutReserveWalletInput
  }

  export type ReserveWalletUncheckedCreateWithoutBankAccountInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ReserveWalletMemberUncheckedCreateNestedManyWithoutReserveWalletInput
  }

  export type ReserveWalletCreateOrConnectWithoutBankAccountInput = {
    where: ReserveWalletWhereUniqueInput
    create: XOR<ReserveWalletCreateWithoutBankAccountInput, ReserveWalletUncheckedCreateWithoutBankAccountInput>
  }

  export type VirtualIbanCreateWithoutBankAccountInput = {
    id?: string
    iban: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionCreateNestedManyWithoutVirtualIbanInput
  }

  export type VirtualIbanUncheckedCreateWithoutBankAccountInput = {
    id?: string
    iban: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutVirtualIbanInput
  }

  export type VirtualIbanCreateOrConnectWithoutBankAccountInput = {
    where: VirtualIbanWhereUniqueInput
    create: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput>
  }

  export type VirtualIbanCreateManyBankAccountInputEnvelope = {
    data: VirtualIbanCreateManyBankAccountInput | VirtualIbanCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type BankTransactionCreateWithoutBankAccountInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    virtualIban?: VirtualIbanCreateNestedOneWithoutTransactionsInput
    walletTransaction?: WalletTransactionCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionUncheckedCreateWithoutBankAccountInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    virtualIbanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    walletTransaction?: WalletTransactionUncheckedCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionCreateOrConnectWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput>
  }

  export type BankTransactionCreateManyBankAccountInputEnvelope = {
    data: BankTransactionCreateManyBankAccountInput | BankTransactionCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type BankUpsertWithoutAccountsInput = {
    update: XOR<BankUpdateWithoutAccountsInput, BankUncheckedUpdateWithoutAccountsInput>
    create: XOR<BankCreateWithoutAccountsInput, BankUncheckedCreateWithoutAccountsInput>
    where?: BankWhereInput
  }

  export type BankUpdateToOneWithWhereWithoutAccountsInput = {
    where?: BankWhereInput
    data: XOR<BankUpdateWithoutAccountsInput, BankUncheckedUpdateWithoutAccountsInput>
  }

  export type BankUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletUpsertWithoutBankAccountInput = {
    update: XOR<ReserveWalletUpdateWithoutBankAccountInput, ReserveWalletUncheckedUpdateWithoutBankAccountInput>
    create: XOR<ReserveWalletCreateWithoutBankAccountInput, ReserveWalletUncheckedCreateWithoutBankAccountInput>
    where?: ReserveWalletWhereInput
  }

  export type ReserveWalletUpdateToOneWithWhereWithoutBankAccountInput = {
    where?: ReserveWalletWhereInput
    data: XOR<ReserveWalletUpdateWithoutBankAccountInput, ReserveWalletUncheckedUpdateWithoutBankAccountInput>
  }

  export type ReserveWalletUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ReserveWalletMemberUpdateManyWithoutReserveWalletNestedInput
  }

  export type ReserveWalletUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ReserveWalletMemberUncheckedUpdateManyWithoutReserveWalletNestedInput
  }

  export type VirtualIbanUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: VirtualIbanWhereUniqueInput
    update: XOR<VirtualIbanUpdateWithoutBankAccountInput, VirtualIbanUncheckedUpdateWithoutBankAccountInput>
    create: XOR<VirtualIbanCreateWithoutBankAccountInput, VirtualIbanUncheckedCreateWithoutBankAccountInput>
  }

  export type VirtualIbanUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: VirtualIbanWhereUniqueInput
    data: XOR<VirtualIbanUpdateWithoutBankAccountInput, VirtualIbanUncheckedUpdateWithoutBankAccountInput>
  }

  export type VirtualIbanUpdateManyWithWhereWithoutBankAccountInput = {
    where: VirtualIbanScalarWhereInput
    data: XOR<VirtualIbanUpdateManyMutationInput, VirtualIbanUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type VirtualIbanScalarWhereInput = {
    AND?: VirtualIbanScalarWhereInput | VirtualIbanScalarWhereInput[]
    OR?: VirtualIbanScalarWhereInput[]
    NOT?: VirtualIbanScalarWhereInput | VirtualIbanScalarWhereInput[]
    id?: StringFilter<"VirtualIban"> | string
    iban?: StringFilter<"VirtualIban"> | string
    bankAccountId?: StringFilter<"VirtualIban"> | string
    walletAddress?: StringFilter<"VirtualIban"> | string
    createdAt?: DateTimeFilter<"VirtualIban"> | Date | string
    updatedAt?: DateTimeFilter<"VirtualIban"> | Date | string
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutBankAccountInput, BankTransactionUncheckedUpdateWithoutBankAccountInput>
    create: XOR<BankTransactionCreateWithoutBankAccountInput, BankTransactionUncheckedCreateWithoutBankAccountInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutBankAccountInput, BankTransactionUncheckedUpdateWithoutBankAccountInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutBankAccountInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type BankTransactionScalarWhereInput = {
    AND?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    OR?: BankTransactionScalarWhereInput[]
    NOT?: BankTransactionScalarWhereInput | BankTransactionScalarWhereInput[]
    id?: StringFilter<"BankTransaction"> | string
    amount?: BigIntFilter<"BankTransaction"> | bigint | number
    direction?: EnumTransactionDirectionFilter<"BankTransaction"> | $Enums.TransactionDirection
    description?: StringNullableFilter<"BankTransaction"> | string | null
    status?: EnumTransactionStatusFilter<"BankTransaction"> | $Enums.TransactionStatus
    senderName?: StringNullableFilter<"BankTransaction"> | string | null
    senderReference?: StringNullableFilter<"BankTransaction"> | string | null
    bankAccountId?: StringFilter<"BankTransaction"> | string
    virtualIbanId?: StringNullableFilter<"BankTransaction"> | string | null
    createdAt?: DateTimeFilter<"BankTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"BankTransaction"> | Date | string
  }

  export type BankAccountCreateWithoutVirtualIbansInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutAccountsInput
    reserveWallet?: ReserveWalletCreateNestedOneWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutVirtualIbansInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    bankId: string
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutVirtualIbansInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutVirtualIbansInput, BankAccountUncheckedCreateWithoutVirtualIbansInput>
  }

  export type BankTransactionCreateWithoutVirtualIbanInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    walletTransaction?: WalletTransactionCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionUncheckedCreateWithoutVirtualIbanInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    bankAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    walletTransaction?: WalletTransactionUncheckedCreateNestedOneWithoutBankTransactionInput
  }

  export type BankTransactionCreateOrConnectWithoutVirtualIbanInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput>
  }

  export type BankTransactionCreateManyVirtualIbanInputEnvelope = {
    data: BankTransactionCreateManyVirtualIbanInput | BankTransactionCreateManyVirtualIbanInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithoutVirtualIbansInput = {
    update: XOR<BankAccountUpdateWithoutVirtualIbansInput, BankAccountUncheckedUpdateWithoutVirtualIbansInput>
    create: XOR<BankAccountCreateWithoutVirtualIbansInput, BankAccountUncheckedCreateWithoutVirtualIbansInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutVirtualIbansInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutVirtualIbansInput, BankAccountUncheckedUpdateWithoutVirtualIbansInput>
  }

  export type BankAccountUpdateWithoutVirtualIbansInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutAccountsNestedInput
    reserveWallet?: ReserveWalletUpdateOneWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutVirtualIbansInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    bankId?: StringFieldUpdateOperationsInput | string
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankTransactionUpsertWithWhereUniqueWithoutVirtualIbanInput = {
    where: BankTransactionWhereUniqueInput
    update: XOR<BankTransactionUpdateWithoutVirtualIbanInput, BankTransactionUncheckedUpdateWithoutVirtualIbanInput>
    create: XOR<BankTransactionCreateWithoutVirtualIbanInput, BankTransactionUncheckedCreateWithoutVirtualIbanInput>
  }

  export type BankTransactionUpdateWithWhereUniqueWithoutVirtualIbanInput = {
    where: BankTransactionWhereUniqueInput
    data: XOR<BankTransactionUpdateWithoutVirtualIbanInput, BankTransactionUncheckedUpdateWithoutVirtualIbanInput>
  }

  export type BankTransactionUpdateManyWithWhereWithoutVirtualIbanInput = {
    where: BankTransactionScalarWhereInput
    data: XOR<BankTransactionUpdateManyMutationInput, BankTransactionUncheckedUpdateManyWithoutVirtualIbanInput>
  }

  export type BankAccountCreateWithoutTransactionsInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutAccountsInput
    reserveWallet?: ReserveWalletCreateNestedOneWithoutBankAccountInput
    virtualIbans?: VirtualIbanCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutTransactionsInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    bankId: string
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    virtualIbans?: VirtualIbanUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutTransactionsInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type VirtualIbanCreateWithoutTransactionsInput = {
    id?: string
    iban: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutVirtualIbansInput
  }

  export type VirtualIbanUncheckedCreateWithoutTransactionsInput = {
    id?: string
    iban: string
    bankAccountId: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VirtualIbanCreateOrConnectWithoutTransactionsInput = {
    where: VirtualIbanWhereUniqueInput
    create: XOR<VirtualIbanCreateWithoutTransactionsInput, VirtualIbanUncheckedCreateWithoutTransactionsInput>
  }

  export type WalletTransactionCreateWithoutBankTransactionInput = {
    id?: string
    amount: bigint | number
    description?: string | null
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransactionUncheckedCreateWithoutBankTransactionInput = {
    id?: string
    amount: bigint | number
    description?: string | null
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutBankTransactionInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
  }

  export type BankAccountUpsertWithoutTransactionsInput = {
    update: XOR<BankAccountUpdateWithoutTransactionsInput, BankAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BankAccountCreateWithoutTransactionsInput, BankAccountUncheckedCreateWithoutTransactionsInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutTransactionsInput, BankAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type BankAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutAccountsNestedInput
    reserveWallet?: ReserveWalletUpdateOneWithoutBankAccountNestedInput
    virtualIbans?: VirtualIbanUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    bankId?: StringFieldUpdateOperationsInput | string
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    virtualIbans?: VirtualIbanUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type VirtualIbanUpsertWithoutTransactionsInput = {
    update: XOR<VirtualIbanUpdateWithoutTransactionsInput, VirtualIbanUncheckedUpdateWithoutTransactionsInput>
    create: XOR<VirtualIbanCreateWithoutTransactionsInput, VirtualIbanUncheckedCreateWithoutTransactionsInput>
    where?: VirtualIbanWhereInput
  }

  export type VirtualIbanUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: VirtualIbanWhereInput
    data: XOR<VirtualIbanUpdateWithoutTransactionsInput, VirtualIbanUncheckedUpdateWithoutTransactionsInput>
  }

  export type VirtualIbanUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutVirtualIbansNestedInput
  }

  export type VirtualIbanUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    bankAccountId?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpsertWithoutBankTransactionInput = {
    update: XOR<WalletTransactionUpdateWithoutBankTransactionInput, WalletTransactionUncheckedUpdateWithoutBankTransactionInput>
    create: XOR<WalletTransactionCreateWithoutBankTransactionInput, WalletTransactionUncheckedCreateWithoutBankTransactionInput>
    where?: WalletTransactionWhereInput
  }

  export type WalletTransactionUpdateToOneWithWhereWithoutBankTransactionInput = {
    where?: WalletTransactionWhereInput
    data: XOR<WalletTransactionUpdateWithoutBankTransactionInput, WalletTransactionUncheckedUpdateWithoutBankTransactionInput>
  }

  export type WalletTransactionUpdateWithoutBankTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateWithoutBankTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateWithoutWalletTransactionInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount: BankAccountCreateNestedOneWithoutTransactionsInput
    virtualIban?: VirtualIbanCreateNestedOneWithoutTransactionsInput
  }

  export type BankTransactionUncheckedCreateWithoutWalletTransactionInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    bankAccountId: string
    virtualIbanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionCreateOrConnectWithoutWalletTransactionInput = {
    where: BankTransactionWhereUniqueInput
    create: XOR<BankTransactionCreateWithoutWalletTransactionInput, BankTransactionUncheckedCreateWithoutWalletTransactionInput>
  }

  export type BankTransactionUpsertWithoutWalletTransactionInput = {
    update: XOR<BankTransactionUpdateWithoutWalletTransactionInput, BankTransactionUncheckedUpdateWithoutWalletTransactionInput>
    create: XOR<BankTransactionCreateWithoutWalletTransactionInput, BankTransactionUncheckedCreateWithoutWalletTransactionInput>
    where?: BankTransactionWhereInput
  }

  export type BankTransactionUpdateToOneWithWhereWithoutWalletTransactionInput = {
    where?: BankTransactionWhereInput
    data: XOR<BankTransactionUpdateWithoutWalletTransactionInput, BankTransactionUncheckedUpdateWithoutWalletTransactionInput>
  }

  export type BankTransactionUpdateWithoutWalletTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    virtualIban?: VirtualIbanUpdateOneWithoutTransactionsNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutWalletTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountId?: StringFieldUpdateOperationsInput | string
    virtualIbanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankAccountCreateWithoutReserveWalletInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bank: BankCreateNestedOneWithoutAccountsInput
    virtualIbans?: VirtualIbanCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountUncheckedCreateWithoutReserveWalletInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    bankId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    virtualIbans?: VirtualIbanUncheckedCreateNestedManyWithoutBankAccountInput
    transactions?: BankTransactionUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type BankAccountCreateOrConnectWithoutReserveWalletInput = {
    where: BankAccountWhereUniqueInput
    create: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberCreateWithoutReserveWalletInput = {
    id?: string
    walletAddress: string
    name?: string | null
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput = {
    id?: string
    walletAddress: string
    name?: string | null
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletMemberCreateOrConnectWithoutReserveWalletInput = {
    where: ReserveWalletMemberWhereUniqueInput
    create: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberCreateManyReserveWalletInputEnvelope = {
    data: ReserveWalletMemberCreateManyReserveWalletInput | ReserveWalletMemberCreateManyReserveWalletInput[]
    skipDuplicates?: boolean
  }

  export type BankAccountUpsertWithoutReserveWalletInput = {
    update: XOR<BankAccountUpdateWithoutReserveWalletInput, BankAccountUncheckedUpdateWithoutReserveWalletInput>
    create: XOR<BankAccountCreateWithoutReserveWalletInput, BankAccountUncheckedCreateWithoutReserveWalletInput>
    where?: BankAccountWhereInput
  }

  export type BankAccountUpdateToOneWithWhereWithoutReserveWalletInput = {
    where?: BankAccountWhereInput
    data: XOR<BankAccountUpdateWithoutReserveWalletInput, BankAccountUncheckedUpdateWithoutReserveWalletInput>
  }

  export type BankAccountUpdateWithoutReserveWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: BankUpdateOneRequiredWithoutAccountsNestedInput
    virtualIbans?: VirtualIbanUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutReserveWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    bankId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    virtualIbans?: VirtualIbanUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type ReserveWalletMemberUpsertWithWhereUniqueWithoutReserveWalletInput = {
    where: ReserveWalletMemberWhereUniqueInput
    update: XOR<ReserveWalletMemberUpdateWithoutReserveWalletInput, ReserveWalletMemberUncheckedUpdateWithoutReserveWalletInput>
    create: XOR<ReserveWalletMemberCreateWithoutReserveWalletInput, ReserveWalletMemberUncheckedCreateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberUpdateWithWhereUniqueWithoutReserveWalletInput = {
    where: ReserveWalletMemberWhereUniqueInput
    data: XOR<ReserveWalletMemberUpdateWithoutReserveWalletInput, ReserveWalletMemberUncheckedUpdateWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberUpdateManyWithWhereWithoutReserveWalletInput = {
    where: ReserveWalletMemberScalarWhereInput
    data: XOR<ReserveWalletMemberUpdateManyMutationInput, ReserveWalletMemberUncheckedUpdateManyWithoutReserveWalletInput>
  }

  export type ReserveWalletMemberScalarWhereInput = {
    AND?: ReserveWalletMemberScalarWhereInput | ReserveWalletMemberScalarWhereInput[]
    OR?: ReserveWalletMemberScalarWhereInput[]
    NOT?: ReserveWalletMemberScalarWhereInput | ReserveWalletMemberScalarWhereInput[]
    id?: StringFilter<"ReserveWalletMember"> | string
    walletAddress?: StringFilter<"ReserveWalletMember"> | string
    name?: StringNullableFilter<"ReserveWalletMember"> | string | null
    reserveWalletId?: StringFilter<"ReserveWalletMember"> | string
    contribution?: BigIntFilter<"ReserveWalletMember"> | bigint | number
    hasApproved?: BoolFilter<"ReserveWalletMember"> | boolean
    isAdmin?: BoolFilter<"ReserveWalletMember"> | boolean
    joinedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
    updatedAt?: DateTimeFilter<"ReserveWalletMember"> | Date | string
  }

  export type ReserveWalletCreateWithoutMembersInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount?: BankAccountCreateNestedOneWithoutReserveWalletInput
  }

  export type ReserveWalletUncheckedCreateWithoutMembersInput = {
    id: string
    name: string
    balance?: bigint | number
    threshold: bigint | number
    bankAccountCreated?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bankAccount?: BankAccountUncheckedCreateNestedOneWithoutReserveWalletInput
  }

  export type ReserveWalletCreateOrConnectWithoutMembersInput = {
    where: ReserveWalletWhereUniqueInput
    create: XOR<ReserveWalletCreateWithoutMembersInput, ReserveWalletUncheckedCreateWithoutMembersInput>
  }

  export type ReserveWalletUpsertWithoutMembersInput = {
    update: XOR<ReserveWalletUpdateWithoutMembersInput, ReserveWalletUncheckedUpdateWithoutMembersInput>
    create: XOR<ReserveWalletCreateWithoutMembersInput, ReserveWalletUncheckedCreateWithoutMembersInput>
    where?: ReserveWalletWhereInput
  }

  export type ReserveWalletUpdateToOneWithWhereWithoutMembersInput = {
    where?: ReserveWalletWhereInput
    data: XOR<ReserveWalletUpdateWithoutMembersInput, ReserveWalletUncheckedUpdateWithoutMembersInput>
  }

  export type ReserveWalletUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneWithoutReserveWalletNestedInput
  }

  export type ReserveWalletUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    threshold?: BigIntFieldUpdateOperationsInput | bigint | number
    bankAccountCreated?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUncheckedUpdateOneWithoutReserveWalletNestedInput
  }

  export type BankAccountCreateManyBankInput = {
    id: string
    accountNumber: string
    balance?: bigint | number
    status?: $Enums.AccountStatus
    reserveWalletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankAccountUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserveWallet?: ReserveWalletUpdateOneWithoutBankAccountNestedInput
    virtualIbans?: VirtualIbanUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    virtualIbans?: VirtualIbanUncheckedUpdateManyWithoutBankAccountNestedInput
    transactions?: BankTransactionUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type BankAccountUncheckedUpdateManyWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    reserveWalletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VirtualIbanCreateManyBankAccountInput = {
    id?: string
    iban: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionCreateManyBankAccountInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    virtualIbanId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VirtualIbanUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUpdateManyWithoutVirtualIbanNestedInput
  }

  export type VirtualIbanUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BankTransactionUncheckedUpdateManyWithoutVirtualIbanNestedInput
  }

  export type VirtualIbanUncheckedUpdateManyWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    iban?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    virtualIban?: VirtualIbanUpdateOneWithoutTransactionsNestedInput
    walletTransaction?: WalletTransactionUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    virtualIbanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletTransaction?: WalletTransactionUncheckedUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionUncheckedUpdateManyWithoutBankAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    virtualIbanId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankTransactionCreateManyVirtualIbanInput = {
    id?: string
    amount: bigint | number
    direction: $Enums.TransactionDirection
    description?: string | null
    status?: $Enums.TransactionStatus
    senderName?: string | null
    senderReference?: string | null
    bankAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BankTransactionUpdateWithoutVirtualIbanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccount?: BankAccountUpdateOneRequiredWithoutTransactionsNestedInput
    walletTransaction?: WalletTransactionUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionUncheckedUpdateWithoutVirtualIbanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    walletTransaction?: WalletTransactionUncheckedUpdateOneWithoutBankTransactionNestedInput
  }

  export type BankTransactionUncheckedUpdateManyWithoutVirtualIbanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    senderReference?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberCreateManyReserveWalletInput = {
    id?: string
    walletAddress: string
    name?: string | null
    contribution?: bigint | number
    hasApproved?: boolean
    isAdmin?: boolean
    joinedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReserveWalletMemberUpdateWithoutReserveWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberUncheckedUpdateWithoutReserveWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReserveWalletMemberUncheckedUpdateManyWithoutReserveWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contribution?: BigIntFieldUpdateOperationsInput | bigint | number
    hasApproved?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}