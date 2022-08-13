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
exports.fixupTemplateApp = exports.runMacDeployQt = exports.copyAppDist = exports.copyQode = exports.buildDir = exports.usertemplateDir = exports.configFile = exports.deployDirectory = void 0;
const child_process_1 = require("child_process");
const plist_1 = __importDefault(require("plist"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//@ts-ignore
const qode_1 = __importDefault(require("@nodegui/qode"));
//@ts-ignore
const qtConfig_1 = require("@nodegui/nodegui/config/qtConfig");
const cwd = process.cwd();
exports.deployDirectory = path_1.default.resolve(cwd, "deploy");
exports.configFile = path_1.default.resolve(exports.deployDirectory, "config.json");
exports.usertemplateDir = path_1.default.resolve(exports.deployDirectory, "darwin");
exports.buildDir = path_1.default.resolve(exports.usertemplateDir, "build");
function getAllNodeAddons(dirPath) {
    const addonExt = "node";
    let dir = fs_extra_1.default.readdirSync(dirPath);
    return dir
        .filter((elm) => elm.match(new RegExp(`.*\.(${addonExt}$)`, "ig")))
        .map((eachElement) => path_1.default.resolve(dirPath, eachElement));
}
function addonCommands(addonPaths) {
    return addonPaths.reduce((commandList, currentAddon) => {
        commandList.push(`-executable=${currentAddon}`);
        return commandList;
    }, []);
}
function copyQode(dest) {
    return __awaiter(this, void 0, void 0, function* () {
        const qodeBinaryFile = qode_1.default.qodePath;
        yield fs_extra_1.default.chmod(qodeBinaryFile, "755");
        yield fs_extra_1.default.copyFile(qodeBinaryFile, path_1.default.resolve(dest, "qode"));
    });
}
exports.copyQode = copyQode;
function copyAppDist(distPath, resourceDir) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs_extra_1.default.copy(distPath, path_1.default.resolve(resourceDir, "dist"), {
            recursive: true,
        });
    });
}
exports.copyAppDist = copyAppDist;
function runMacDeployQt({ appName, buildDir, resourceDir, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const macDeployQtBin = path_1.default.resolve(qtConfig_1.qtHome, "bin", "macdeployqt");
        try {
            yield fs_extra_1.default.chmod(macDeployQtBin, "755");
        }
        catch (err) {
            console.warn(`Warning: Tried to fix permission for macdeployqt but failed`);
        }
        const distPath = path_1.default.resolve(resourceDir, "dist");
        const allAddons = getAllNodeAddons(distPath);
        const options = [
            `${appName}.app`,
            "-verbose=3",
            `-libpath=${qode_1.default.qtHome}`,
            "-dmg",
            ...addonCommands(allAddons),
        ];
        const macDeployQt = (0, child_process_1.spawn)(macDeployQtBin, options, { cwd: buildDir });
        return new Promise((resolve, reject) => {
            macDeployQt.stdout.on("data", function (data) {
                console.log("stdout: " + data.toString());
            });
            macDeployQt.stderr.on("data", function (data) {
                console.log("stderr: " + data.toString());
            });
            macDeployQt.on("exit", function (code) {
                if (!code) {
                    return resolve(true);
                }
                return reject("child process exited with code " + code);
            });
        });
    });
}
exports.runMacDeployQt = runMacDeployQt;
function fixupTemplateApp(config, templateAppPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const infoPlistPath = path_1.default.resolve(templateAppPath, "Contents", "Info.plist");
        const infoPlist = yield fs_extra_1.default.readFile(infoPlistPath, { encoding: "utf-8" });
        const infoPlistParsed = plist_1.default.parse(infoPlist);
        infoPlistParsed.CFBundleName = config.appName;
        yield fs_extra_1.default.writeFile(infoPlistPath, plist_1.default.build(infoPlistParsed));
    });
}
exports.fixupTemplateApp = fixupTemplateApp;
//# sourceMappingURL=helpers.js.map