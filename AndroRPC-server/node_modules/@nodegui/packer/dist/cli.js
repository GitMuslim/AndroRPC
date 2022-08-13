#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const process_1 = __importDefault(require("process"));
const index_1 = require("./index");
commander_1.default
    .option("-i, --init <name>", "Creates initial deploy files")
    .option("-p, --pack <distPath>", "Packs the app into deployable");
commander_1.default.parse(process_1.default.argv);
const options = commander_1.default.opts();
const platformName = process_1.default.platform;
const packer = (0, index_1.getPacker)(platformName);
if (commander_1.default.init) {
    packer.init(options.init);
}
if (commander_1.default.pack) {
    packer.pack(options.pack);
}
//# sourceMappingURL=cli.js.map