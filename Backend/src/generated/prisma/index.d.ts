
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ConfiguracionUsuario
 * 
 */
export type ConfiguracionUsuario = $Result.DefaultSelection<Prisma.$ConfiguracionUsuarioPayload>
/**
 * Model MeGusta
 * 
 */
export type MeGusta = $Result.DefaultSelection<Prisma.$MeGustaPayload>
/**
 * Model Seguidor
 * 
 */
export type Seguidor = $Result.DefaultSelection<Prisma.$SeguidorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configuracionUsuario`: Exposes CRUD operations for the **ConfiguracionUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfiguracionUsuarios
    * const configuracionUsuarios = await prisma.configuracionUsuario.findMany()
    * ```
    */
  get configuracionUsuario(): Prisma.ConfiguracionUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meGusta`: Exposes CRUD operations for the **MeGusta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeGustas
    * const meGustas = await prisma.meGusta.findMany()
    * ```
    */
  get meGusta(): Prisma.MeGustaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seguidor`: Exposes CRUD operations for the **Seguidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguidors
    * const seguidors = await prisma.seguidor.findMany()
    * ```
    */
  get seguidor(): Prisma.SeguidorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Account: 'Account',
    Profile: 'Profile',
    Post: 'Post',
    Notification: 'Notification',
    ConfiguracionUsuario: 'ConfiguracionUsuario',
    MeGusta: 'MeGusta',
    Seguidor: 'Seguidor'
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
      modelProps: "account" | "profile" | "post" | "notification" | "configuracionUsuario" | "meGusta" | "seguidor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ConfiguracionUsuario: {
        payload: Prisma.$ConfiguracionUsuarioPayload<ExtArgs>
        fields: Prisma.ConfiguracionUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfiguracionUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfiguracionUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          findFirst: {
            args: Prisma.ConfiguracionUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfiguracionUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          findMany: {
            args: Prisma.ConfiguracionUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>[]
          }
          create: {
            args: Prisma.ConfiguracionUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          createMany: {
            args: Prisma.ConfiguracionUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfiguracionUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>[]
          }
          delete: {
            args: Prisma.ConfiguracionUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          update: {
            args: Prisma.ConfiguracionUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.ConfiguracionUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfiguracionUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfiguracionUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.ConfiguracionUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfiguracionUsuarioPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguracionUsuario>
          }
          groupBy: {
            args: Prisma.ConfiguracionUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfiguracionUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionUsuarioCountAggregateOutputType> | number
          }
        }
      }
      MeGusta: {
        payload: Prisma.$MeGustaPayload<ExtArgs>
        fields: Prisma.MeGustaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeGustaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeGustaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          findFirst: {
            args: Prisma.MeGustaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeGustaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          findMany: {
            args: Prisma.MeGustaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>[]
          }
          create: {
            args: Prisma.MeGustaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          createMany: {
            args: Prisma.MeGustaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeGustaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>[]
          }
          delete: {
            args: Prisma.MeGustaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          update: {
            args: Prisma.MeGustaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          deleteMany: {
            args: Prisma.MeGustaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeGustaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeGustaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>[]
          }
          upsert: {
            args: Prisma.MeGustaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeGustaPayload>
          }
          aggregate: {
            args: Prisma.MeGustaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeGusta>
          }
          groupBy: {
            args: Prisma.MeGustaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeGustaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeGustaCountArgs<ExtArgs>
            result: $Utils.Optional<MeGustaCountAggregateOutputType> | number
          }
        }
      }
      Seguidor: {
        payload: Prisma.$SeguidorPayload<ExtArgs>
        fields: Prisma.SeguidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeguidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeguidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          findFirst: {
            args: Prisma.SeguidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeguidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          findMany: {
            args: Prisma.SeguidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          create: {
            args: Prisma.SeguidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          createMany: {
            args: Prisma.SeguidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeguidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          delete: {
            args: Prisma.SeguidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          update: {
            args: Prisma.SeguidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          deleteMany: {
            args: Prisma.SeguidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeguidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeguidorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>[]
          }
          upsert: {
            args: Prisma.SeguidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguidorPayload>
          }
          aggregate: {
            args: Prisma.SeguidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeguidor>
          }
          groupBy: {
            args: Prisma.SeguidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeguidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeguidorCountArgs<ExtArgs>
            result: $Utils.Optional<SeguidorCountAggregateOutputType> | number
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
    account?: AccountOmit
    profile?: ProfileOmit
    post?: PostOmit
    notification?: NotificationOmit
    configuracionUsuario?: ConfiguracionUsuarioOmit
    meGusta?: MeGustaOmit
    seguidor?: SeguidorOmit
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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    posts: number
    notificaciones_recibidas: number
    notificaciones_enviadas: number
    me_gustas: number
    seguidores: number
    seguidos: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ProfileCountOutputTypeCountPostsArgs
    notificaciones_recibidas?: boolean | ProfileCountOutputTypeCountNotificaciones_recibidasArgs
    notificaciones_enviadas?: boolean | ProfileCountOutputTypeCountNotificaciones_enviadasArgs
    me_gustas?: boolean | ProfileCountOutputTypeCountMe_gustasArgs
    seguidores?: boolean | ProfileCountOutputTypeCountSeguidoresArgs
    seguidos?: boolean | ProfileCountOutputTypeCountSeguidosArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotificaciones_recibidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountNotificaciones_enviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountMe_gustasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeGustaWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSeguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSeguidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    me_gustas: number
    notificaciones: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    me_gustas?: boolean | PostCountOutputTypeCountMe_gustasArgs
    notificaciones?: boolean | PostCountOutputTypeCountNotificacionesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMe_gustasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeGustaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    proveedor: string | null
    uid_firebase: string | null
    creacion: Date | null
    perfil_id: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    proveedor: string | null
    uid_firebase: string | null
    creacion: Date | null
    perfil_id: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    email: number
    password: number
    proveedor: number
    uid_firebase: number
    creacion: number
    perfil_id: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    proveedor?: true
    uid_firebase?: true
    creacion?: true
    perfil_id?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    proveedor?: true
    uid_firebase?: true
    creacion?: true
    perfil_id?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    proveedor?: true
    uid_firebase?: true
    creacion?: true
    perfil_id?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    email: string
    password: string
    proveedor: string
    uid_firebase: string | null
    creacion: Date
    perfil_id: string | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    proveedor?: boolean
    uid_firebase?: boolean
    creacion?: boolean
    perfil_id?: boolean
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    proveedor?: boolean
    uid_firebase?: boolean
    creacion?: boolean
    perfil_id?: boolean
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    proveedor?: boolean
    uid_firebase?: boolean
    creacion?: boolean
    perfil_id?: boolean
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    proveedor?: boolean
    uid_firebase?: boolean
    creacion?: boolean
    perfil_id?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "proveedor" | "uid_firebase" | "creacion" | "perfil_id", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | Account$perfilArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      perfil: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      proveedor: string
      uid_firebase: string | null
      creacion: Date
      perfil_id: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends Account$perfilArgs<ExtArgs> = {}>(args?: Subset<T, Account$perfilArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly proveedor: FieldRef<"Account", 'String'>
    readonly uid_firebase: FieldRef<"Account", 'String'>
    readonly creacion: FieldRef<"Account", 'DateTime'>
    readonly perfil_id: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.perfil
   */
  export type Account$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    nombre_usuario: string | null
    nombre_completo: string | null
    foto_perfil: string | null
    biografia: string | null
    sitio_web: string | null
    creacion: Date | null
    fecha_actualizacion: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    nombre_usuario: string | null
    nombre_completo: string | null
    foto_perfil: string | null
    biografia: string | null
    sitio_web: string | null
    creacion: Date | null
    fecha_actualizacion: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    nombre_usuario: number
    nombre_completo: number
    foto_perfil: number
    biografia: number
    sitio_web: number
    creacion: number
    fecha_actualizacion: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    nombre_usuario?: true
    nombre_completo?: true
    foto_perfil?: true
    biografia?: true
    sitio_web?: true
    creacion?: true
    fecha_actualizacion?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    nombre_usuario?: true
    nombre_completo?: true
    foto_perfil?: true
    biografia?: true
    sitio_web?: true
    creacion?: true
    fecha_actualizacion?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    nombre_usuario?: true
    nombre_completo?: true
    foto_perfil?: true
    biografia?: true
    sitio_web?: true
    creacion?: true
    fecha_actualizacion?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil: string | null
    biografia: string | null
    sitio_web: string | null
    creacion: Date
    fecha_actualizacion: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_usuario?: boolean
    nombre_completo?: boolean
    foto_perfil?: boolean
    biografia?: boolean
    sitio_web?: boolean
    creacion?: boolean
    fecha_actualizacion?: boolean
    account?: boolean | Profile$accountArgs<ExtArgs>
    posts?: boolean | Profile$postsArgs<ExtArgs>
    notificaciones_recibidas?: boolean | Profile$notificaciones_recibidasArgs<ExtArgs>
    notificaciones_enviadas?: boolean | Profile$notificaciones_enviadasArgs<ExtArgs>
    configuracion?: boolean | Profile$configuracionArgs<ExtArgs>
    me_gustas?: boolean | Profile$me_gustasArgs<ExtArgs>
    seguidores?: boolean | Profile$seguidoresArgs<ExtArgs>
    seguidos?: boolean | Profile$seguidosArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_usuario?: boolean
    nombre_completo?: boolean
    foto_perfil?: boolean
    biografia?: boolean
    sitio_web?: boolean
    creacion?: boolean
    fecha_actualizacion?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_usuario?: boolean
    nombre_completo?: boolean
    foto_perfil?: boolean
    biografia?: boolean
    sitio_web?: boolean
    creacion?: boolean
    fecha_actualizacion?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    nombre_usuario?: boolean
    nombre_completo?: boolean
    foto_perfil?: boolean
    biografia?: boolean
    sitio_web?: boolean
    creacion?: boolean
    fecha_actualizacion?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre_usuario" | "nombre_completo" | "foto_perfil" | "biografia" | "sitio_web" | "creacion" | "fecha_actualizacion", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Profile$accountArgs<ExtArgs>
    posts?: boolean | Profile$postsArgs<ExtArgs>
    notificaciones_recibidas?: boolean | Profile$notificaciones_recibidasArgs<ExtArgs>
    notificaciones_enviadas?: boolean | Profile$notificaciones_enviadasArgs<ExtArgs>
    configuracion?: boolean | Profile$configuracionArgs<ExtArgs>
    me_gustas?: boolean | Profile$me_gustasArgs<ExtArgs>
    seguidores?: boolean | Profile$seguidoresArgs<ExtArgs>
    seguidos?: boolean | Profile$seguidosArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      notificaciones_recibidas: Prisma.$NotificationPayload<ExtArgs>[]
      notificaciones_enviadas: Prisma.$NotificationPayload<ExtArgs>[]
      configuracion: Prisma.$ConfiguracionUsuarioPayload<ExtArgs> | null
      me_gustas: Prisma.$MeGustaPayload<ExtArgs>[]
      seguidores: Prisma.$SeguidorPayload<ExtArgs>[]
      seguidos: Prisma.$SeguidorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre_usuario: string
      nombre_completo: string
      foto_perfil: string | null
      biografia: string | null
      sitio_web: string | null
      creacion: Date
      fecha_actualizacion: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Profile$accountArgs<ExtArgs> = {}>(args?: Subset<T, Profile$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Profile$postsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones_recibidas<T extends Profile$notificaciones_recibidasArgs<ExtArgs> = {}>(args?: Subset<T, Profile$notificaciones_recibidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones_enviadas<T extends Profile$notificaciones_enviadasArgs<ExtArgs> = {}>(args?: Subset<T, Profile$notificaciones_enviadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    configuracion<T extends Profile$configuracionArgs<ExtArgs> = {}>(args?: Subset<T, Profile$configuracionArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    me_gustas<T extends Profile$me_gustasArgs<ExtArgs> = {}>(args?: Subset<T, Profile$me_gustasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguidores<T extends Profile$seguidoresArgs<ExtArgs> = {}>(args?: Subset<T, Profile$seguidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguidos<T extends Profile$seguidosArgs<ExtArgs> = {}>(args?: Subset<T, Profile$seguidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly nombre_usuario: FieldRef<"Profile", 'String'>
    readonly nombre_completo: FieldRef<"Profile", 'String'>
    readonly foto_perfil: FieldRef<"Profile", 'String'>
    readonly biografia: FieldRef<"Profile", 'String'>
    readonly sitio_web: FieldRef<"Profile", 'String'>
    readonly creacion: FieldRef<"Profile", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.account
   */
  export type Profile$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Profile.posts
   */
  export type Profile$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Profile.notificaciones_recibidas
   */
  export type Profile$notificaciones_recibidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Profile.notificaciones_enviadas
   */
  export type Profile$notificaciones_enviadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Profile.configuracion
   */
  export type Profile$configuracionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    where?: ConfiguracionUsuarioWhereInput
  }

  /**
   * Profile.me_gustas
   */
  export type Profile$me_gustasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    where?: MeGustaWhereInput
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    cursor?: MeGustaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeGustaScalarFieldEnum | MeGustaScalarFieldEnum[]
  }

  /**
   * Profile.seguidores
   */
  export type Profile$seguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    cursor?: SeguidorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Profile.seguidos
   */
  export type Profile$seguidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    cursor?: SeguidorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    contador_likes: number | null
    contador_comentarios: number | null
    contador_compartidos: number | null
  }

  export type PostSumAggregateOutputType = {
    contador_likes: number | null
    contador_comentarios: number | null
    contador_compartidos: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    contenido: string | null
    imagen_url: string | null
    creacion: Date | null
    editada: boolean | null
    fecha_edicion: Date | null
    contador_likes: number | null
    contador_comentarios: number | null
    contador_compartidos: number | null
    perfil_id: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    contenido: string | null
    imagen_url: string | null
    creacion: Date | null
    editada: boolean | null
    fecha_edicion: Date | null
    contador_likes: number | null
    contador_comentarios: number | null
    contador_compartidos: number | null
    perfil_id: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    contenido: number
    imagen_url: number
    creacion: number
    editada: number
    fecha_edicion: number
    contador_likes: number
    contador_comentarios: number
    contador_compartidos: number
    perfil_id: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    contador_likes?: true
    contador_comentarios?: true
    contador_compartidos?: true
  }

  export type PostSumAggregateInputType = {
    contador_likes?: true
    contador_comentarios?: true
    contador_compartidos?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    contenido?: true
    imagen_url?: true
    creacion?: true
    editada?: true
    fecha_edicion?: true
    contador_likes?: true
    contador_comentarios?: true
    contador_compartidos?: true
    perfil_id?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    contenido?: true
    imagen_url?: true
    creacion?: true
    editada?: true
    fecha_edicion?: true
    contador_likes?: true
    contador_comentarios?: true
    contador_compartidos?: true
    perfil_id?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    contenido?: true
    imagen_url?: true
    creacion?: true
    editada?: true
    fecha_edicion?: true
    contador_likes?: true
    contador_comentarios?: true
    contador_compartidos?: true
    perfil_id?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    contenido: string
    imagen_url: string | null
    creacion: Date
    editada: boolean
    fecha_edicion: Date
    contador_likes: number
    contador_comentarios: number
    contador_compartidos: number
    perfil_id: string
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    imagen_url?: boolean
    creacion?: boolean
    editada?: boolean
    fecha_edicion?: boolean
    contador_likes?: boolean
    contador_comentarios?: boolean
    contador_compartidos?: boolean
    perfil_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    me_gustas?: boolean | Post$me_gustasArgs<ExtArgs>
    notificaciones?: boolean | Post$notificacionesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    imagen_url?: boolean
    creacion?: boolean
    editada?: boolean
    fecha_edicion?: boolean
    contador_likes?: boolean
    contador_comentarios?: boolean
    contador_compartidos?: boolean
    perfil_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    imagen_url?: boolean
    creacion?: boolean
    editada?: boolean
    fecha_edicion?: boolean
    contador_likes?: boolean
    contador_comentarios?: boolean
    contador_compartidos?: boolean
    perfil_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    contenido?: boolean
    imagen_url?: boolean
    creacion?: boolean
    editada?: boolean
    fecha_edicion?: boolean
    contador_likes?: boolean
    contador_comentarios?: boolean
    contador_compartidos?: boolean
    perfil_id?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "imagen_url" | "creacion" | "editada" | "fecha_edicion" | "contador_likes" | "contador_comentarios" | "contador_compartidos" | "perfil_id", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    me_gustas?: boolean | Post$me_gustasArgs<ExtArgs>
    notificaciones?: boolean | Post$notificacionesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      perfil: Prisma.$ProfilePayload<ExtArgs>
      me_gustas: Prisma.$MeGustaPayload<ExtArgs>[]
      notificaciones: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenido: string
      imagen_url: string | null
      creacion: Date
      editada: boolean
      fecha_edicion: Date
      contador_likes: number
      contador_comentarios: number
      contador_compartidos: number
      perfil_id: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    me_gustas<T extends Post$me_gustasArgs<ExtArgs> = {}>(args?: Subset<T, Post$me_gustasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones<T extends Post$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Post$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly contenido: FieldRef<"Post", 'String'>
    readonly imagen_url: FieldRef<"Post", 'String'>
    readonly creacion: FieldRef<"Post", 'DateTime'>
    readonly editada: FieldRef<"Post", 'Boolean'>
    readonly fecha_edicion: FieldRef<"Post", 'DateTime'>
    readonly contador_likes: FieldRef<"Post", 'Int'>
    readonly contador_comentarios: FieldRef<"Post", 'Int'>
    readonly contador_compartidos: FieldRef<"Post", 'Int'>
    readonly perfil_id: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.me_gustas
   */
  export type Post$me_gustasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    where?: MeGustaWhereInput
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    cursor?: MeGustaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeGustaScalarFieldEnum | MeGustaScalarFieldEnum[]
  }

  /**
   * Post.notificaciones
   */
  export type Post$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    leida: boolean | null
    fecha_creacion: Date | null
    perfil_id: string | null
    emisor_id: string | null
    publicacion_id: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    leida: boolean | null
    fecha_creacion: Date | null
    perfil_id: string | null
    emisor_id: string | null
    publicacion_id: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    tipo: number
    leida: number
    fecha_creacion: number
    perfil_id: number
    emisor_id: number
    publicacion_id: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    tipo?: true
    leida?: true
    fecha_creacion?: true
    perfil_id?: true
    emisor_id?: true
    publicacion_id?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    tipo?: true
    leida?: true
    fecha_creacion?: true
    perfil_id?: true
    emisor_id?: true
    publicacion_id?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    tipo?: true
    leida?: true
    fecha_creacion?: true
    perfil_id?: true
    emisor_id?: true
    publicacion_id?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    tipo: string
    leida: boolean
    fecha_creacion: Date
    perfil_id: string
    emisor_id: string
    publicacion_id: string | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    leida?: boolean
    fecha_creacion?: boolean
    perfil_id?: boolean
    emisor_id?: boolean
    publicacion_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    leida?: boolean
    fecha_creacion?: boolean
    perfil_id?: boolean
    emisor_id?: boolean
    publicacion_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    leida?: boolean
    fecha_creacion?: boolean
    perfil_id?: boolean
    emisor_id?: boolean
    publicacion_id?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    tipo?: boolean
    leida?: boolean
    fecha_creacion?: boolean
    perfil_id?: boolean
    emisor_id?: boolean
    publicacion_id?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "leida" | "fecha_creacion" | "perfil_id" | "emisor_id" | "publicacion_id", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    emisor?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | Notification$publicacionArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      perfil: Prisma.$ProfilePayload<ExtArgs>
      emisor: Prisma.$ProfilePayload<ExtArgs>
      publicacion: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      leida: boolean
      fecha_creacion: Date
      perfil_id: string
      emisor_id: string
      publicacion_id: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emisor<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacion<T extends Notification$publicacionArgs<ExtArgs> = {}>(args?: Subset<T, Notification$publicacionArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly tipo: FieldRef<"Notification", 'String'>
    readonly leida: FieldRef<"Notification", 'Boolean'>
    readonly fecha_creacion: FieldRef<"Notification", 'DateTime'>
    readonly perfil_id: FieldRef<"Notification", 'String'>
    readonly emisor_id: FieldRef<"Notification", 'String'>
    readonly publicacion_id: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.publicacion
   */
  export type Notification$publicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ConfiguracionUsuario
   */

  export type AggregateConfiguracionUsuario = {
    _count: ConfiguracionUsuarioCountAggregateOutputType | null
    _min: ConfiguracionUsuarioMinAggregateOutputType | null
    _max: ConfiguracionUsuarioMaxAggregateOutputType | null
  }

  export type ConfiguracionUsuarioMinAggregateOutputType = {
    perfil_id: string | null
    perfil_publico: boolean | null
    recibir_notificaciones: boolean | null
    tema_oscuro: boolean | null
    idioma: string | null
  }

  export type ConfiguracionUsuarioMaxAggregateOutputType = {
    perfil_id: string | null
    perfil_publico: boolean | null
    recibir_notificaciones: boolean | null
    tema_oscuro: boolean | null
    idioma: string | null
  }

  export type ConfiguracionUsuarioCountAggregateOutputType = {
    perfil_id: number
    perfil_publico: number
    recibir_notificaciones: number
    tema_oscuro: number
    idioma: number
    _all: number
  }


  export type ConfiguracionUsuarioMinAggregateInputType = {
    perfil_id?: true
    perfil_publico?: true
    recibir_notificaciones?: true
    tema_oscuro?: true
    idioma?: true
  }

  export type ConfiguracionUsuarioMaxAggregateInputType = {
    perfil_id?: true
    perfil_publico?: true
    recibir_notificaciones?: true
    tema_oscuro?: true
    idioma?: true
  }

  export type ConfiguracionUsuarioCountAggregateInputType = {
    perfil_id?: true
    perfil_publico?: true
    recibir_notificaciones?: true
    tema_oscuro?: true
    idioma?: true
    _all?: true
  }

  export type ConfiguracionUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracionUsuario to aggregate.
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionUsuarios to fetch.
     */
    orderBy?: ConfiguracionUsuarioOrderByWithRelationInput | ConfiguracionUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfiguracionUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfiguracionUsuarios
    **/
    _count?: true | ConfiguracionUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionUsuarioMaxAggregateInputType
  }

  export type GetConfiguracionUsuarioAggregateType<T extends ConfiguracionUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguracionUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguracionUsuario[P]>
      : GetScalarType<T[P], AggregateConfiguracionUsuario[P]>
  }




  export type ConfiguracionUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfiguracionUsuarioWhereInput
    orderBy?: ConfiguracionUsuarioOrderByWithAggregationInput | ConfiguracionUsuarioOrderByWithAggregationInput[]
    by: ConfiguracionUsuarioScalarFieldEnum[] | ConfiguracionUsuarioScalarFieldEnum
    having?: ConfiguracionUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionUsuarioCountAggregateInputType | true
    _min?: ConfiguracionUsuarioMinAggregateInputType
    _max?: ConfiguracionUsuarioMaxAggregateInputType
  }

  export type ConfiguracionUsuarioGroupByOutputType = {
    perfil_id: string
    perfil_publico: boolean
    recibir_notificaciones: boolean
    tema_oscuro: boolean
    idioma: string
    _count: ConfiguracionUsuarioCountAggregateOutputType | null
    _min: ConfiguracionUsuarioMinAggregateOutputType | null
    _max: ConfiguracionUsuarioMaxAggregateOutputType | null
  }

  type GetConfiguracionUsuarioGroupByPayload<T extends ConfiguracionUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type ConfiguracionUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracionUsuario"]>

  export type ConfiguracionUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracionUsuario"]>

  export type ConfiguracionUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["configuracionUsuario"]>

  export type ConfiguracionUsuarioSelectScalar = {
    perfil_id?: boolean
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: boolean
  }

  export type ConfiguracionUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"perfil_id" | "perfil_publico" | "recibir_notificaciones" | "tema_oscuro" | "idioma", ExtArgs["result"]["configuracionUsuario"]>
  export type ConfiguracionUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ConfiguracionUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ConfiguracionUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ConfiguracionUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfiguracionUsuario"
    objects: {
      perfil: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      perfil_id: string
      perfil_publico: boolean
      recibir_notificaciones: boolean
      tema_oscuro: boolean
      idioma: string
    }, ExtArgs["result"]["configuracionUsuario"]>
    composites: {}
  }

  type ConfiguracionUsuarioGetPayload<S extends boolean | null | undefined | ConfiguracionUsuarioDefaultArgs> = $Result.GetResult<Prisma.$ConfiguracionUsuarioPayload, S>

  type ConfiguracionUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfiguracionUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionUsuarioCountAggregateInputType | true
    }

  export interface ConfiguracionUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfiguracionUsuario'], meta: { name: 'ConfiguracionUsuario' } }
    /**
     * Find zero or one ConfiguracionUsuario that matches the filter.
     * @param {ConfiguracionUsuarioFindUniqueArgs} args - Arguments to find a ConfiguracionUsuario
     * @example
     * // Get one ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfiguracionUsuarioFindUniqueArgs>(args: SelectSubset<T, ConfiguracionUsuarioFindUniqueArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfiguracionUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfiguracionUsuarioFindUniqueOrThrowArgs} args - Arguments to find a ConfiguracionUsuario
     * @example
     * // Get one ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfiguracionUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfiguracionUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracionUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioFindFirstArgs} args - Arguments to find a ConfiguracionUsuario
     * @example
     * // Get one ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfiguracionUsuarioFindFirstArgs>(args?: SelectSubset<T, ConfiguracionUsuarioFindFirstArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfiguracionUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioFindFirstOrThrowArgs} args - Arguments to find a ConfiguracionUsuario
     * @example
     * // Get one ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfiguracionUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfiguracionUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfiguracionUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfiguracionUsuarios
     * const configuracionUsuarios = await prisma.configuracionUsuario.findMany()
     * 
     * // Get first 10 ConfiguracionUsuarios
     * const configuracionUsuarios = await prisma.configuracionUsuario.findMany({ take: 10 })
     * 
     * // Only select the `perfil_id`
     * const configuracionUsuarioWithPerfil_idOnly = await prisma.configuracionUsuario.findMany({ select: { perfil_id: true } })
     * 
     */
    findMany<T extends ConfiguracionUsuarioFindManyArgs>(args?: SelectSubset<T, ConfiguracionUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfiguracionUsuario.
     * @param {ConfiguracionUsuarioCreateArgs} args - Arguments to create a ConfiguracionUsuario.
     * @example
     * // Create one ConfiguracionUsuario
     * const ConfiguracionUsuario = await prisma.configuracionUsuario.create({
     *   data: {
     *     // ... data to create a ConfiguracionUsuario
     *   }
     * })
     * 
     */
    create<T extends ConfiguracionUsuarioCreateArgs>(args: SelectSubset<T, ConfiguracionUsuarioCreateArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfiguracionUsuarios.
     * @param {ConfiguracionUsuarioCreateManyArgs} args - Arguments to create many ConfiguracionUsuarios.
     * @example
     * // Create many ConfiguracionUsuarios
     * const configuracionUsuario = await prisma.configuracionUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfiguracionUsuarioCreateManyArgs>(args?: SelectSubset<T, ConfiguracionUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfiguracionUsuarios and returns the data saved in the database.
     * @param {ConfiguracionUsuarioCreateManyAndReturnArgs} args - Arguments to create many ConfiguracionUsuarios.
     * @example
     * // Create many ConfiguracionUsuarios
     * const configuracionUsuario = await prisma.configuracionUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfiguracionUsuarios and only return the `perfil_id`
     * const configuracionUsuarioWithPerfil_idOnly = await prisma.configuracionUsuario.createManyAndReturn({
     *   select: { perfil_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfiguracionUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfiguracionUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfiguracionUsuario.
     * @param {ConfiguracionUsuarioDeleteArgs} args - Arguments to delete one ConfiguracionUsuario.
     * @example
     * // Delete one ConfiguracionUsuario
     * const ConfiguracionUsuario = await prisma.configuracionUsuario.delete({
     *   where: {
     *     // ... filter to delete one ConfiguracionUsuario
     *   }
     * })
     * 
     */
    delete<T extends ConfiguracionUsuarioDeleteArgs>(args: SelectSubset<T, ConfiguracionUsuarioDeleteArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfiguracionUsuario.
     * @param {ConfiguracionUsuarioUpdateArgs} args - Arguments to update one ConfiguracionUsuario.
     * @example
     * // Update one ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfiguracionUsuarioUpdateArgs>(args: SelectSubset<T, ConfiguracionUsuarioUpdateArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfiguracionUsuarios.
     * @param {ConfiguracionUsuarioDeleteManyArgs} args - Arguments to filter ConfiguracionUsuarios to delete.
     * @example
     * // Delete a few ConfiguracionUsuarios
     * const { count } = await prisma.configuracionUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfiguracionUsuarioDeleteManyArgs>(args?: SelectSubset<T, ConfiguracionUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracionUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfiguracionUsuarios
     * const configuracionUsuario = await prisma.configuracionUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfiguracionUsuarioUpdateManyArgs>(args: SelectSubset<T, ConfiguracionUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfiguracionUsuarios and returns the data updated in the database.
     * @param {ConfiguracionUsuarioUpdateManyAndReturnArgs} args - Arguments to update many ConfiguracionUsuarios.
     * @example
     * // Update many ConfiguracionUsuarios
     * const configuracionUsuario = await prisma.configuracionUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfiguracionUsuarios and only return the `perfil_id`
     * const configuracionUsuarioWithPerfil_idOnly = await prisma.configuracionUsuario.updateManyAndReturn({
     *   select: { perfil_id: true },
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
    updateManyAndReturn<T extends ConfiguracionUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfiguracionUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfiguracionUsuario.
     * @param {ConfiguracionUsuarioUpsertArgs} args - Arguments to update or create a ConfiguracionUsuario.
     * @example
     * // Update or create a ConfiguracionUsuario
     * const configuracionUsuario = await prisma.configuracionUsuario.upsert({
     *   create: {
     *     // ... data to create a ConfiguracionUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfiguracionUsuario we want to update
     *   }
     * })
     */
    upsert<T extends ConfiguracionUsuarioUpsertArgs>(args: SelectSubset<T, ConfiguracionUsuarioUpsertArgs<ExtArgs>>): Prisma__ConfiguracionUsuarioClient<$Result.GetResult<Prisma.$ConfiguracionUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfiguracionUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioCountArgs} args - Arguments to filter ConfiguracionUsuarios to count.
     * @example
     * // Count the number of ConfiguracionUsuarios
     * const count = await prisma.configuracionUsuario.count({
     *   where: {
     *     // ... the filter for the ConfiguracionUsuarios we want to count
     *   }
     * })
    **/
    count<T extends ConfiguracionUsuarioCountArgs>(
      args?: Subset<T, ConfiguracionUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfiguracionUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionUsuarioAggregateArgs>(args: Subset<T, ConfiguracionUsuarioAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionUsuarioAggregateType<T>>

    /**
     * Group by ConfiguracionUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionUsuarioGroupByArgs} args - Group by arguments.
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
      T extends ConfiguracionUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfiguracionUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: ConfiguracionUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfiguracionUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfiguracionUsuario model
   */
  readonly fields: ConfiguracionUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfiguracionUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfiguracionUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConfiguracionUsuario model
   */
  interface ConfiguracionUsuarioFieldRefs {
    readonly perfil_id: FieldRef<"ConfiguracionUsuario", 'String'>
    readonly perfil_publico: FieldRef<"ConfiguracionUsuario", 'Boolean'>
    readonly recibir_notificaciones: FieldRef<"ConfiguracionUsuario", 'Boolean'>
    readonly tema_oscuro: FieldRef<"ConfiguracionUsuario", 'Boolean'>
    readonly idioma: FieldRef<"ConfiguracionUsuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConfiguracionUsuario findUnique
   */
  export type ConfiguracionUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracionUsuario to fetch.
     */
    where: ConfiguracionUsuarioWhereUniqueInput
  }

  /**
   * ConfiguracionUsuario findUniqueOrThrow
   */
  export type ConfiguracionUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracionUsuario to fetch.
     */
    where: ConfiguracionUsuarioWhereUniqueInput
  }

  /**
   * ConfiguracionUsuario findFirst
   */
  export type ConfiguracionUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracionUsuario to fetch.
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionUsuarios to fetch.
     */
    orderBy?: ConfiguracionUsuarioOrderByWithRelationInput | ConfiguracionUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracionUsuarios.
     */
    cursor?: ConfiguracionUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracionUsuarios.
     */
    distinct?: ConfiguracionUsuarioScalarFieldEnum | ConfiguracionUsuarioScalarFieldEnum[]
  }

  /**
   * ConfiguracionUsuario findFirstOrThrow
   */
  export type ConfiguracionUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracionUsuario to fetch.
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionUsuarios to fetch.
     */
    orderBy?: ConfiguracionUsuarioOrderByWithRelationInput | ConfiguracionUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfiguracionUsuarios.
     */
    cursor?: ConfiguracionUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfiguracionUsuarios.
     */
    distinct?: ConfiguracionUsuarioScalarFieldEnum | ConfiguracionUsuarioScalarFieldEnum[]
  }

  /**
   * ConfiguracionUsuario findMany
   */
  export type ConfiguracionUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which ConfiguracionUsuarios to fetch.
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfiguracionUsuarios to fetch.
     */
    orderBy?: ConfiguracionUsuarioOrderByWithRelationInput | ConfiguracionUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfiguracionUsuarios.
     */
    cursor?: ConfiguracionUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfiguracionUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfiguracionUsuarios.
     */
    skip?: number
    distinct?: ConfiguracionUsuarioScalarFieldEnum | ConfiguracionUsuarioScalarFieldEnum[]
  }

  /**
   * ConfiguracionUsuario create
   */
  export type ConfiguracionUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfiguracionUsuario.
     */
    data: XOR<ConfiguracionUsuarioCreateInput, ConfiguracionUsuarioUncheckedCreateInput>
  }

  /**
   * ConfiguracionUsuario createMany
   */
  export type ConfiguracionUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfiguracionUsuarios.
     */
    data: ConfiguracionUsuarioCreateManyInput | ConfiguracionUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfiguracionUsuario createManyAndReturn
   */
  export type ConfiguracionUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many ConfiguracionUsuarios.
     */
    data: ConfiguracionUsuarioCreateManyInput | ConfiguracionUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfiguracionUsuario update
   */
  export type ConfiguracionUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfiguracionUsuario.
     */
    data: XOR<ConfiguracionUsuarioUpdateInput, ConfiguracionUsuarioUncheckedUpdateInput>
    /**
     * Choose, which ConfiguracionUsuario to update.
     */
    where: ConfiguracionUsuarioWhereUniqueInput
  }

  /**
   * ConfiguracionUsuario updateMany
   */
  export type ConfiguracionUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfiguracionUsuarios.
     */
    data: XOR<ConfiguracionUsuarioUpdateManyMutationInput, ConfiguracionUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracionUsuarios to update
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * Limit how many ConfiguracionUsuarios to update.
     */
    limit?: number
  }

  /**
   * ConfiguracionUsuario updateManyAndReturn
   */
  export type ConfiguracionUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update ConfiguracionUsuarios.
     */
    data: XOR<ConfiguracionUsuarioUpdateManyMutationInput, ConfiguracionUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which ConfiguracionUsuarios to update
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * Limit how many ConfiguracionUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfiguracionUsuario upsert
   */
  export type ConfiguracionUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfiguracionUsuario to update in case it exists.
     */
    where: ConfiguracionUsuarioWhereUniqueInput
    /**
     * In case the ConfiguracionUsuario found by the `where` argument doesn't exist, create a new ConfiguracionUsuario with this data.
     */
    create: XOR<ConfiguracionUsuarioCreateInput, ConfiguracionUsuarioUncheckedCreateInput>
    /**
     * In case the ConfiguracionUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfiguracionUsuarioUpdateInput, ConfiguracionUsuarioUncheckedUpdateInput>
  }

  /**
   * ConfiguracionUsuario delete
   */
  export type ConfiguracionUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
    /**
     * Filter which ConfiguracionUsuario to delete.
     */
    where: ConfiguracionUsuarioWhereUniqueInput
  }

  /**
   * ConfiguracionUsuario deleteMany
   */
  export type ConfiguracionUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfiguracionUsuarios to delete
     */
    where?: ConfiguracionUsuarioWhereInput
    /**
     * Limit how many ConfiguracionUsuarios to delete.
     */
    limit?: number
  }

  /**
   * ConfiguracionUsuario without action
   */
  export type ConfiguracionUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfiguracionUsuario
     */
    select?: ConfiguracionUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfiguracionUsuario
     */
    omit?: ConfiguracionUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfiguracionUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model MeGusta
   */

  export type AggregateMeGusta = {
    _count: MeGustaCountAggregateOutputType | null
    _min: MeGustaMinAggregateOutputType | null
    _max: MeGustaMaxAggregateOutputType | null
  }

  export type MeGustaMinAggregateOutputType = {
    perfil_id: string | null
    publicacion_id: string | null
    fecha: Date | null
  }

  export type MeGustaMaxAggregateOutputType = {
    perfil_id: string | null
    publicacion_id: string | null
    fecha: Date | null
  }

  export type MeGustaCountAggregateOutputType = {
    perfil_id: number
    publicacion_id: number
    fecha: number
    _all: number
  }


  export type MeGustaMinAggregateInputType = {
    perfil_id?: true
    publicacion_id?: true
    fecha?: true
  }

  export type MeGustaMaxAggregateInputType = {
    perfil_id?: true
    publicacion_id?: true
    fecha?: true
  }

  export type MeGustaCountAggregateInputType = {
    perfil_id?: true
    publicacion_id?: true
    fecha?: true
    _all?: true
  }

  export type MeGustaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeGusta to aggregate.
     */
    where?: MeGustaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeGustas to fetch.
     */
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeGustaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeGustas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeGustas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeGustas
    **/
    _count?: true | MeGustaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeGustaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeGustaMaxAggregateInputType
  }

  export type GetMeGustaAggregateType<T extends MeGustaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeGusta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeGusta[P]>
      : GetScalarType<T[P], AggregateMeGusta[P]>
  }




  export type MeGustaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeGustaWhereInput
    orderBy?: MeGustaOrderByWithAggregationInput | MeGustaOrderByWithAggregationInput[]
    by: MeGustaScalarFieldEnum[] | MeGustaScalarFieldEnum
    having?: MeGustaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeGustaCountAggregateInputType | true
    _min?: MeGustaMinAggregateInputType
    _max?: MeGustaMaxAggregateInputType
  }

  export type MeGustaGroupByOutputType = {
    perfil_id: string
    publicacion_id: string
    fecha: Date
    _count: MeGustaCountAggregateOutputType | null
    _min: MeGustaMinAggregateOutputType | null
    _max: MeGustaMaxAggregateOutputType | null
  }

  type GetMeGustaGroupByPayload<T extends MeGustaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeGustaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeGustaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeGustaGroupByOutputType[P]>
            : GetScalarType<T[P], MeGustaGroupByOutputType[P]>
        }
      >
    >


  export type MeGustaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    publicacion_id?: boolean
    fecha?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meGusta"]>

  export type MeGustaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    publicacion_id?: boolean
    fecha?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meGusta"]>

  export type MeGustaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    perfil_id?: boolean
    publicacion_id?: boolean
    fecha?: boolean
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meGusta"]>

  export type MeGustaSelectScalar = {
    perfil_id?: boolean
    publicacion_id?: boolean
    fecha?: boolean
  }

  export type MeGustaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"perfil_id" | "publicacion_id" | "fecha", ExtArgs["result"]["meGusta"]>
  export type MeGustaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type MeGustaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type MeGustaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | ProfileDefaultArgs<ExtArgs>
    publicacion?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $MeGustaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeGusta"
    objects: {
      perfil: Prisma.$ProfilePayload<ExtArgs>
      publicacion: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      perfil_id: string
      publicacion_id: string
      fecha: Date
    }, ExtArgs["result"]["meGusta"]>
    composites: {}
  }

  type MeGustaGetPayload<S extends boolean | null | undefined | MeGustaDefaultArgs> = $Result.GetResult<Prisma.$MeGustaPayload, S>

  type MeGustaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeGustaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeGustaCountAggregateInputType | true
    }

  export interface MeGustaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeGusta'], meta: { name: 'MeGusta' } }
    /**
     * Find zero or one MeGusta that matches the filter.
     * @param {MeGustaFindUniqueArgs} args - Arguments to find a MeGusta
     * @example
     * // Get one MeGusta
     * const meGusta = await prisma.meGusta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeGustaFindUniqueArgs>(args: SelectSubset<T, MeGustaFindUniqueArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeGusta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeGustaFindUniqueOrThrowArgs} args - Arguments to find a MeGusta
     * @example
     * // Get one MeGusta
     * const meGusta = await prisma.meGusta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeGustaFindUniqueOrThrowArgs>(args: SelectSubset<T, MeGustaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeGusta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaFindFirstArgs} args - Arguments to find a MeGusta
     * @example
     * // Get one MeGusta
     * const meGusta = await prisma.meGusta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeGustaFindFirstArgs>(args?: SelectSubset<T, MeGustaFindFirstArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeGusta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaFindFirstOrThrowArgs} args - Arguments to find a MeGusta
     * @example
     * // Get one MeGusta
     * const meGusta = await prisma.meGusta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeGustaFindFirstOrThrowArgs>(args?: SelectSubset<T, MeGustaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeGustas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeGustas
     * const meGustas = await prisma.meGusta.findMany()
     * 
     * // Get first 10 MeGustas
     * const meGustas = await prisma.meGusta.findMany({ take: 10 })
     * 
     * // Only select the `perfil_id`
     * const meGustaWithPerfil_idOnly = await prisma.meGusta.findMany({ select: { perfil_id: true } })
     * 
     */
    findMany<T extends MeGustaFindManyArgs>(args?: SelectSubset<T, MeGustaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeGusta.
     * @param {MeGustaCreateArgs} args - Arguments to create a MeGusta.
     * @example
     * // Create one MeGusta
     * const MeGusta = await prisma.meGusta.create({
     *   data: {
     *     // ... data to create a MeGusta
     *   }
     * })
     * 
     */
    create<T extends MeGustaCreateArgs>(args: SelectSubset<T, MeGustaCreateArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeGustas.
     * @param {MeGustaCreateManyArgs} args - Arguments to create many MeGustas.
     * @example
     * // Create many MeGustas
     * const meGusta = await prisma.meGusta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeGustaCreateManyArgs>(args?: SelectSubset<T, MeGustaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeGustas and returns the data saved in the database.
     * @param {MeGustaCreateManyAndReturnArgs} args - Arguments to create many MeGustas.
     * @example
     * // Create many MeGustas
     * const meGusta = await prisma.meGusta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeGustas and only return the `perfil_id`
     * const meGustaWithPerfil_idOnly = await prisma.meGusta.createManyAndReturn({
     *   select: { perfil_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeGustaCreateManyAndReturnArgs>(args?: SelectSubset<T, MeGustaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeGusta.
     * @param {MeGustaDeleteArgs} args - Arguments to delete one MeGusta.
     * @example
     * // Delete one MeGusta
     * const MeGusta = await prisma.meGusta.delete({
     *   where: {
     *     // ... filter to delete one MeGusta
     *   }
     * })
     * 
     */
    delete<T extends MeGustaDeleteArgs>(args: SelectSubset<T, MeGustaDeleteArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeGusta.
     * @param {MeGustaUpdateArgs} args - Arguments to update one MeGusta.
     * @example
     * // Update one MeGusta
     * const meGusta = await prisma.meGusta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeGustaUpdateArgs>(args: SelectSubset<T, MeGustaUpdateArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeGustas.
     * @param {MeGustaDeleteManyArgs} args - Arguments to filter MeGustas to delete.
     * @example
     * // Delete a few MeGustas
     * const { count } = await prisma.meGusta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeGustaDeleteManyArgs>(args?: SelectSubset<T, MeGustaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeGustas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeGustas
     * const meGusta = await prisma.meGusta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeGustaUpdateManyArgs>(args: SelectSubset<T, MeGustaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeGustas and returns the data updated in the database.
     * @param {MeGustaUpdateManyAndReturnArgs} args - Arguments to update many MeGustas.
     * @example
     * // Update many MeGustas
     * const meGusta = await prisma.meGusta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeGustas and only return the `perfil_id`
     * const meGustaWithPerfil_idOnly = await prisma.meGusta.updateManyAndReturn({
     *   select: { perfil_id: true },
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
    updateManyAndReturn<T extends MeGustaUpdateManyAndReturnArgs>(args: SelectSubset<T, MeGustaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeGusta.
     * @param {MeGustaUpsertArgs} args - Arguments to update or create a MeGusta.
     * @example
     * // Update or create a MeGusta
     * const meGusta = await prisma.meGusta.upsert({
     *   create: {
     *     // ... data to create a MeGusta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeGusta we want to update
     *   }
     * })
     */
    upsert<T extends MeGustaUpsertArgs>(args: SelectSubset<T, MeGustaUpsertArgs<ExtArgs>>): Prisma__MeGustaClient<$Result.GetResult<Prisma.$MeGustaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeGustas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaCountArgs} args - Arguments to filter MeGustas to count.
     * @example
     * // Count the number of MeGustas
     * const count = await prisma.meGusta.count({
     *   where: {
     *     // ... the filter for the MeGustas we want to count
     *   }
     * })
    **/
    count<T extends MeGustaCountArgs>(
      args?: Subset<T, MeGustaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeGustaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeGusta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeGustaAggregateArgs>(args: Subset<T, MeGustaAggregateArgs>): Prisma.PrismaPromise<GetMeGustaAggregateType<T>>

    /**
     * Group by MeGusta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeGustaGroupByArgs} args - Group by arguments.
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
      T extends MeGustaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeGustaGroupByArgs['orderBy'] }
        : { orderBy?: MeGustaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeGustaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeGustaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeGusta model
   */
  readonly fields: MeGustaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeGusta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeGustaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacion<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MeGusta model
   */
  interface MeGustaFieldRefs {
    readonly perfil_id: FieldRef<"MeGusta", 'String'>
    readonly publicacion_id: FieldRef<"MeGusta", 'String'>
    readonly fecha: FieldRef<"MeGusta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeGusta findUnique
   */
  export type MeGustaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter, which MeGusta to fetch.
     */
    where: MeGustaWhereUniqueInput
  }

  /**
   * MeGusta findUniqueOrThrow
   */
  export type MeGustaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter, which MeGusta to fetch.
     */
    where: MeGustaWhereUniqueInput
  }

  /**
   * MeGusta findFirst
   */
  export type MeGustaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter, which MeGusta to fetch.
     */
    where?: MeGustaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeGustas to fetch.
     */
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeGustas.
     */
    cursor?: MeGustaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeGustas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeGustas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeGustas.
     */
    distinct?: MeGustaScalarFieldEnum | MeGustaScalarFieldEnum[]
  }

  /**
   * MeGusta findFirstOrThrow
   */
  export type MeGustaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter, which MeGusta to fetch.
     */
    where?: MeGustaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeGustas to fetch.
     */
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeGustas.
     */
    cursor?: MeGustaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeGustas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeGustas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeGustas.
     */
    distinct?: MeGustaScalarFieldEnum | MeGustaScalarFieldEnum[]
  }

  /**
   * MeGusta findMany
   */
  export type MeGustaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter, which MeGustas to fetch.
     */
    where?: MeGustaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeGustas to fetch.
     */
    orderBy?: MeGustaOrderByWithRelationInput | MeGustaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeGustas.
     */
    cursor?: MeGustaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeGustas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeGustas.
     */
    skip?: number
    distinct?: MeGustaScalarFieldEnum | MeGustaScalarFieldEnum[]
  }

  /**
   * MeGusta create
   */
  export type MeGustaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * The data needed to create a MeGusta.
     */
    data: XOR<MeGustaCreateInput, MeGustaUncheckedCreateInput>
  }

  /**
   * MeGusta createMany
   */
  export type MeGustaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeGustas.
     */
    data: MeGustaCreateManyInput | MeGustaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeGusta createManyAndReturn
   */
  export type MeGustaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * The data used to create many MeGustas.
     */
    data: MeGustaCreateManyInput | MeGustaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeGusta update
   */
  export type MeGustaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * The data needed to update a MeGusta.
     */
    data: XOR<MeGustaUpdateInput, MeGustaUncheckedUpdateInput>
    /**
     * Choose, which MeGusta to update.
     */
    where: MeGustaWhereUniqueInput
  }

  /**
   * MeGusta updateMany
   */
  export type MeGustaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeGustas.
     */
    data: XOR<MeGustaUpdateManyMutationInput, MeGustaUncheckedUpdateManyInput>
    /**
     * Filter which MeGustas to update
     */
    where?: MeGustaWhereInput
    /**
     * Limit how many MeGustas to update.
     */
    limit?: number
  }

  /**
   * MeGusta updateManyAndReturn
   */
  export type MeGustaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * The data used to update MeGustas.
     */
    data: XOR<MeGustaUpdateManyMutationInput, MeGustaUncheckedUpdateManyInput>
    /**
     * Filter which MeGustas to update
     */
    where?: MeGustaWhereInput
    /**
     * Limit how many MeGustas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeGusta upsert
   */
  export type MeGustaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * The filter to search for the MeGusta to update in case it exists.
     */
    where: MeGustaWhereUniqueInput
    /**
     * In case the MeGusta found by the `where` argument doesn't exist, create a new MeGusta with this data.
     */
    create: XOR<MeGustaCreateInput, MeGustaUncheckedCreateInput>
    /**
     * In case the MeGusta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeGustaUpdateInput, MeGustaUncheckedUpdateInput>
  }

  /**
   * MeGusta delete
   */
  export type MeGustaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
    /**
     * Filter which MeGusta to delete.
     */
    where: MeGustaWhereUniqueInput
  }

  /**
   * MeGusta deleteMany
   */
  export type MeGustaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeGustas to delete
     */
    where?: MeGustaWhereInput
    /**
     * Limit how many MeGustas to delete.
     */
    limit?: number
  }

  /**
   * MeGusta without action
   */
  export type MeGustaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeGusta
     */
    select?: MeGustaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeGusta
     */
    omit?: MeGustaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeGustaInclude<ExtArgs> | null
  }


  /**
   * Model Seguidor
   */

  export type AggregateSeguidor = {
    _count: SeguidorCountAggregateOutputType | null
    _min: SeguidorMinAggregateOutputType | null
    _max: SeguidorMaxAggregateOutputType | null
  }

  export type SeguidorMinAggregateOutputType = {
    seguidor_id: string | null
    seguido_id: string | null
    fecha: Date | null
  }

  export type SeguidorMaxAggregateOutputType = {
    seguidor_id: string | null
    seguido_id: string | null
    fecha: Date | null
  }

  export type SeguidorCountAggregateOutputType = {
    seguidor_id: number
    seguido_id: number
    fecha: number
    _all: number
  }


  export type SeguidorMinAggregateInputType = {
    seguidor_id?: true
    seguido_id?: true
    fecha?: true
  }

  export type SeguidorMaxAggregateInputType = {
    seguidor_id?: true
    seguido_id?: true
    fecha?: true
  }

  export type SeguidorCountAggregateInputType = {
    seguidor_id?: true
    seguido_id?: true
    fecha?: true
    _all?: true
  }

  export type SeguidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguidor to aggregate.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seguidors
    **/
    _count?: true | SeguidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeguidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeguidorMaxAggregateInputType
  }

  export type GetSeguidorAggregateType<T extends SeguidorAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguidor[P]>
      : GetScalarType<T[P], AggregateSeguidor[P]>
  }




  export type SeguidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguidorWhereInput
    orderBy?: SeguidorOrderByWithAggregationInput | SeguidorOrderByWithAggregationInput[]
    by: SeguidorScalarFieldEnum[] | SeguidorScalarFieldEnum
    having?: SeguidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeguidorCountAggregateInputType | true
    _min?: SeguidorMinAggregateInputType
    _max?: SeguidorMaxAggregateInputType
  }

  export type SeguidorGroupByOutputType = {
    seguidor_id: string
    seguido_id: string
    fecha: Date
    _count: SeguidorCountAggregateOutputType | null
    _min: SeguidorMinAggregateOutputType | null
    _max: SeguidorMaxAggregateOutputType | null
  }

  type GetSeguidorGroupByPayload<T extends SeguidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeguidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeguidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeguidorGroupByOutputType[P]>
            : GetScalarType<T[P], SeguidorGroupByOutputType[P]>
        }
      >
    >


  export type SeguidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidor_id?: boolean
    seguido_id?: boolean
    fecha?: boolean
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidor_id?: boolean
    seguido_id?: boolean
    fecha?: boolean
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidor_id?: boolean
    seguido_id?: boolean
    fecha?: boolean
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguidor"]>

  export type SeguidorSelectScalar = {
    seguidor_id?: boolean
    seguido_id?: boolean
    fecha?: boolean
  }

  export type SeguidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seguidor_id" | "seguido_id" | "fecha", ExtArgs["result"]["seguidor"]>
  export type SeguidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SeguidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SeguidorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | ProfileDefaultArgs<ExtArgs>
    seguido?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SeguidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seguidor"
    objects: {
      seguidor: Prisma.$ProfilePayload<ExtArgs>
      seguido: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seguidor_id: string
      seguido_id: string
      fecha: Date
    }, ExtArgs["result"]["seguidor"]>
    composites: {}
  }

  type SeguidorGetPayload<S extends boolean | null | undefined | SeguidorDefaultArgs> = $Result.GetResult<Prisma.$SeguidorPayload, S>

  type SeguidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeguidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeguidorCountAggregateInputType | true
    }

  export interface SeguidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seguidor'], meta: { name: 'Seguidor' } }
    /**
     * Find zero or one Seguidor that matches the filter.
     * @param {SeguidorFindUniqueArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeguidorFindUniqueArgs>(args: SelectSubset<T, SeguidorFindUniqueArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seguidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeguidorFindUniqueOrThrowArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeguidorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeguidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindFirstArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeguidorFindFirstArgs>(args?: SelectSubset<T, SeguidorFindFirstArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindFirstOrThrowArgs} args - Arguments to find a Seguidor
     * @example
     * // Get one Seguidor
     * const seguidor = await prisma.seguidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeguidorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeguidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seguidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguidors
     * const seguidors = await prisma.seguidor.findMany()
     * 
     * // Get first 10 Seguidors
     * const seguidors = await prisma.seguidor.findMany({ take: 10 })
     * 
     * // Only select the `seguidor_id`
     * const seguidorWithSeguidor_idOnly = await prisma.seguidor.findMany({ select: { seguidor_id: true } })
     * 
     */
    findMany<T extends SeguidorFindManyArgs>(args?: SelectSubset<T, SeguidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seguidor.
     * @param {SeguidorCreateArgs} args - Arguments to create a Seguidor.
     * @example
     * // Create one Seguidor
     * const Seguidor = await prisma.seguidor.create({
     *   data: {
     *     // ... data to create a Seguidor
     *   }
     * })
     * 
     */
    create<T extends SeguidorCreateArgs>(args: SelectSubset<T, SeguidorCreateArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seguidors.
     * @param {SeguidorCreateManyArgs} args - Arguments to create many Seguidors.
     * @example
     * // Create many Seguidors
     * const seguidor = await prisma.seguidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeguidorCreateManyArgs>(args?: SelectSubset<T, SeguidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seguidors and returns the data saved in the database.
     * @param {SeguidorCreateManyAndReturnArgs} args - Arguments to create many Seguidors.
     * @example
     * // Create many Seguidors
     * const seguidor = await prisma.seguidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seguidors and only return the `seguidor_id`
     * const seguidorWithSeguidor_idOnly = await prisma.seguidor.createManyAndReturn({
     *   select: { seguidor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeguidorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeguidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seguidor.
     * @param {SeguidorDeleteArgs} args - Arguments to delete one Seguidor.
     * @example
     * // Delete one Seguidor
     * const Seguidor = await prisma.seguidor.delete({
     *   where: {
     *     // ... filter to delete one Seguidor
     *   }
     * })
     * 
     */
    delete<T extends SeguidorDeleteArgs>(args: SelectSubset<T, SeguidorDeleteArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seguidor.
     * @param {SeguidorUpdateArgs} args - Arguments to update one Seguidor.
     * @example
     * // Update one Seguidor
     * const seguidor = await prisma.seguidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeguidorUpdateArgs>(args: SelectSubset<T, SeguidorUpdateArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seguidors.
     * @param {SeguidorDeleteManyArgs} args - Arguments to filter Seguidors to delete.
     * @example
     * // Delete a few Seguidors
     * const { count } = await prisma.seguidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeguidorDeleteManyArgs>(args?: SelectSubset<T, SeguidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguidors
     * const seguidor = await prisma.seguidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeguidorUpdateManyArgs>(args: SelectSubset<T, SeguidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguidors and returns the data updated in the database.
     * @param {SeguidorUpdateManyAndReturnArgs} args - Arguments to update many Seguidors.
     * @example
     * // Update many Seguidors
     * const seguidor = await prisma.seguidor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seguidors and only return the `seguidor_id`
     * const seguidorWithSeguidor_idOnly = await prisma.seguidor.updateManyAndReturn({
     *   select: { seguidor_id: true },
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
    updateManyAndReturn<T extends SeguidorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeguidorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seguidor.
     * @param {SeguidorUpsertArgs} args - Arguments to update or create a Seguidor.
     * @example
     * // Update or create a Seguidor
     * const seguidor = await prisma.seguidor.upsert({
     *   create: {
     *     // ... data to create a Seguidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguidor we want to update
     *   }
     * })
     */
    upsert<T extends SeguidorUpsertArgs>(args: SelectSubset<T, SeguidorUpsertArgs<ExtArgs>>): Prisma__SeguidorClient<$Result.GetResult<Prisma.$SeguidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seguidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorCountArgs} args - Arguments to filter Seguidors to count.
     * @example
     * // Count the number of Seguidors
     * const count = await prisma.seguidor.count({
     *   where: {
     *     // ... the filter for the Seguidors we want to count
     *   }
     * })
    **/
    count<T extends SeguidorCountArgs>(
      args?: Subset<T, SeguidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeguidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeguidorAggregateArgs>(args: Subset<T, SeguidorAggregateArgs>): Prisma.PrismaPromise<GetSeguidorAggregateType<T>>

    /**
     * Group by Seguidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguidorGroupByArgs} args - Group by arguments.
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
      T extends SeguidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeguidorGroupByArgs['orderBy'] }
        : { orderBy?: SeguidorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeguidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seguidor model
   */
  readonly fields: SeguidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seguidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeguidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seguidor<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seguido<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seguidor model
   */
  interface SeguidorFieldRefs {
    readonly seguidor_id: FieldRef<"Seguidor", 'String'>
    readonly seguido_id: FieldRef<"Seguidor", 'String'>
    readonly fecha: FieldRef<"Seguidor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seguidor findUnique
   */
  export type SeguidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor findUniqueOrThrow
   */
  export type SeguidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor findFirst
   */
  export type SeguidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguidors.
     */
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor findFirstOrThrow
   */
  export type SeguidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidor to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguidors.
     */
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor findMany
   */
  export type SeguidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter, which Seguidors to fetch.
     */
    where?: SeguidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguidors to fetch.
     */
    orderBy?: SeguidorOrderByWithRelationInput | SeguidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seguidors.
     */
    cursor?: SeguidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguidors.
     */
    skip?: number
    distinct?: SeguidorScalarFieldEnum | SeguidorScalarFieldEnum[]
  }

  /**
   * Seguidor create
   */
  export type SeguidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Seguidor.
     */
    data: XOR<SeguidorCreateInput, SeguidorUncheckedCreateInput>
  }

  /**
   * Seguidor createMany
   */
  export type SeguidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seguidors.
     */
    data: SeguidorCreateManyInput | SeguidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seguidor createManyAndReturn
   */
  export type SeguidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * The data used to create many Seguidors.
     */
    data: SeguidorCreateManyInput | SeguidorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguidor update
   */
  export type SeguidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Seguidor.
     */
    data: XOR<SeguidorUpdateInput, SeguidorUncheckedUpdateInput>
    /**
     * Choose, which Seguidor to update.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor updateMany
   */
  export type SeguidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seguidors.
     */
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyInput>
    /**
     * Filter which Seguidors to update
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to update.
     */
    limit?: number
  }

  /**
   * Seguidor updateManyAndReturn
   */
  export type SeguidorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * The data used to update Seguidors.
     */
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyInput>
    /**
     * Filter which Seguidors to update
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguidor upsert
   */
  export type SeguidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Seguidor to update in case it exists.
     */
    where: SeguidorWhereUniqueInput
    /**
     * In case the Seguidor found by the `where` argument doesn't exist, create a new Seguidor with this data.
     */
    create: XOR<SeguidorCreateInput, SeguidorUncheckedCreateInput>
    /**
     * In case the Seguidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeguidorUpdateInput, SeguidorUncheckedUpdateInput>
  }

  /**
   * Seguidor delete
   */
  export type SeguidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
    /**
     * Filter which Seguidor to delete.
     */
    where: SeguidorWhereUniqueInput
  }

  /**
   * Seguidor deleteMany
   */
  export type SeguidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguidors to delete
     */
    where?: SeguidorWhereInput
    /**
     * Limit how many Seguidors to delete.
     */
    limit?: number
  }

  /**
   * Seguidor without action
   */
  export type SeguidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguidor
     */
    select?: SeguidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguidor
     */
    omit?: SeguidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguidorInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    proveedor: 'proveedor',
    uid_firebase: 'uid_firebase',
    creacion: 'creacion',
    perfil_id: 'perfil_id'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    nombre_usuario: 'nombre_usuario',
    nombre_completo: 'nombre_completo',
    foto_perfil: 'foto_perfil',
    biografia: 'biografia',
    sitio_web: 'sitio_web',
    creacion: 'creacion',
    fecha_actualizacion: 'fecha_actualizacion'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    imagen_url: 'imagen_url',
    creacion: 'creacion',
    editada: 'editada',
    fecha_edicion: 'fecha_edicion',
    contador_likes: 'contador_likes',
    contador_comentarios: 'contador_comentarios',
    contador_compartidos: 'contador_compartidos',
    perfil_id: 'perfil_id'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    leida: 'leida',
    fecha_creacion: 'fecha_creacion',
    perfil_id: 'perfil_id',
    emisor_id: 'emisor_id',
    publicacion_id: 'publicacion_id'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ConfiguracionUsuarioScalarFieldEnum: {
    perfil_id: 'perfil_id',
    perfil_publico: 'perfil_publico',
    recibir_notificaciones: 'recibir_notificaciones',
    tema_oscuro: 'tema_oscuro',
    idioma: 'idioma'
  };

  export type ConfiguracionUsuarioScalarFieldEnum = (typeof ConfiguracionUsuarioScalarFieldEnum)[keyof typeof ConfiguracionUsuarioScalarFieldEnum]


  export const MeGustaScalarFieldEnum: {
    perfil_id: 'perfil_id',
    publicacion_id: 'publicacion_id',
    fecha: 'fecha'
  };

  export type MeGustaScalarFieldEnum = (typeof MeGustaScalarFieldEnum)[keyof typeof MeGustaScalarFieldEnum]


  export const SeguidorScalarFieldEnum: {
    seguidor_id: 'seguidor_id',
    seguido_id: 'seguido_id',
    fecha: 'fecha'
  };

  export type SeguidorScalarFieldEnum = (typeof SeguidorScalarFieldEnum)[keyof typeof SeguidorScalarFieldEnum]


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    proveedor?: StringFilter<"Account"> | string
    uid_firebase?: StringNullableFilter<"Account"> | string | null
    creacion?: DateTimeFilter<"Account"> | Date | string
    perfil_id?: StringNullableFilter<"Account"> | string | null
    perfil?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proveedor?: SortOrder
    uid_firebase?: SortOrderInput | SortOrder
    creacion?: SortOrder
    perfil_id?: SortOrderInput | SortOrder
    perfil?: ProfileOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    perfil_id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    proveedor?: StringFilter<"Account"> | string
    uid_firebase?: StringNullableFilter<"Account"> | string | null
    creacion?: DateTimeFilter<"Account"> | Date | string
    perfil?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id" | "email" | "perfil_id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proveedor?: SortOrder
    uid_firebase?: SortOrderInput | SortOrder
    creacion?: SortOrder
    perfil_id?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    proveedor?: StringWithAggregatesFilter<"Account"> | string
    uid_firebase?: StringNullableWithAggregatesFilter<"Account"> | string | null
    creacion?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    perfil_id?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    nombre_usuario?: StringFilter<"Profile"> | string
    nombre_completo?: StringFilter<"Profile"> | string
    foto_perfil?: StringNullableFilter<"Profile"> | string | null
    biografia?: StringNullableFilter<"Profile"> | string | null
    sitio_web?: StringNullableFilter<"Profile"> | string | null
    creacion?: DateTimeFilter<"Profile"> | Date | string
    fecha_actualizacion?: DateTimeFilter<"Profile"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    posts?: PostListRelationFilter
    notificaciones_recibidas?: NotificationListRelationFilter
    notificaciones_enviadas?: NotificationListRelationFilter
    configuracion?: XOR<ConfiguracionUsuarioNullableScalarRelationFilter, ConfiguracionUsuarioWhereInput> | null
    me_gustas?: MeGustaListRelationFilter
    seguidores?: SeguidorListRelationFilter
    seguidos?: SeguidorListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    nombre_usuario?: SortOrder
    nombre_completo?: SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    sitio_web?: SortOrderInput | SortOrder
    creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    account?: AccountOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    notificaciones_recibidas?: NotificationOrderByRelationAggregateInput
    notificaciones_enviadas?: NotificationOrderByRelationAggregateInput
    configuracion?: ConfiguracionUsuarioOrderByWithRelationInput
    me_gustas?: MeGustaOrderByRelationAggregateInput
    seguidores?: SeguidorOrderByRelationAggregateInput
    seguidos?: SeguidorOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre_usuario?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    nombre_completo?: StringFilter<"Profile"> | string
    foto_perfil?: StringNullableFilter<"Profile"> | string | null
    biografia?: StringNullableFilter<"Profile"> | string | null
    sitio_web?: StringNullableFilter<"Profile"> | string | null
    creacion?: DateTimeFilter<"Profile"> | Date | string
    fecha_actualizacion?: DateTimeFilter<"Profile"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    posts?: PostListRelationFilter
    notificaciones_recibidas?: NotificationListRelationFilter
    notificaciones_enviadas?: NotificationListRelationFilter
    configuracion?: XOR<ConfiguracionUsuarioNullableScalarRelationFilter, ConfiguracionUsuarioWhereInput> | null
    me_gustas?: MeGustaListRelationFilter
    seguidores?: SeguidorListRelationFilter
    seguidos?: SeguidorListRelationFilter
  }, "id" | "nombre_usuario">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_usuario?: SortOrder
    nombre_completo?: SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    sitio_web?: SortOrderInput | SortOrder
    creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    nombre_usuario?: StringWithAggregatesFilter<"Profile"> | string
    nombre_completo?: StringWithAggregatesFilter<"Profile"> | string
    foto_perfil?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    biografia?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    sitio_web?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    creacion?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    fecha_actualizacion?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    contenido?: StringFilter<"Post"> | string
    imagen_url?: StringNullableFilter<"Post"> | string | null
    creacion?: DateTimeFilter<"Post"> | Date | string
    editada?: BoolFilter<"Post"> | boolean
    fecha_edicion?: DateTimeFilter<"Post"> | Date | string
    contador_likes?: IntFilter<"Post"> | number
    contador_comentarios?: IntFilter<"Post"> | number
    contador_compartidos?: IntFilter<"Post"> | number
    perfil_id?: StringFilter<"Post"> | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    me_gustas?: MeGustaListRelationFilter
    notificaciones?: NotificationListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
    creacion?: SortOrder
    editada?: SortOrder
    fecha_edicion?: SortOrder
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
    perfil_id?: SortOrder
    perfil?: ProfileOrderByWithRelationInput
    me_gustas?: MeGustaOrderByRelationAggregateInput
    notificaciones?: NotificationOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    contenido?: StringFilter<"Post"> | string
    imagen_url?: StringNullableFilter<"Post"> | string | null
    creacion?: DateTimeFilter<"Post"> | Date | string
    editada?: BoolFilter<"Post"> | boolean
    fecha_edicion?: DateTimeFilter<"Post"> | Date | string
    contador_likes?: IntFilter<"Post"> | number
    contador_comentarios?: IntFilter<"Post"> | number
    contador_compartidos?: IntFilter<"Post"> | number
    perfil_id?: StringFilter<"Post"> | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    me_gustas?: MeGustaListRelationFilter
    notificaciones?: NotificationListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    imagen_url?: SortOrderInput | SortOrder
    creacion?: SortOrder
    editada?: SortOrder
    fecha_edicion?: SortOrder
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
    perfil_id?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    contenido?: StringWithAggregatesFilter<"Post"> | string
    imagen_url?: StringNullableWithAggregatesFilter<"Post"> | string | null
    creacion?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    editada?: BoolWithAggregatesFilter<"Post"> | boolean
    fecha_edicion?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    contador_likes?: IntWithAggregatesFilter<"Post"> | number
    contador_comentarios?: IntWithAggregatesFilter<"Post"> | number
    contador_compartidos?: IntWithAggregatesFilter<"Post"> | number
    perfil_id?: StringWithAggregatesFilter<"Post"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    tipo?: StringFilter<"Notification"> | string
    leida?: BoolFilter<"Notification"> | boolean
    fecha_creacion?: DateTimeFilter<"Notification"> | Date | string
    perfil_id?: StringFilter<"Notification"> | string
    emisor_id?: StringFilter<"Notification"> | string
    publicacion_id?: StringNullableFilter<"Notification"> | string | null
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    emisor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    publicacion?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    leida?: SortOrder
    fecha_creacion?: SortOrder
    perfil_id?: SortOrder
    emisor_id?: SortOrder
    publicacion_id?: SortOrderInput | SortOrder
    perfil?: ProfileOrderByWithRelationInput
    emisor?: ProfileOrderByWithRelationInput
    publicacion?: PostOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    tipo?: StringFilter<"Notification"> | string
    leida?: BoolFilter<"Notification"> | boolean
    fecha_creacion?: DateTimeFilter<"Notification"> | Date | string
    perfil_id?: StringFilter<"Notification"> | string
    emisor_id?: StringFilter<"Notification"> | string
    publicacion_id?: StringNullableFilter<"Notification"> | string | null
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    emisor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    publicacion?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    leida?: SortOrder
    fecha_creacion?: SortOrder
    perfil_id?: SortOrder
    emisor_id?: SortOrder
    publicacion_id?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    tipo?: StringWithAggregatesFilter<"Notification"> | string
    leida?: BoolWithAggregatesFilter<"Notification"> | boolean
    fecha_creacion?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    perfil_id?: StringWithAggregatesFilter<"Notification"> | string
    emisor_id?: StringWithAggregatesFilter<"Notification"> | string
    publicacion_id?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type ConfiguracionUsuarioWhereInput = {
    AND?: ConfiguracionUsuarioWhereInput | ConfiguracionUsuarioWhereInput[]
    OR?: ConfiguracionUsuarioWhereInput[]
    NOT?: ConfiguracionUsuarioWhereInput | ConfiguracionUsuarioWhereInput[]
    perfil_id?: StringFilter<"ConfiguracionUsuario"> | string
    perfil_publico?: BoolFilter<"ConfiguracionUsuario"> | boolean
    recibir_notificaciones?: BoolFilter<"ConfiguracionUsuario"> | boolean
    tema_oscuro?: BoolFilter<"ConfiguracionUsuario"> | boolean
    idioma?: StringFilter<"ConfiguracionUsuario"> | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ConfiguracionUsuarioOrderByWithRelationInput = {
    perfil_id?: SortOrder
    perfil_publico?: SortOrder
    recibir_notificaciones?: SortOrder
    tema_oscuro?: SortOrder
    idioma?: SortOrder
    perfil?: ProfileOrderByWithRelationInput
  }

  export type ConfiguracionUsuarioWhereUniqueInput = Prisma.AtLeast<{
    perfil_id?: string
    AND?: ConfiguracionUsuarioWhereInput | ConfiguracionUsuarioWhereInput[]
    OR?: ConfiguracionUsuarioWhereInput[]
    NOT?: ConfiguracionUsuarioWhereInput | ConfiguracionUsuarioWhereInput[]
    perfil_publico?: BoolFilter<"ConfiguracionUsuario"> | boolean
    recibir_notificaciones?: BoolFilter<"ConfiguracionUsuario"> | boolean
    tema_oscuro?: BoolFilter<"ConfiguracionUsuario"> | boolean
    idioma?: StringFilter<"ConfiguracionUsuario"> | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "perfil_id">

  export type ConfiguracionUsuarioOrderByWithAggregationInput = {
    perfil_id?: SortOrder
    perfil_publico?: SortOrder
    recibir_notificaciones?: SortOrder
    tema_oscuro?: SortOrder
    idioma?: SortOrder
    _count?: ConfiguracionUsuarioCountOrderByAggregateInput
    _max?: ConfiguracionUsuarioMaxOrderByAggregateInput
    _min?: ConfiguracionUsuarioMinOrderByAggregateInput
  }

  export type ConfiguracionUsuarioScalarWhereWithAggregatesInput = {
    AND?: ConfiguracionUsuarioScalarWhereWithAggregatesInput | ConfiguracionUsuarioScalarWhereWithAggregatesInput[]
    OR?: ConfiguracionUsuarioScalarWhereWithAggregatesInput[]
    NOT?: ConfiguracionUsuarioScalarWhereWithAggregatesInput | ConfiguracionUsuarioScalarWhereWithAggregatesInput[]
    perfil_id?: StringWithAggregatesFilter<"ConfiguracionUsuario"> | string
    perfil_publico?: BoolWithAggregatesFilter<"ConfiguracionUsuario"> | boolean
    recibir_notificaciones?: BoolWithAggregatesFilter<"ConfiguracionUsuario"> | boolean
    tema_oscuro?: BoolWithAggregatesFilter<"ConfiguracionUsuario"> | boolean
    idioma?: StringWithAggregatesFilter<"ConfiguracionUsuario"> | string
  }

  export type MeGustaWhereInput = {
    AND?: MeGustaWhereInput | MeGustaWhereInput[]
    OR?: MeGustaWhereInput[]
    NOT?: MeGustaWhereInput | MeGustaWhereInput[]
    perfil_id?: StringFilter<"MeGusta"> | string
    publicacion_id?: StringFilter<"MeGusta"> | string
    fecha?: DateTimeFilter<"MeGusta"> | Date | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    publicacion?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type MeGustaOrderByWithRelationInput = {
    perfil_id?: SortOrder
    publicacion_id?: SortOrder
    fecha?: SortOrder
    perfil?: ProfileOrderByWithRelationInput
    publicacion?: PostOrderByWithRelationInput
  }

  export type MeGustaWhereUniqueInput = Prisma.AtLeast<{
    perfil_id_publicacion_id?: MeGustaPerfil_idPublicacion_idCompoundUniqueInput
    AND?: MeGustaWhereInput | MeGustaWhereInput[]
    OR?: MeGustaWhereInput[]
    NOT?: MeGustaWhereInput | MeGustaWhereInput[]
    perfil_id?: StringFilter<"MeGusta"> | string
    publicacion_id?: StringFilter<"MeGusta"> | string
    fecha?: DateTimeFilter<"MeGusta"> | Date | string
    perfil?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    publicacion?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "perfil_id_publicacion_id">

  export type MeGustaOrderByWithAggregationInput = {
    perfil_id?: SortOrder
    publicacion_id?: SortOrder
    fecha?: SortOrder
    _count?: MeGustaCountOrderByAggregateInput
    _max?: MeGustaMaxOrderByAggregateInput
    _min?: MeGustaMinOrderByAggregateInput
  }

  export type MeGustaScalarWhereWithAggregatesInput = {
    AND?: MeGustaScalarWhereWithAggregatesInput | MeGustaScalarWhereWithAggregatesInput[]
    OR?: MeGustaScalarWhereWithAggregatesInput[]
    NOT?: MeGustaScalarWhereWithAggregatesInput | MeGustaScalarWhereWithAggregatesInput[]
    perfil_id?: StringWithAggregatesFilter<"MeGusta"> | string
    publicacion_id?: StringWithAggregatesFilter<"MeGusta"> | string
    fecha?: DateTimeWithAggregatesFilter<"MeGusta"> | Date | string
  }

  export type SeguidorWhereInput = {
    AND?: SeguidorWhereInput | SeguidorWhereInput[]
    OR?: SeguidorWhereInput[]
    NOT?: SeguidorWhereInput | SeguidorWhereInput[]
    seguidor_id?: StringFilter<"Seguidor"> | string
    seguido_id?: StringFilter<"Seguidor"> | string
    fecha?: DateTimeFilter<"Seguidor"> | Date | string
    seguidor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    seguido?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type SeguidorOrderByWithRelationInput = {
    seguidor_id?: SortOrder
    seguido_id?: SortOrder
    fecha?: SortOrder
    seguidor?: ProfileOrderByWithRelationInput
    seguido?: ProfileOrderByWithRelationInput
  }

  export type SeguidorWhereUniqueInput = Prisma.AtLeast<{
    seguidor_id_seguido_id?: SeguidorSeguidor_idSeguido_idCompoundUniqueInput
    AND?: SeguidorWhereInput | SeguidorWhereInput[]
    OR?: SeguidorWhereInput[]
    NOT?: SeguidorWhereInput | SeguidorWhereInput[]
    seguidor_id?: StringFilter<"Seguidor"> | string
    seguido_id?: StringFilter<"Seguidor"> | string
    fecha?: DateTimeFilter<"Seguidor"> | Date | string
    seguidor?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    seguido?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "seguidor_id_seguido_id">

  export type SeguidorOrderByWithAggregationInput = {
    seguidor_id?: SortOrder
    seguido_id?: SortOrder
    fecha?: SortOrder
    _count?: SeguidorCountOrderByAggregateInput
    _max?: SeguidorMaxOrderByAggregateInput
    _min?: SeguidorMinOrderByAggregateInput
  }

  export type SeguidorScalarWhereWithAggregatesInput = {
    AND?: SeguidorScalarWhereWithAggregatesInput | SeguidorScalarWhereWithAggregatesInput[]
    OR?: SeguidorScalarWhereWithAggregatesInput[]
    NOT?: SeguidorScalarWhereWithAggregatesInput | SeguidorScalarWhereWithAggregatesInput[]
    seguidor_id?: StringWithAggregatesFilter<"Seguidor"> | string
    seguido_id?: StringWithAggregatesFilter<"Seguidor"> | string
    fecha?: DateTimeWithAggregatesFilter<"Seguidor"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    email: string
    password: string
    proveedor: string
    uid_firebase?: string | null
    creacion?: Date | string
    perfil?: ProfileCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    proveedor: string
    uid_firebase?: string | null
    creacion?: Date | string
    perfil_id?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    email: string
    password: string
    proveedor: string
    uid_firebase?: string | null
    creacion?: Date | string
    perfil_id?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil: ProfileCreateNestedOneWithoutPostsInput
    me_gustas?: MeGustaCreateNestedManyWithoutPublicacionInput
    notificaciones?: NotificationCreateNestedManyWithoutPublicacionInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil_id: string
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPublicacionInput
    notificaciones?: NotificationUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil?: ProfileUpdateOneRequiredWithoutPostsNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPublicacionNestedInput
    notificaciones?: NotificationUpdateManyWithoutPublicacionNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil_id?: StringFieldUpdateOperationsInput | string
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPublicacionNestedInput
    notificaciones?: NotificationUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil_id: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil_id?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil: ProfileCreateNestedOneWithoutNotificaciones_recibidasInput
    emisor: ProfileCreateNestedOneWithoutNotificaciones_enviadasInput
    publicacion?: PostCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    emisor_id: string
    publicacion_id?: string | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneRequiredWithoutNotificaciones_recibidasNestedInput
    emisor?: ProfileUpdateOneRequiredWithoutNotificaciones_enviadasNestedInput
    publicacion?: PostUpdateOneWithoutNotificacionesNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    emisor_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    emisor_id: string
    publicacion_id?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    emisor_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfiguracionUsuarioCreateInput = {
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: string
    perfil: ProfileCreateNestedOneWithoutConfiguracionInput
  }

  export type ConfiguracionUsuarioUncheckedCreateInput = {
    perfil_id: string
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: string
  }

  export type ConfiguracionUsuarioUpdateInput = {
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
    perfil?: ProfileUpdateOneRequiredWithoutConfiguracionNestedInput
  }

  export type ConfiguracionUsuarioUncheckedUpdateInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type ConfiguracionUsuarioCreateManyInput = {
    perfil_id: string
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: string
  }

  export type ConfiguracionUsuarioUpdateManyMutationInput = {
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type ConfiguracionUsuarioUncheckedUpdateManyInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type MeGustaCreateInput = {
    fecha?: Date | string
    perfil: ProfileCreateNestedOneWithoutMe_gustasInput
    publicacion: PostCreateNestedOneWithoutMe_gustasInput
  }

  export type MeGustaUncheckedCreateInput = {
    perfil_id: string
    publicacion_id: string
    fecha?: Date | string
  }

  export type MeGustaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneRequiredWithoutMe_gustasNestedInput
    publicacion?: PostUpdateOneRequiredWithoutMe_gustasNestedInput
  }

  export type MeGustaUncheckedUpdateInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeGustaCreateManyInput = {
    perfil_id: string
    publicacion_id: string
    fecha?: Date | string
  }

  export type MeGustaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeGustaUncheckedUpdateManyInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorCreateInput = {
    fecha?: Date | string
    seguidor: ProfileCreateNestedOneWithoutSeguidosInput
    seguido: ProfileCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguidorUncheckedCreateInput = {
    seguidor_id: string
    seguido_id: string
    fecha?: Date | string
  }

  export type SeguidorUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: ProfileUpdateOneRequiredWithoutSeguidosNestedInput
    seguido?: ProfileUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguidorUncheckedUpdateInput = {
    seguidor_id?: StringFieldUpdateOperationsInput | string
    seguido_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorCreateManyInput = {
    seguidor_id: string
    seguido_id: string
    fecha?: Date | string
  }

  export type SeguidorUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorUncheckedUpdateManyInput = {
    seguidor_id?: StringFieldUpdateOperationsInput | string
    seguido_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proveedor?: SortOrder
    uid_firebase?: SortOrder
    creacion?: SortOrder
    perfil_id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proveedor?: SortOrder
    uid_firebase?: SortOrder
    creacion?: SortOrder
    perfil_id?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    proveedor?: SortOrder
    uid_firebase?: SortOrder
    creacion?: SortOrder
    perfil_id?: SortOrder
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

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ConfiguracionUsuarioNullableScalarRelationFilter = {
    is?: ConfiguracionUsuarioWhereInput | null
    isNot?: ConfiguracionUsuarioWhereInput | null
  }

  export type MeGustaListRelationFilter = {
    every?: MeGustaWhereInput
    some?: MeGustaWhereInput
    none?: MeGustaWhereInput
  }

  export type SeguidorListRelationFilter = {
    every?: SeguidorWhereInput
    some?: SeguidorWhereInput
    none?: SeguidorWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeGustaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeguidorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_usuario?: SortOrder
    nombre_completo?: SortOrder
    foto_perfil?: SortOrder
    biografia?: SortOrder
    sitio_web?: SortOrder
    creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_usuario?: SortOrder
    nombre_completo?: SortOrder
    foto_perfil?: SortOrder
    biografia?: SortOrder
    sitio_web?: SortOrder
    creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_usuario?: SortOrder
    nombre_completo?: SortOrder
    foto_perfil?: SortOrder
    biografia?: SortOrder
    sitio_web?: SortOrder
    creacion?: SortOrder
    fecha_actualizacion?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    imagen_url?: SortOrder
    creacion?: SortOrder
    editada?: SortOrder
    fecha_edicion?: SortOrder
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
    perfil_id?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    imagen_url?: SortOrder
    creacion?: SortOrder
    editada?: SortOrder
    fecha_edicion?: SortOrder
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
    perfil_id?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    imagen_url?: SortOrder
    creacion?: SortOrder
    editada?: SortOrder
    fecha_edicion?: SortOrder
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
    perfil_id?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    contador_likes?: SortOrder
    contador_comentarios?: SortOrder
    contador_compartidos?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    leida?: SortOrder
    fecha_creacion?: SortOrder
    perfil_id?: SortOrder
    emisor_id?: SortOrder
    publicacion_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    leida?: SortOrder
    fecha_creacion?: SortOrder
    perfil_id?: SortOrder
    emisor_id?: SortOrder
    publicacion_id?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    leida?: SortOrder
    fecha_creacion?: SortOrder
    perfil_id?: SortOrder
    emisor_id?: SortOrder
    publicacion_id?: SortOrder
  }

  export type ConfiguracionUsuarioCountOrderByAggregateInput = {
    perfil_id?: SortOrder
    perfil_publico?: SortOrder
    recibir_notificaciones?: SortOrder
    tema_oscuro?: SortOrder
    idioma?: SortOrder
  }

  export type ConfiguracionUsuarioMaxOrderByAggregateInput = {
    perfil_id?: SortOrder
    perfil_publico?: SortOrder
    recibir_notificaciones?: SortOrder
    tema_oscuro?: SortOrder
    idioma?: SortOrder
  }

  export type ConfiguracionUsuarioMinOrderByAggregateInput = {
    perfil_id?: SortOrder
    perfil_publico?: SortOrder
    recibir_notificaciones?: SortOrder
    tema_oscuro?: SortOrder
    idioma?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type MeGustaPerfil_idPublicacion_idCompoundUniqueInput = {
    perfil_id: string
    publicacion_id: string
  }

  export type MeGustaCountOrderByAggregateInput = {
    perfil_id?: SortOrder
    publicacion_id?: SortOrder
    fecha?: SortOrder
  }

  export type MeGustaMaxOrderByAggregateInput = {
    perfil_id?: SortOrder
    publicacion_id?: SortOrder
    fecha?: SortOrder
  }

  export type MeGustaMinOrderByAggregateInput = {
    perfil_id?: SortOrder
    publicacion_id?: SortOrder
    fecha?: SortOrder
  }

  export type SeguidorSeguidor_idSeguido_idCompoundUniqueInput = {
    seguidor_id: string
    seguido_id: string
  }

  export type SeguidorCountOrderByAggregateInput = {
    seguidor_id?: SortOrder
    seguido_id?: SortOrder
    fecha?: SortOrder
  }

  export type SeguidorMaxOrderByAggregateInput = {
    seguidor_id?: SortOrder
    seguido_id?: SortOrder
    fecha?: SortOrder
  }

  export type SeguidorMinOrderByAggregateInput = {
    seguidor_id?: SortOrder
    seguido_id?: SortOrder
    fecha?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutAccountInput = {
    create?: XOR<ProfileCreateWithoutAccountInput, ProfileUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAccountInput
    connect?: ProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutAccountNestedInput = {
    create?: XOR<ProfileCreateWithoutAccountInput, ProfileUncheckedCreateWithoutAccountInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAccountInput
    upsert?: ProfileUpsertWithoutAccountInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAccountInput, ProfileUpdateWithoutAccountInput>, ProfileUncheckedUpdateWithoutAccountInput>
  }

  export type AccountCreateNestedOneWithoutPerfilInput = {
    create?: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPerfilInput
    connect?: AccountWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutPerfilInput = {
    create?: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput> | PostCreateWithoutPerfilInput[] | PostUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPerfilInput | PostCreateOrConnectWithoutPerfilInput[]
    createMany?: PostCreateManyPerfilInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPerfilInput = {
    create?: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput> | NotificationCreateWithoutPerfilInput[] | NotificationUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPerfilInput | NotificationCreateOrConnectWithoutPerfilInput[]
    createMany?: NotificationCreateManyPerfilInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutEmisorInput = {
    create?: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput> | NotificationCreateWithoutEmisorInput[] | NotificationUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmisorInput | NotificationCreateOrConnectWithoutEmisorInput[]
    createMany?: NotificationCreateManyEmisorInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput = {
    create?: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: ConfiguracionUsuarioCreateOrConnectWithoutPerfilInput
    connect?: ConfiguracionUsuarioWhereUniqueInput
  }

  export type MeGustaCreateNestedManyWithoutPerfilInput = {
    create?: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput> | MeGustaCreateWithoutPerfilInput[] | MeGustaUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPerfilInput | MeGustaCreateOrConnectWithoutPerfilInput[]
    createMany?: MeGustaCreateManyPerfilInputEnvelope
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
  }

  export type SeguidorCreateNestedManyWithoutSeguidoInput = {
    create?: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput> | SeguidorCreateWithoutSeguidoInput[] | SeguidorUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidoInput | SeguidorCreateOrConnectWithoutSeguidoInput[]
    createMany?: SeguidorCreateManySeguidoInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type SeguidorCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutPerfilInput = {
    create?: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPerfilInput
    connect?: AccountWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput> | PostCreateWithoutPerfilInput[] | PostUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPerfilInput | PostCreateOrConnectWithoutPerfilInput[]
    createMany?: PostCreateManyPerfilInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput> | NotificationCreateWithoutPerfilInput[] | NotificationUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPerfilInput | NotificationCreateOrConnectWithoutPerfilInput[]
    createMany?: NotificationCreateManyPerfilInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutEmisorInput = {
    create?: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput> | NotificationCreateWithoutEmisorInput[] | NotificationUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmisorInput | NotificationCreateOrConnectWithoutEmisorInput[]
    createMany?: NotificationCreateManyEmisorInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput = {
    create?: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: ConfiguracionUsuarioCreateOrConnectWithoutPerfilInput
    connect?: ConfiguracionUsuarioWhereUniqueInput
  }

  export type MeGustaUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput> | MeGustaCreateWithoutPerfilInput[] | MeGustaUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPerfilInput | MeGustaCreateOrConnectWithoutPerfilInput[]
    createMany?: MeGustaCreateManyPerfilInputEnvelope
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
  }

  export type SeguidorUncheckedCreateNestedManyWithoutSeguidoInput = {
    create?: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput> | SeguidorCreateWithoutSeguidoInput[] | SeguidorUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidoInput | SeguidorCreateOrConnectWithoutSeguidoInput[]
    createMany?: SeguidorCreateManySeguidoInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type SeguidorUncheckedCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
  }

  export type AccountUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPerfilInput
    upsert?: AccountUpsertWithoutPerfilInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPerfilInput, AccountUpdateWithoutPerfilInput>, AccountUncheckedUpdateWithoutPerfilInput>
  }

  export type PostUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput> | PostCreateWithoutPerfilInput[] | PostUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPerfilInput | PostCreateOrConnectWithoutPerfilInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPerfilInput | PostUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: PostCreateManyPerfilInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPerfilInput | PostUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPerfilInput | PostUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput> | NotificationCreateWithoutPerfilInput[] | NotificationUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPerfilInput | NotificationCreateOrConnectWithoutPerfilInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPerfilInput | NotificationUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: NotificationCreateManyPerfilInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPerfilInput | NotificationUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPerfilInput | NotificationUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput> | NotificationCreateWithoutEmisorInput[] | NotificationUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmisorInput | NotificationCreateOrConnectWithoutEmisorInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmisorInput | NotificationUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: NotificationCreateManyEmisorInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmisorInput | NotificationUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmisorInput | NotificationUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: ConfiguracionUsuarioCreateOrConnectWithoutPerfilInput
    upsert?: ConfiguracionUsuarioUpsertWithoutPerfilInput
    disconnect?: ConfiguracionUsuarioWhereInput | boolean
    delete?: ConfiguracionUsuarioWhereInput | boolean
    connect?: ConfiguracionUsuarioWhereUniqueInput
    update?: XOR<XOR<ConfiguracionUsuarioUpdateToOneWithWhereWithoutPerfilInput, ConfiguracionUsuarioUpdateWithoutPerfilInput>, ConfiguracionUsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type MeGustaUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput> | MeGustaCreateWithoutPerfilInput[] | MeGustaUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPerfilInput | MeGustaCreateOrConnectWithoutPerfilInput[]
    upsert?: MeGustaUpsertWithWhereUniqueWithoutPerfilInput | MeGustaUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: MeGustaCreateManyPerfilInputEnvelope
    set?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    disconnect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    delete?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    update?: MeGustaUpdateWithWhereUniqueWithoutPerfilInput | MeGustaUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: MeGustaUpdateManyWithWhereWithoutPerfilInput | MeGustaUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
  }

  export type SeguidorUpdateManyWithoutSeguidoNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput> | SeguidorCreateWithoutSeguidoInput[] | SeguidorUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidoInput | SeguidorCreateOrConnectWithoutSeguidoInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidoInput | SeguidorUpsertWithWhereUniqueWithoutSeguidoInput[]
    createMany?: SeguidorCreateManySeguidoInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidoInput | SeguidorUpdateWithWhereUniqueWithoutSeguidoInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidoInput | SeguidorUpdateManyWithWhereWithoutSeguidoInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type SeguidorUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidorInput | SeguidorUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidorInput | SeguidorUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidorInput | SeguidorUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPerfilInput
    upsert?: AccountUpsertWithoutPerfilInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPerfilInput, AccountUpdateWithoutPerfilInput>, AccountUncheckedUpdateWithoutPerfilInput>
  }

  export type PostUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput> | PostCreateWithoutPerfilInput[] | PostUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: PostCreateOrConnectWithoutPerfilInput | PostCreateOrConnectWithoutPerfilInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutPerfilInput | PostUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: PostCreateManyPerfilInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutPerfilInput | PostUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: PostUpdateManyWithWhereWithoutPerfilInput | PostUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput> | NotificationCreateWithoutPerfilInput[] | NotificationUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPerfilInput | NotificationCreateOrConnectWithoutPerfilInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPerfilInput | NotificationUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: NotificationCreateManyPerfilInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPerfilInput | NotificationUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPerfilInput | NotificationUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutEmisorNestedInput = {
    create?: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput> | NotificationCreateWithoutEmisorInput[] | NotificationUncheckedCreateWithoutEmisorInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmisorInput | NotificationCreateOrConnectWithoutEmisorInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmisorInput | NotificationUpsertWithWhereUniqueWithoutEmisorInput[]
    createMany?: NotificationCreateManyEmisorInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmisorInput | NotificationUpdateWithWhereUniqueWithoutEmisorInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmisorInput | NotificationUpdateManyWithWhereWithoutEmisorInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: ConfiguracionUsuarioCreateOrConnectWithoutPerfilInput
    upsert?: ConfiguracionUsuarioUpsertWithoutPerfilInput
    disconnect?: ConfiguracionUsuarioWhereInput | boolean
    delete?: ConfiguracionUsuarioWhereInput | boolean
    connect?: ConfiguracionUsuarioWhereUniqueInput
    update?: XOR<XOR<ConfiguracionUsuarioUpdateToOneWithWhereWithoutPerfilInput, ConfiguracionUsuarioUpdateWithoutPerfilInput>, ConfiguracionUsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type MeGustaUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput> | MeGustaCreateWithoutPerfilInput[] | MeGustaUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPerfilInput | MeGustaCreateOrConnectWithoutPerfilInput[]
    upsert?: MeGustaUpsertWithWhereUniqueWithoutPerfilInput | MeGustaUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: MeGustaCreateManyPerfilInputEnvelope
    set?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    disconnect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    delete?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    update?: MeGustaUpdateWithWhereUniqueWithoutPerfilInput | MeGustaUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: MeGustaUpdateManyWithWhereWithoutPerfilInput | MeGustaUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput> | SeguidorCreateWithoutSeguidoInput[] | SeguidorUncheckedCreateWithoutSeguidoInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidoInput | SeguidorCreateOrConnectWithoutSeguidoInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidoInput | SeguidorUpsertWithWhereUniqueWithoutSeguidoInput[]
    createMany?: SeguidorCreateManySeguidoInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidoInput | SeguidorUpdateWithWhereUniqueWithoutSeguidoInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidoInput | SeguidorUpdateManyWithWhereWithoutSeguidoInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput> | SeguidorCreateWithoutSeguidorInput[] | SeguidorUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguidorCreateOrConnectWithoutSeguidorInput | SeguidorCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguidorUpsertWithWhereUniqueWithoutSeguidorInput | SeguidorUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguidorCreateManySeguidorInputEnvelope
    set?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    disconnect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    delete?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    connect?: SeguidorWhereUniqueInput | SeguidorWhereUniqueInput[]
    update?: SeguidorUpdateWithWhereUniqueWithoutSeguidorInput | SeguidorUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguidorUpdateManyWithWhereWithoutSeguidorInput | SeguidorUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutPostsInput = {
    create?: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostsInput
    connect?: ProfileWhereUniqueInput
  }

  export type MeGustaCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput> | MeGustaCreateWithoutPublicacionInput[] | MeGustaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPublicacionInput | MeGustaCreateOrConnectWithoutPublicacionInput[]
    createMany?: MeGustaCreateManyPublicacionInputEnvelope
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput> | NotificationCreateWithoutPublicacionInput[] | NotificationUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPublicacionInput | NotificationCreateOrConnectWithoutPublicacionInput[]
    createMany?: NotificationCreateManyPublicacionInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MeGustaUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput> | MeGustaCreateWithoutPublicacionInput[] | MeGustaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPublicacionInput | MeGustaCreateOrConnectWithoutPublicacionInput[]
    createMany?: MeGustaCreateManyPublicacionInputEnvelope
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput> | NotificationCreateWithoutPublicacionInput[] | NotificationUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPublicacionInput | NotificationCreateOrConnectWithoutPublicacionInput[]
    createMany?: NotificationCreateManyPublicacionInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostsInput
    upsert?: ProfileUpsertWithoutPostsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPostsInput, ProfileUpdateWithoutPostsInput>, ProfileUncheckedUpdateWithoutPostsInput>
  }

  export type MeGustaUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput> | MeGustaCreateWithoutPublicacionInput[] | MeGustaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPublicacionInput | MeGustaCreateOrConnectWithoutPublicacionInput[]
    upsert?: MeGustaUpsertWithWhereUniqueWithoutPublicacionInput | MeGustaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: MeGustaCreateManyPublicacionInputEnvelope
    set?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    disconnect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    delete?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    update?: MeGustaUpdateWithWhereUniqueWithoutPublicacionInput | MeGustaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: MeGustaUpdateManyWithWhereWithoutPublicacionInput | MeGustaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput> | NotificationCreateWithoutPublicacionInput[] | NotificationUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPublicacionInput | NotificationCreateOrConnectWithoutPublicacionInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPublicacionInput | NotificationUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: NotificationCreateManyPublicacionInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPublicacionInput | NotificationUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPublicacionInput | NotificationUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MeGustaUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput> | MeGustaCreateWithoutPublicacionInput[] | MeGustaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: MeGustaCreateOrConnectWithoutPublicacionInput | MeGustaCreateOrConnectWithoutPublicacionInput[]
    upsert?: MeGustaUpsertWithWhereUniqueWithoutPublicacionInput | MeGustaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: MeGustaCreateManyPublicacionInputEnvelope
    set?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    disconnect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    delete?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    connect?: MeGustaWhereUniqueInput | MeGustaWhereUniqueInput[]
    update?: MeGustaUpdateWithWhereUniqueWithoutPublicacionInput | MeGustaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: MeGustaUpdateManyWithWhereWithoutPublicacionInput | MeGustaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput> | NotificationCreateWithoutPublicacionInput[] | NotificationUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPublicacionInput | NotificationCreateOrConnectWithoutPublicacionInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPublicacionInput | NotificationUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: NotificationCreateManyPublicacionInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPublicacionInput | NotificationUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPublicacionInput | NotificationUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutNotificaciones_recibidasInput = {
    create?: XOR<ProfileCreateWithoutNotificaciones_recibidasInput, ProfileUncheckedCreateWithoutNotificaciones_recibidasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificaciones_recibidasInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutNotificaciones_enviadasInput = {
    create?: XOR<ProfileCreateWithoutNotificaciones_enviadasInput, ProfileUncheckedCreateWithoutNotificaciones_enviadasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificaciones_enviadasInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<PostCreateWithoutNotificacionesInput, PostUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificacionesInput
    connect?: PostWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutNotificaciones_recibidasNestedInput = {
    create?: XOR<ProfileCreateWithoutNotificaciones_recibidasInput, ProfileUncheckedCreateWithoutNotificaciones_recibidasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificaciones_recibidasInput
    upsert?: ProfileUpsertWithoutNotificaciones_recibidasInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotificaciones_recibidasInput, ProfileUpdateWithoutNotificaciones_recibidasInput>, ProfileUncheckedUpdateWithoutNotificaciones_recibidasInput>
  }

  export type ProfileUpdateOneRequiredWithoutNotificaciones_enviadasNestedInput = {
    create?: XOR<ProfileCreateWithoutNotificaciones_enviadasInput, ProfileUncheckedCreateWithoutNotificaciones_enviadasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutNotificaciones_enviadasInput
    upsert?: ProfileUpsertWithoutNotificaciones_enviadasInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutNotificaciones_enviadasInput, ProfileUpdateWithoutNotificaciones_enviadasInput>, ProfileUncheckedUpdateWithoutNotificaciones_enviadasInput>
  }

  export type PostUpdateOneWithoutNotificacionesNestedInput = {
    create?: XOR<PostCreateWithoutNotificacionesInput, PostUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificacionesInput
    upsert?: PostUpsertWithoutNotificacionesInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutNotificacionesInput, PostUpdateWithoutNotificacionesInput>, PostUncheckedUpdateWithoutNotificacionesInput>
  }

  export type ProfileCreateNestedOneWithoutConfiguracionInput = {
    create?: XOR<ProfileCreateWithoutConfiguracionInput, ProfileUncheckedCreateWithoutConfiguracionInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutConfiguracionInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutConfiguracionNestedInput = {
    create?: XOR<ProfileCreateWithoutConfiguracionInput, ProfileUncheckedCreateWithoutConfiguracionInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutConfiguracionInput
    upsert?: ProfileUpsertWithoutConfiguracionInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutConfiguracionInput, ProfileUpdateWithoutConfiguracionInput>, ProfileUncheckedUpdateWithoutConfiguracionInput>
  }

  export type ProfileCreateNestedOneWithoutMe_gustasInput = {
    create?: XOR<ProfileCreateWithoutMe_gustasInput, ProfileUncheckedCreateWithoutMe_gustasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMe_gustasInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutMe_gustasInput = {
    create?: XOR<PostCreateWithoutMe_gustasInput, PostUncheckedCreateWithoutMe_gustasInput>
    connectOrCreate?: PostCreateOrConnectWithoutMe_gustasInput
    connect?: PostWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutMe_gustasNestedInput = {
    create?: XOR<ProfileCreateWithoutMe_gustasInput, ProfileUncheckedCreateWithoutMe_gustasInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMe_gustasInput
    upsert?: ProfileUpsertWithoutMe_gustasInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutMe_gustasInput, ProfileUpdateWithoutMe_gustasInput>, ProfileUncheckedUpdateWithoutMe_gustasInput>
  }

  export type PostUpdateOneRequiredWithoutMe_gustasNestedInput = {
    create?: XOR<PostCreateWithoutMe_gustasInput, PostUncheckedCreateWithoutMe_gustasInput>
    connectOrCreate?: PostCreateOrConnectWithoutMe_gustasInput
    upsert?: PostUpsertWithoutMe_gustasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutMe_gustasInput, PostUpdateWithoutMe_gustasInput>, PostUncheckedUpdateWithoutMe_gustasInput>
  }

  export type ProfileCreateNestedOneWithoutSeguidosInput = {
    create?: XOR<ProfileCreateWithoutSeguidosInput, ProfileUncheckedCreateWithoutSeguidosInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeguidosInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutSeguidoresInput = {
    create?: XOR<ProfileCreateWithoutSeguidoresInput, ProfileUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeguidoresInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutSeguidosNestedInput = {
    create?: XOR<ProfileCreateWithoutSeguidosInput, ProfileUncheckedCreateWithoutSeguidosInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeguidosInput
    upsert?: ProfileUpsertWithoutSeguidosInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSeguidosInput, ProfileUpdateWithoutSeguidosInput>, ProfileUncheckedUpdateWithoutSeguidosInput>
  }

  export type ProfileUpdateOneRequiredWithoutSeguidoresNestedInput = {
    create?: XOR<ProfileCreateWithoutSeguidoresInput, ProfileUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSeguidoresInput
    upsert?: ProfileUpsertWithoutSeguidoresInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSeguidoresInput, ProfileUpdateWithoutSeguidoresInput>, ProfileUncheckedUpdateWithoutSeguidoresInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type ProfileCreateWithoutAccountInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutAccountInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutAccountInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAccountInput, ProfileUncheckedCreateWithoutAccountInput>
  }

  export type ProfileUpsertWithoutAccountInput = {
    update: XOR<ProfileUpdateWithoutAccountInput, ProfileUncheckedUpdateWithoutAccountInput>
    create: XOR<ProfileCreateWithoutAccountInput, ProfileUncheckedCreateWithoutAccountInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAccountInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAccountInput, ProfileUncheckedUpdateWithoutAccountInput>
  }

  export type ProfileUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type AccountCreateWithoutPerfilInput = {
    id?: string
    email: string
    password: string
    proveedor: string
    uid_firebase?: string | null
    creacion?: Date | string
  }

  export type AccountUncheckedCreateWithoutPerfilInput = {
    id?: string
    email: string
    password: string
    proveedor: string
    uid_firebase?: string | null
    creacion?: Date | string
  }

  export type AccountCreateOrConnectWithoutPerfilInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
  }

  export type PostCreateWithoutPerfilInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    me_gustas?: MeGustaCreateNestedManyWithoutPublicacionInput
    notificaciones?: NotificationCreateNestedManyWithoutPublicacionInput
  }

  export type PostUncheckedCreateWithoutPerfilInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPublicacionInput
    notificaciones?: NotificationUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PostCreateOrConnectWithoutPerfilInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput>
  }

  export type PostCreateManyPerfilInputEnvelope = {
    data: PostCreateManyPerfilInput | PostCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPerfilInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    emisor: ProfileCreateNestedOneWithoutNotificaciones_enviadasInput
    publicacion?: PostCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificationUncheckedCreateWithoutPerfilInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    emisor_id: string
    publicacion_id?: string | null
  }

  export type NotificationCreateOrConnectWithoutPerfilInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput>
  }

  export type NotificationCreateManyPerfilInputEnvelope = {
    data: NotificationCreateManyPerfilInput | NotificationCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutEmisorInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil: ProfileCreateNestedOneWithoutNotificaciones_recibidasInput
    publicacion?: PostCreateNestedOneWithoutNotificacionesInput
  }

  export type NotificationUncheckedCreateWithoutEmisorInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    publicacion_id?: string | null
  }

  export type NotificationCreateOrConnectWithoutEmisorInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput>
  }

  export type NotificationCreateManyEmisorInputEnvelope = {
    data: NotificationCreateManyEmisorInput | NotificationCreateManyEmisorInput[]
    skipDuplicates?: boolean
  }

  export type ConfiguracionUsuarioCreateWithoutPerfilInput = {
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: string
  }

  export type ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput = {
    perfil_publico?: boolean
    recibir_notificaciones?: boolean
    tema_oscuro?: boolean
    idioma?: string
  }

  export type ConfiguracionUsuarioCreateOrConnectWithoutPerfilInput = {
    where: ConfiguracionUsuarioWhereUniqueInput
    create: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type MeGustaCreateWithoutPerfilInput = {
    fecha?: Date | string
    publicacion: PostCreateNestedOneWithoutMe_gustasInput
  }

  export type MeGustaUncheckedCreateWithoutPerfilInput = {
    publicacion_id: string
    fecha?: Date | string
  }

  export type MeGustaCreateOrConnectWithoutPerfilInput = {
    where: MeGustaWhereUniqueInput
    create: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput>
  }

  export type MeGustaCreateManyPerfilInputEnvelope = {
    data: MeGustaCreateManyPerfilInput | MeGustaCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type SeguidorCreateWithoutSeguidoInput = {
    fecha?: Date | string
    seguidor: ProfileCreateNestedOneWithoutSeguidosInput
  }

  export type SeguidorUncheckedCreateWithoutSeguidoInput = {
    seguidor_id: string
    fecha?: Date | string
  }

  export type SeguidorCreateOrConnectWithoutSeguidoInput = {
    where: SeguidorWhereUniqueInput
    create: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput>
  }

  export type SeguidorCreateManySeguidoInputEnvelope = {
    data: SeguidorCreateManySeguidoInput | SeguidorCreateManySeguidoInput[]
    skipDuplicates?: boolean
  }

  export type SeguidorCreateWithoutSeguidorInput = {
    fecha?: Date | string
    seguido: ProfileCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguidorUncheckedCreateWithoutSeguidorInput = {
    seguido_id: string
    fecha?: Date | string
  }

  export type SeguidorCreateOrConnectWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    create: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguidorCreateManySeguidorInputEnvelope = {
    data: SeguidorCreateManySeguidorInput | SeguidorCreateManySeguidorInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutPerfilInput = {
    update: XOR<AccountUpdateWithoutPerfilInput, AccountUncheckedUpdateWithoutPerfilInput>
    create: XOR<AccountCreateWithoutPerfilInput, AccountUncheckedCreateWithoutPerfilInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPerfilInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPerfilInput, AccountUncheckedUpdateWithoutPerfilInput>
  }

  export type AccountUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    proveedor?: StringFieldUpdateOperationsInput | string
    uid_firebase?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutPerfilInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutPerfilInput, PostUncheckedUpdateWithoutPerfilInput>
    create: XOR<PostCreateWithoutPerfilInput, PostUncheckedCreateWithoutPerfilInput>
  }

  export type PostUpdateWithWhereUniqueWithoutPerfilInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutPerfilInput, PostUncheckedUpdateWithoutPerfilInput>
  }

  export type PostUpdateManyWithWhereWithoutPerfilInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPerfilInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    contenido?: StringFilter<"Post"> | string
    imagen_url?: StringNullableFilter<"Post"> | string | null
    creacion?: DateTimeFilter<"Post"> | Date | string
    editada?: BoolFilter<"Post"> | boolean
    fecha_edicion?: DateTimeFilter<"Post"> | Date | string
    contador_likes?: IntFilter<"Post"> | number
    contador_comentarios?: IntFilter<"Post"> | number
    contador_compartidos?: IntFilter<"Post"> | number
    perfil_id?: StringFilter<"Post"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutPerfilInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPerfilInput, NotificationUncheckedUpdateWithoutPerfilInput>
    create: XOR<NotificationCreateWithoutPerfilInput, NotificationUncheckedCreateWithoutPerfilInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPerfilInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPerfilInput, NotificationUncheckedUpdateWithoutPerfilInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPerfilInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPerfilInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    tipo?: StringFilter<"Notification"> | string
    leida?: BoolFilter<"Notification"> | boolean
    fecha_creacion?: DateTimeFilter<"Notification"> | Date | string
    perfil_id?: StringFilter<"Notification"> | string
    emisor_id?: StringFilter<"Notification"> | string
    publicacion_id?: StringNullableFilter<"Notification"> | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutEmisorInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutEmisorInput, NotificationUncheckedUpdateWithoutEmisorInput>
    create: XOR<NotificationCreateWithoutEmisorInput, NotificationUncheckedCreateWithoutEmisorInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutEmisorInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutEmisorInput, NotificationUncheckedUpdateWithoutEmisorInput>
  }

  export type NotificationUpdateManyWithWhereWithoutEmisorInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutEmisorInput>
  }

  export type ConfiguracionUsuarioUpsertWithoutPerfilInput = {
    update: XOR<ConfiguracionUsuarioUpdateWithoutPerfilInput, ConfiguracionUsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<ConfiguracionUsuarioCreateWithoutPerfilInput, ConfiguracionUsuarioUncheckedCreateWithoutPerfilInput>
    where?: ConfiguracionUsuarioWhereInput
  }

  export type ConfiguracionUsuarioUpdateToOneWithWhereWithoutPerfilInput = {
    where?: ConfiguracionUsuarioWhereInput
    data: XOR<ConfiguracionUsuarioUpdateWithoutPerfilInput, ConfiguracionUsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type ConfiguracionUsuarioUpdateWithoutPerfilInput = {
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type ConfiguracionUsuarioUncheckedUpdateWithoutPerfilInput = {
    perfil_publico?: BoolFieldUpdateOperationsInput | boolean
    recibir_notificaciones?: BoolFieldUpdateOperationsInput | boolean
    tema_oscuro?: BoolFieldUpdateOperationsInput | boolean
    idioma?: StringFieldUpdateOperationsInput | string
  }

  export type MeGustaUpsertWithWhereUniqueWithoutPerfilInput = {
    where: MeGustaWhereUniqueInput
    update: XOR<MeGustaUpdateWithoutPerfilInput, MeGustaUncheckedUpdateWithoutPerfilInput>
    create: XOR<MeGustaCreateWithoutPerfilInput, MeGustaUncheckedCreateWithoutPerfilInput>
  }

  export type MeGustaUpdateWithWhereUniqueWithoutPerfilInput = {
    where: MeGustaWhereUniqueInput
    data: XOR<MeGustaUpdateWithoutPerfilInput, MeGustaUncheckedUpdateWithoutPerfilInput>
  }

  export type MeGustaUpdateManyWithWhereWithoutPerfilInput = {
    where: MeGustaScalarWhereInput
    data: XOR<MeGustaUpdateManyMutationInput, MeGustaUncheckedUpdateManyWithoutPerfilInput>
  }

  export type MeGustaScalarWhereInput = {
    AND?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
    OR?: MeGustaScalarWhereInput[]
    NOT?: MeGustaScalarWhereInput | MeGustaScalarWhereInput[]
    perfil_id?: StringFilter<"MeGusta"> | string
    publicacion_id?: StringFilter<"MeGusta"> | string
    fecha?: DateTimeFilter<"MeGusta"> | Date | string
  }

  export type SeguidorUpsertWithWhereUniqueWithoutSeguidoInput = {
    where: SeguidorWhereUniqueInput
    update: XOR<SeguidorUpdateWithoutSeguidoInput, SeguidorUncheckedUpdateWithoutSeguidoInput>
    create: XOR<SeguidorCreateWithoutSeguidoInput, SeguidorUncheckedCreateWithoutSeguidoInput>
  }

  export type SeguidorUpdateWithWhereUniqueWithoutSeguidoInput = {
    where: SeguidorWhereUniqueInput
    data: XOR<SeguidorUpdateWithoutSeguidoInput, SeguidorUncheckedUpdateWithoutSeguidoInput>
  }

  export type SeguidorUpdateManyWithWhereWithoutSeguidoInput = {
    where: SeguidorScalarWhereInput
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyWithoutSeguidoInput>
  }

  export type SeguidorScalarWhereInput = {
    AND?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
    OR?: SeguidorScalarWhereInput[]
    NOT?: SeguidorScalarWhereInput | SeguidorScalarWhereInput[]
    seguidor_id?: StringFilter<"Seguidor"> | string
    seguido_id?: StringFilter<"Seguidor"> | string
    fecha?: DateTimeFilter<"Seguidor"> | Date | string
  }

  export type SeguidorUpsertWithWhereUniqueWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    update: XOR<SeguidorUpdateWithoutSeguidorInput, SeguidorUncheckedUpdateWithoutSeguidorInput>
    create: XOR<SeguidorCreateWithoutSeguidorInput, SeguidorUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguidorUpdateWithWhereUniqueWithoutSeguidorInput = {
    where: SeguidorWhereUniqueInput
    data: XOR<SeguidorUpdateWithoutSeguidorInput, SeguidorUncheckedUpdateWithoutSeguidorInput>
  }

  export type SeguidorUpdateManyWithWhereWithoutSeguidorInput = {
    where: SeguidorScalarWhereInput
    data: XOR<SeguidorUpdateManyMutationInput, SeguidorUncheckedUpdateManyWithoutSeguidorInput>
  }

  export type ProfileCreateWithoutPostsInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutPostsInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutPostsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
  }

  export type MeGustaCreateWithoutPublicacionInput = {
    fecha?: Date | string
    perfil: ProfileCreateNestedOneWithoutMe_gustasInput
  }

  export type MeGustaUncheckedCreateWithoutPublicacionInput = {
    perfil_id: string
    fecha?: Date | string
  }

  export type MeGustaCreateOrConnectWithoutPublicacionInput = {
    where: MeGustaWhereUniqueInput
    create: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput>
  }

  export type MeGustaCreateManyPublicacionInputEnvelope = {
    data: MeGustaCreateManyPublicacionInput | MeGustaCreateManyPublicacionInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPublicacionInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil: ProfileCreateNestedOneWithoutNotificaciones_recibidasInput
    emisor: ProfileCreateNestedOneWithoutNotificaciones_enviadasInput
  }

  export type NotificationUncheckedCreateWithoutPublicacionInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    emisor_id: string
  }

  export type NotificationCreateOrConnectWithoutPublicacionInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput>
  }

  export type NotificationCreateManyPublicacionInputEnvelope = {
    data: NotificationCreateManyPublicacionInput | NotificationCreateManyPublicacionInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutPostsInput = {
    update: XOR<ProfileUpdateWithoutPostsInput, ProfileUncheckedUpdateWithoutPostsInput>
    create: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPostsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPostsInput, ProfileUncheckedUpdateWithoutPostsInput>
  }

  export type ProfileUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type MeGustaUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: MeGustaWhereUniqueInput
    update: XOR<MeGustaUpdateWithoutPublicacionInput, MeGustaUncheckedUpdateWithoutPublicacionInput>
    create: XOR<MeGustaCreateWithoutPublicacionInput, MeGustaUncheckedCreateWithoutPublicacionInput>
  }

  export type MeGustaUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: MeGustaWhereUniqueInput
    data: XOR<MeGustaUpdateWithoutPublicacionInput, MeGustaUncheckedUpdateWithoutPublicacionInput>
  }

  export type MeGustaUpdateManyWithWhereWithoutPublicacionInput = {
    where: MeGustaScalarWhereInput
    data: XOR<MeGustaUpdateManyMutationInput, MeGustaUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPublicacionInput, NotificationUncheckedUpdateWithoutPublicacionInput>
    create: XOR<NotificationCreateWithoutPublicacionInput, NotificationUncheckedCreateWithoutPublicacionInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPublicacionInput, NotificationUncheckedUpdateWithoutPublicacionInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPublicacionInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type ProfileCreateWithoutNotificaciones_recibidasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutNotificaciones_recibidasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutNotificaciones_recibidasInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotificaciones_recibidasInput, ProfileUncheckedCreateWithoutNotificaciones_recibidasInput>
  }

  export type ProfileCreateWithoutNotificaciones_enviadasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutNotificaciones_enviadasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutNotificaciones_enviadasInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutNotificaciones_enviadasInput, ProfileUncheckedCreateWithoutNotificaciones_enviadasInput>
  }

  export type PostCreateWithoutNotificacionesInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil: ProfileCreateNestedOneWithoutPostsInput
    me_gustas?: MeGustaCreateNestedManyWithoutPublicacionInput
  }

  export type PostUncheckedCreateWithoutNotificacionesInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil_id: string
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PostCreateOrConnectWithoutNotificacionesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutNotificacionesInput, PostUncheckedCreateWithoutNotificacionesInput>
  }

  export type ProfileUpsertWithoutNotificaciones_recibidasInput = {
    update: XOR<ProfileUpdateWithoutNotificaciones_recibidasInput, ProfileUncheckedUpdateWithoutNotificaciones_recibidasInput>
    create: XOR<ProfileCreateWithoutNotificaciones_recibidasInput, ProfileUncheckedCreateWithoutNotificaciones_recibidasInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotificaciones_recibidasInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotificaciones_recibidasInput, ProfileUncheckedUpdateWithoutNotificaciones_recibidasInput>
  }

  export type ProfileUpdateWithoutNotificaciones_recibidasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotificaciones_recibidasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUpsertWithoutNotificaciones_enviadasInput = {
    update: XOR<ProfileUpdateWithoutNotificaciones_enviadasInput, ProfileUncheckedUpdateWithoutNotificaciones_enviadasInput>
    create: XOR<ProfileCreateWithoutNotificaciones_enviadasInput, ProfileUncheckedCreateWithoutNotificaciones_enviadasInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutNotificaciones_enviadasInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutNotificaciones_enviadasInput, ProfileUncheckedUpdateWithoutNotificaciones_enviadasInput>
  }

  export type ProfileUpdateWithoutNotificaciones_enviadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutNotificaciones_enviadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type PostUpsertWithoutNotificacionesInput = {
    update: XOR<PostUpdateWithoutNotificacionesInput, PostUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<PostCreateWithoutNotificacionesInput, PostUncheckedCreateWithoutNotificacionesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutNotificacionesInput, PostUncheckedUpdateWithoutNotificacionesInput>
  }

  export type PostUpdateWithoutNotificacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil?: ProfileUpdateOneRequiredWithoutPostsNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPublicacionNestedInput
  }

  export type PostUncheckedUpdateWithoutNotificacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil_id?: StringFieldUpdateOperationsInput | string
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type ProfileCreateWithoutConfiguracionInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutConfiguracionInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutConfiguracionInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutConfiguracionInput, ProfileUncheckedCreateWithoutConfiguracionInput>
  }

  export type ProfileUpsertWithoutConfiguracionInput = {
    update: XOR<ProfileUpdateWithoutConfiguracionInput, ProfileUncheckedUpdateWithoutConfiguracionInput>
    create: XOR<ProfileCreateWithoutConfiguracionInput, ProfileUncheckedCreateWithoutConfiguracionInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutConfiguracionInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutConfiguracionInput, ProfileUncheckedUpdateWithoutConfiguracionInput>
  }

  export type ProfileUpdateWithoutConfiguracionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutConfiguracionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileCreateWithoutMe_gustasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutMe_gustasInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutMe_gustasInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutMe_gustasInput, ProfileUncheckedCreateWithoutMe_gustasInput>
  }

  export type PostCreateWithoutMe_gustasInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil: ProfileCreateNestedOneWithoutPostsInput
    notificaciones?: NotificationCreateNestedManyWithoutPublicacionInput
  }

  export type PostUncheckedCreateWithoutMe_gustasInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
    perfil_id: string
    notificaciones?: NotificationUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PostCreateOrConnectWithoutMe_gustasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMe_gustasInput, PostUncheckedCreateWithoutMe_gustasInput>
  }

  export type ProfileUpsertWithoutMe_gustasInput = {
    update: XOR<ProfileUpdateWithoutMe_gustasInput, ProfileUncheckedUpdateWithoutMe_gustasInput>
    create: XOR<ProfileCreateWithoutMe_gustasInput, ProfileUncheckedCreateWithoutMe_gustasInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutMe_gustasInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutMe_gustasInput, ProfileUncheckedUpdateWithoutMe_gustasInput>
  }

  export type ProfileUpdateWithoutMe_gustasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutMe_gustasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type PostUpsertWithoutMe_gustasInput = {
    update: XOR<PostUpdateWithoutMe_gustasInput, PostUncheckedUpdateWithoutMe_gustasInput>
    create: XOR<PostCreateWithoutMe_gustasInput, PostUncheckedCreateWithoutMe_gustasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutMe_gustasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutMe_gustasInput, PostUncheckedUpdateWithoutMe_gustasInput>
  }

  export type PostUpdateWithoutMe_gustasInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil?: ProfileUpdateOneRequiredWithoutPostsNestedInput
    notificaciones?: NotificationUpdateManyWithoutPublicacionNestedInput
  }

  export type PostUncheckedUpdateWithoutMe_gustasInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    perfil_id?: StringFieldUpdateOperationsInput | string
    notificaciones?: NotificationUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type ProfileCreateWithoutSeguidosInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorCreateNestedManyWithoutSeguidoInput
  }

  export type ProfileUncheckedCreateWithoutSeguidosInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidores?: SeguidorUncheckedCreateNestedManyWithoutSeguidoInput
  }

  export type ProfileCreateOrConnectWithoutSeguidosInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSeguidosInput, ProfileUncheckedCreateWithoutSeguidosInput>
  }

  export type ProfileCreateWithoutSeguidoresInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountCreateNestedOneWithoutPerfilInput
    posts?: PostCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaCreateNestedManyWithoutPerfilInput
    seguidos?: SeguidorCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileUncheckedCreateWithoutSeguidoresInput = {
    id?: string
    nombre_usuario: string
    nombre_completo: string
    foto_perfil?: string | null
    biografia?: string | null
    sitio_web?: string | null
    creacion?: Date | string
    fecha_actualizacion?: Date | string
    account?: AccountUncheckedCreateNestedOneWithoutPerfilInput
    posts?: PostUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_recibidas?: NotificationUncheckedCreateNestedManyWithoutPerfilInput
    notificaciones_enviadas?: NotificationUncheckedCreateNestedManyWithoutEmisorInput
    configuracion?: ConfiguracionUsuarioUncheckedCreateNestedOneWithoutPerfilInput
    me_gustas?: MeGustaUncheckedCreateNestedManyWithoutPerfilInput
    seguidos?: SeguidorUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type ProfileCreateOrConnectWithoutSeguidoresInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSeguidoresInput, ProfileUncheckedCreateWithoutSeguidoresInput>
  }

  export type ProfileUpsertWithoutSeguidosInput = {
    update: XOR<ProfileUpdateWithoutSeguidosInput, ProfileUncheckedUpdateWithoutSeguidosInput>
    create: XOR<ProfileCreateWithoutSeguidosInput, ProfileUncheckedCreateWithoutSeguidosInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSeguidosInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSeguidosInput, ProfileUncheckedUpdateWithoutSeguidosInput>
  }

  export type ProfileUpdateWithoutSeguidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUpdateManyWithoutSeguidoNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSeguidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidores?: SeguidorUncheckedUpdateManyWithoutSeguidoNestedInput
  }

  export type ProfileUpsertWithoutSeguidoresInput = {
    update: XOR<ProfileUpdateWithoutSeguidoresInput, ProfileUncheckedUpdateWithoutSeguidoresInput>
    create: XOR<ProfileCreateWithoutSeguidoresInput, ProfileUncheckedCreateWithoutSeguidoresInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSeguidoresInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSeguidoresInput, ProfileUncheckedUpdateWithoutSeguidoresInput>
  }

  export type ProfileUpdateWithoutSeguidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutPerfilNestedInput
    posts?: PostUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUpdateManyWithoutPerfilNestedInput
    seguidos?: SeguidorUpdateManyWithoutSeguidorNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSeguidoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    sitio_web?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateOneWithoutPerfilNestedInput
    posts?: PostUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_recibidas?: NotificationUncheckedUpdateManyWithoutPerfilNestedInput
    notificaciones_enviadas?: NotificationUncheckedUpdateManyWithoutEmisorNestedInput
    configuracion?: ConfiguracionUsuarioUncheckedUpdateOneWithoutPerfilNestedInput
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPerfilNestedInput
    seguidos?: SeguidorUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type PostCreateManyPerfilInput = {
    id?: string
    contenido: string
    imagen_url?: string | null
    creacion?: Date | string
    editada?: boolean
    fecha_edicion?: Date | string
    contador_likes?: number
    contador_comentarios?: number
    contador_compartidos?: number
  }

  export type NotificationCreateManyPerfilInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    emisor_id: string
    publicacion_id?: string | null
  }

  export type NotificationCreateManyEmisorInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    publicacion_id?: string | null
  }

  export type MeGustaCreateManyPerfilInput = {
    publicacion_id: string
    fecha?: Date | string
  }

  export type SeguidorCreateManySeguidoInput = {
    seguidor_id: string
    fecha?: Date | string
  }

  export type SeguidorCreateManySeguidorInput = {
    seguido_id: string
    fecha?: Date | string
  }

  export type PostUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    me_gustas?: MeGustaUpdateManyWithoutPublicacionNestedInput
    notificaciones?: NotificationUpdateManyWithoutPublicacionNestedInput
  }

  export type PostUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
    me_gustas?: MeGustaUncheckedUpdateManyWithoutPublicacionNestedInput
    notificaciones?: NotificationUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    editada?: BoolFieldUpdateOperationsInput | boolean
    fecha_edicion?: DateTimeFieldUpdateOperationsInput | Date | string
    contador_likes?: IntFieldUpdateOperationsInput | number
    contador_comentarios?: IntFieldUpdateOperationsInput | number
    contador_compartidos?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor?: ProfileUpdateOneRequiredWithoutNotificaciones_enviadasNestedInput
    publicacion?: PostUpdateOneWithoutNotificacionesNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutPerfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    emisor_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutEmisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneRequiredWithoutNotificaciones_recibidasNestedInput
    publicacion?: PostUpdateOneWithoutNotificacionesNestedInput
  }

  export type NotificationUncheckedUpdateWithoutEmisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutEmisorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    publicacion_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeGustaUpdateWithoutPerfilInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PostUpdateOneRequiredWithoutMe_gustasNestedInput
  }

  export type MeGustaUncheckedUpdateWithoutPerfilInput = {
    publicacion_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeGustaUncheckedUpdateManyWithoutPerfilInput = {
    publicacion_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorUpdateWithoutSeguidoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: ProfileUpdateOneRequiredWithoutSeguidosNestedInput
  }

  export type SeguidorUncheckedUpdateWithoutSeguidoInput = {
    seguidor_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidoInput = {
    seguidor_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorUpdateWithoutSeguidorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    seguido?: ProfileUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguidorUncheckedUpdateWithoutSeguidorInput = {
    seguido_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguidorUncheckedUpdateManyWithoutSeguidorInput = {
    seguido_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeGustaCreateManyPublicacionInput = {
    perfil_id: string
    fecha?: Date | string
  }

  export type NotificationCreateManyPublicacionInput = {
    id?: string
    tipo: string
    leida?: boolean
    fecha_creacion?: Date | string
    perfil_id: string
    emisor_id: string
  }

  export type MeGustaUpdateWithoutPublicacionInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneRequiredWithoutMe_gustasNestedInput
  }

  export type MeGustaUncheckedUpdateWithoutPublicacionInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeGustaUncheckedUpdateManyWithoutPublicacionInput = {
    perfil_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: ProfileUpdateOneRequiredWithoutNotificaciones_recibidasNestedInput
    emisor?: ProfileUpdateOneRequiredWithoutNotificaciones_enviadasNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    emisor_id?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUncheckedUpdateManyWithoutPublicacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    leida?: BoolFieldUpdateOperationsInput | boolean
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil_id?: StringFieldUpdateOperationsInput | string
    emisor_id?: StringFieldUpdateOperationsInput | string
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