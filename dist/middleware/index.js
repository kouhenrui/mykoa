"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errhandle = exports.coreMiddleware = void 0;
function coreMiddleware(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.ipv4 = function () {
            return ctx.ip.replace(/^::ffff:/, "").replace(/^::1/, "127.0.0.1");
        };
        console.log("-------------请求收到！-------------");
        console.log(ctx.request.url);
        // console.log('请求参数！');
        // console.log(ctx.request);
        try {
            yield next();
        }
        catch (e) {
            console.log(e);
            console.log("》》》》》》》》》》请求出错！《《《《《《《《");
            console.log(e.message);
            ctx.status = e.status || 500;
            ctx.body = { code: 900000, msg: e.message };
        }
        console.log("==================请求结果！=================");
        console.log(ctx.body);
    });
}
exports.coreMiddleware = coreMiddleware;
function errhandle(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield next();
        }
        catch (error) {
            console.error("Error Handler:", error);
            ctx.status = error.statusCode || error.status || 500;
            ctx.body = error.message || "Internal Server Error";
        }
    });
}
exports.errhandle = errhandle;
//# sourceMappingURL=index.js.map