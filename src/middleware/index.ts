import { Context, Next } from "koa";

async function coreMiddleware(ctx: Context, next: Next) {
  ctx.ipv4 = function () {
    return ctx.ip.replace(/^::ffff:/, "").replace(/^::1/, "127.0.0.1");
  };
  console.log("-------------请求收到！-------------");
  console.log(ctx.request.url);
  // console.log('请求参数！');
  // console.log(ctx.request);

  try {
    await next();
  } catch (e: any) {
    console.log(e);
    console.log("》》》》》》》》》》请求出错！《《《《《《《《");
    console.log(e.message);
    ctx.status = e.status || 500;
    ctx.body = { code: 900000, msg: e.message };
  }
  console.log("==================请求结果！=================");
  console.log(ctx.body);
}
async function errhandle(ctx: Context, next: Next) {
  try {
    await next();
  } catch (error: any) {
    console.error("Error Handler:", error);
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = error.message || "Internal Server Error";
  }
}
export { coreMiddleware,errhandle };
