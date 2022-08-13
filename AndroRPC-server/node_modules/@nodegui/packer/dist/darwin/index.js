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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pack = exports.init = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const helpers_1 = require("./helpers");
function init(appName) {
    return __awaiter(this, void 0, void 0, function* () {
        const templateDirectory = path_1.default.resolve(__dirname, "../../template/darwin");
        const templateApp = path_1.default.resolve(helpers_1.usertemplateDir, `${appName}.app`);
        yield fs_extra_1.default.mkdirp(path_1.default.resolve(helpers_1.usertemplateDir, templateApp));
        yield fs_extra_1.default.copy(templateDirectory, templateApp, { recursive: true });
        const config = { appName };
        yield fs_extra_1.default.writeJSON(helpers_1.configFile, config);
        yield (0, helpers_1.fixupTemplateApp)(config, templateApp);
    });
}
exports.init = init;
function pack(distPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = yield fs_extra_1.default.readJSON(path_1.default.resolve(helpers_1.deployDirectory, "config.json"));
        const { appName } = config;
        const templateAppDir = path_1.default.resolve(helpers_1.usertemplateDir, `${appName}.app`);
        const buildAppPackage = path_1.default.resolve(helpers_1.buildDir, `${appName}.app`);
        const Contents = path_1.default.resolve(buildAppPackage, "Contents");
        const MacOs = path_1.default.resolve(Contents, "MacOS");
        const resourceDir = path_1.default.resolve(Contents, "Resources");
        console.log(`cleaning build directory at ${helpers_1.buildDir}`);
        yield fs_extra_1.default.remove(helpers_1.buildDir);
        console.log(`creating build directory at ${helpers_1.buildDir}`);
        yield fs_extra_1.default.copy(templateAppDir, buildAppPackage, { recursive: true });
        console.log(`copying qode`);
        yield (0, helpers_1.copyQode)(MacOs);
        console.log(`copying dist`);
        yield (0, helpers_1.copyAppDist)(distPath, resourceDir);
        console.log(`running macdeployqt`);
        yield (0, helpers_1.runMacDeployQt)({ appName, buildDir: helpers_1.buildDir, resourceDir });
        console.log(`Build successful. Find the app at ${helpers_1.buildDir}`);
    });
}
exports.pack = pack;
//# sourceMappingURL=index.js.map