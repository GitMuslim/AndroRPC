"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionType = void 0;
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["AutoConnection"] = 0] = "AutoConnection";
    ConnectionType[ConnectionType["DirectConnection"] = 1] = "DirectConnection";
    ConnectionType[ConnectionType["QueuedConnection"] = 2] = "QueuedConnection";
    ConnectionType[ConnectionType["BlockingQueuedConnection"] = 3] = "BlockingQueuedConnection";
    ConnectionType[ConnectionType["UniqueConnection"] = 128] = "UniqueConnection";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
