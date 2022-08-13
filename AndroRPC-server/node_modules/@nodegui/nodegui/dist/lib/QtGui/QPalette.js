"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPalette = exports.ColorRole = exports.ColorGroup = void 0;
const Component_1 = require("../core/Component");
const QColor_1 = require("./QColor");
var ColorGroup;
(function (ColorGroup) {
    ColorGroup[ColorGroup["Disabled"] = 1] = "Disabled";
    ColorGroup[ColorGroup["Active"] = 0] = "Active";
    ColorGroup[ColorGroup["Inactive"] = 2] = "Inactive";
    ColorGroup[ColorGroup["Normal"] = 0] = "Normal";
})(ColorGroup = exports.ColorGroup || (exports.ColorGroup = {}));
var ColorRole;
(function (ColorRole) {
    ColorRole[ColorRole["WindowText"] = 0] = "WindowText";
    ColorRole[ColorRole["Button"] = 1] = "Button";
    ColorRole[ColorRole["Light"] = 2] = "Light";
    ColorRole[ColorRole["Midlight"] = 3] = "Midlight";
    ColorRole[ColorRole["Dark"] = 4] = "Dark";
    ColorRole[ColorRole["Mid"] = 5] = "Mid";
    ColorRole[ColorRole["Text"] = 6] = "Text";
    ColorRole[ColorRole["BrightText"] = 7] = "BrightText";
    ColorRole[ColorRole["ButtonText"] = 8] = "ButtonText";
    ColorRole[ColorRole["Base"] = 9] = "Base";
    ColorRole[ColorRole["Window"] = 10] = "Window";
    ColorRole[ColorRole["Shadow"] = 11] = "Shadow";
    ColorRole[ColorRole["Highlight"] = 12] = "Highlight";
    ColorRole[ColorRole["HighlightedText"] = 13] = "HighlightedText";
    ColorRole[ColorRole["Link"] = 14] = "Link";
    ColorRole[ColorRole["LinkVisited"] = 15] = "LinkVisited";
    ColorRole[ColorRole["AlternateBase"] = 16] = "AlternateBase";
    ColorRole[ColorRole["NoRole"] = 17] = "NoRole";
    ColorRole[ColorRole["ToolTipBase"] = 18] = "ToolTipBase";
    ColorRole[ColorRole["ToolTipText"] = 19] = "ToolTipText";
    ColorRole[ColorRole["PlaceholderText"] = 20] = "PlaceholderText";
})(ColorRole = exports.ColorRole || (exports.ColorRole = {}));
class QPalette extends Component_1.Component {
    color(group, role) {
        return new QColor_1.QColor(this.native.color(group, role));
    }
}
exports.QPalette = QPalette;
