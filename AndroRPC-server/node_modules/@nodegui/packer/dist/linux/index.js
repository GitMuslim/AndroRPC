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
const child_process_1 = require("child_process");
//@ts-ignore
const qode_1 = __importDefault(require("@nodegui/qode"));
//@ts-ignore
const qtConfig_1 = require("@nodegui/nodegui/config/qtConfig");
const cwd = process.cwd();
const deployDirectory = path_1.default.resolve(cwd, "deploy");
const configFile = path_1.default.resolve(deployDirectory, "config.json");
const linuxDeployQtBin = path_1.default.resolve(__dirname, "..", "..", "deps", "linuxdeployqt");
const copyQode = (dest) => __awaiter(void 0, void 0, void 0, function* () {
    const qodeBinaryFile = qode_1.default.qodePath;
    yield fs_extra_1.default.chmod(qodeBinaryFile, "755");
    yield fs_extra_1.default.copyFile(qodeBinaryFile, path_1.default.resolve(dest, "qode"));
});
const copyAppDist = (distPath, resourceDir) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs_extra_1.default.copy(distPath, path_1.default.resolve(resourceDir, "dist"), {
        recursive: true,
    });
});
function getAllNodeAddons(dirPath) {
    const addonExt = "node";
    let dir = fs_extra_1.default.readdirSync(dirPath);
    return dir
        .filter((elm) => elm.match(new RegExp(`.*\.(${addonExt}$)`, "ig")))
        .map((eachElement) => path_1.default.resolve(dirPath, eachElement));
}
const addonCommands = (addonPaths) => {
    return addonPaths.reduce((commandList, currentAddon) => {
        commandList.push(`-executable=${currentAddon}`);
        return commandList;
    }, []);
};
const runLinuxDeployQt = (appName, buildDir) => __awaiter(void 0, void 0, void 0, function* () {
    const distPath = path_1.default.resolve(buildDir, "dist");
    const allAddons = getAllNodeAddons(distPath);
    const LD_LIBRARY_PATH = `${qtConfig_1.qtHome}/lib:${process.env.LD_LIBRARY_PATH}`;
    const linuxDeployQt = (0, child_process_1.spawn)(linuxDeployQtBin, [
        `qode`,
        "-verbose=2",
        "-bundle-non-qt-libs",
        "-appimage",
        `-qmake=${path_1.default.resolve(qtConfig_1.qtHome, "bin", "qmake")}`,
        ...addonCommands(allAddons),
    ], { cwd: buildDir, env: Object.assign(Object.assign({}, process.env), { LD_LIBRARY_PATH }) });
    return new Promise((resolve, reject) => {
        linuxDeployQt.stdout.on("data", function (data) {
            console.log("stdout: " + data.toString());
        });
        linuxDeployQt.stderr.on("data", function (data) {
            console.log("stderr: " + data.toString());
        });
        linuxDeployQt.on("exit", function (code) {
            if (!code) {
                return resolve(true);
            }
            return reject("child process exited with code " + code);
        });
    });
});
const init = (appName) => __awaiter(void 0, void 0, void 0, function* () {
    const config = {
        appName: null,
    };
    const templateDirectory = path_1.default.resolve(__dirname, "../../template/linux");
    const userTemplate = path_1.default.resolve(deployDirectory, "linux");
    const appDir = path_1.default.resolve(userTemplate, appName);
    yield fs_extra_1.default.mkdirp(path_1.default.resolve(userTemplate, appDir));
    yield fs_extra_1.default.copy(templateDirectory, appDir, { recursive: true });
    Object.assign(config, { appName });
    yield fs_extra_1.default.writeJSON(configFile, config);
});
exports.init = init;
const pack = (distPath) => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield fs_extra_1.default.readJSON(path_1.default.resolve(deployDirectory, "config.json"));
    const { appName } = config;
    const usertemplate = path_1.default.resolve(deployDirectory, "linux");
    const templateAppDir = path_1.default.resolve(usertemplate, appName);
    const buildDir = path_1.default.resolve(usertemplate, "build");
    const buildAppPackage = path_1.default.resolve(buildDir, appName);
    console.log(`cleaning build directory at ${buildDir}`);
    yield fs_extra_1.default.remove(buildDir);
    console.log(`creating build directory at ${buildDir}`);
    yield fs_extra_1.default.copy(templateAppDir, buildAppPackage, { recursive: true });
    console.log(`copying qode`);
    yield copyQode(buildAppPackage);
    console.log(`copying dist`);
    yield copyAppDist(distPath, buildAppPackage);
    console.log(`running linuxdeployqt`);
    yield runLinuxDeployQt(appName, buildAppPackage);
    console.log(`Build successful. Find the AppImage at ${buildAppPackage}. Look for an executable file with extension .AppImage`);
});
exports.pack = pack;
//# sourceMappingURL=index.js.map