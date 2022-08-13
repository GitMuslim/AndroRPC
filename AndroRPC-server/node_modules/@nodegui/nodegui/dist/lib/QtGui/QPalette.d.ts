import { Component } from '../core/Component';
import { QColor } from './QColor';
export declare enum ColorGroup {
    Disabled = 1,
    Active = 0,
    Inactive = 2,
    Normal = 0
}
export declare enum ColorRole {
    WindowText = 0,
    Button = 1,
    Light = 2,
    Midlight = 3,
    Dark = 4,
    Mid = 5,
    Text = 6,
    BrightText = 7,
    ButtonText = 8,
    Base = 9,
    Window = 10,
    Shadow = 11,
    Highlight = 12,
    HighlightedText = 13,
    Link = 14,
    LinkVisited = 15,
    AlternateBase = 16,
    NoRole = 17,
    ToolTipBase = 18,
    ToolTipText = 19,
    PlaceholderText = 20
}
export declare class QPalette extends Component {
    color(group: ColorGroup, role: ColorRole): QColor;
}
