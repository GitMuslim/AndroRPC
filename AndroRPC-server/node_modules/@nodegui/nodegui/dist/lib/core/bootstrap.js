"use strict";
/*
    From: https://github.com/yue/yode/blob/master/src/bootstrap.js
    setImmediate and process.nextTick makes use of uv_check and uv_prepare to
    run the callbacks, however since we only run uv loop on requests, the
    callbacks wouldn't be called until something else activated the uv loop,
    which would delay the callbacks for arbitrary long time. So we should
    initiatively activate the uv loop once setImmediate and process.nextTick is
    called.
    This is required inorder to make the timers work nicely due to merger of event loops
*/
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utils/helpers");
function main() {
    process.nextTick = helpers_1.wrapWithActivateUvLoop(process.nextTick);
    global.setImmediate = helpers_1.wrapWithActivateUvLoop(global.setImmediate);
    global.setTimeout = helpers_1.wrapWithActivateUvLoop(global.setTimeout);
    global.setInterval = helpers_1.wrapWithActivateUvLoop(global.setInterval);
}
main();
