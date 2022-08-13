"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSizePolicyPolicy = exports.QSizePolicyPolicyFlag = void 0;
var QSizePolicyPolicyFlag;
(function (QSizePolicyPolicyFlag) {
    QSizePolicyPolicyFlag[QSizePolicyPolicyFlag["GrowFlag"] = 1] = "GrowFlag";
    QSizePolicyPolicyFlag[QSizePolicyPolicyFlag["ExpandFlag"] = 2] = "ExpandFlag";
    QSizePolicyPolicyFlag[QSizePolicyPolicyFlag["ShrinkFlag"] = 4] = "ShrinkFlag";
    QSizePolicyPolicyFlag[QSizePolicyPolicyFlag["IgnoreFlag"] = 8] = "IgnoreFlag";
})(QSizePolicyPolicyFlag = exports.QSizePolicyPolicyFlag || (exports.QSizePolicyPolicyFlag = {}));
var QSizePolicyPolicy;
(function (QSizePolicyPolicy) {
    QSizePolicyPolicy[QSizePolicyPolicy["Fixed"] = 0] = "Fixed";
    QSizePolicyPolicy[QSizePolicyPolicy["Minimum"] = 1] = "Minimum";
    QSizePolicyPolicy[QSizePolicyPolicy["Maximum"] = 4] = "Maximum";
    QSizePolicyPolicy[QSizePolicyPolicy["Preferred"] = 5] = "Preferred";
    QSizePolicyPolicy[QSizePolicyPolicy["Expanding"] = 7] = "Expanding";
    QSizePolicyPolicy[QSizePolicyPolicy["MinimumExpanding"] = 3] = "MinimumExpanding";
    QSizePolicyPolicy[QSizePolicyPolicy["Ignored"] = 13] = "Ignored";
})(QSizePolicyPolicy = exports.QSizePolicyPolicy || (exports.QSizePolicyPolicy = {}));
