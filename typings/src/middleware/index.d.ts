import { Context, Next } from "koa";
declare function coreMiddleware(ctx: Context, next: Next): Promise<void>;
declare function errhandle(ctx: Context, next: Next): Promise<void>;
export { coreMiddleware, errhandle };
