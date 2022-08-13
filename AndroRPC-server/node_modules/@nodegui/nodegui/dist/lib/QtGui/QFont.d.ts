import { Component, NativeElement } from '../core/Component';
import { QVariant } from '../QtCore/QVariant';
export declare class QFont extends Component {
    constructor();
    constructor(font: QFont);
    constructor(native: NativeElement);
    constructor(family: string, pointSize?: number, weight?: QFontWeight, italic?: boolean);
    bold(): boolean;
    setBold(enable: boolean): void;
    setCapitalization(caps: QFontCapitalization): void;
    capitalization(): QFontCapitalization;
    setFamily(family: string): void;
    family(): string;
    setPixelSize(value: number): void;
    setPointSize(value: number): void;
    pixelSize(): number;
    pointSize(): number;
    setStretch(factor: QFontStretch): void;
    stretch(): QFontStretch;
    setWeight(weight: QFontWeight): void;
    weight(): QFontWeight;
    setItalic(enable: boolean): void;
    italic(): boolean;
    setStyleName(style: string): void;
    toString(): string;
    static fromQVariant(variant: QVariant): QFont;
}
export declare enum QFontStretch {
    AnyStretch = 0,
    UltraCondensed = 50,
    ExtraCondensed = 62,
    Condensed = 75,
    SemiCondensed = 87,
    Unstretched = 100,
    SemiExpanded = 112,
    Expanded = 125,
    ExtraExpanded = 150,
    UltraExpanded = 200
}
export declare enum QFontCapitalization {
    MixedCase = 0,
    AllUppercase = 1,
    AllLowercase = 2,
    SmallCaps = 3,
    Capitalize = 4
}
export declare enum QFontWeight {
    Thin = 0,
    ExtraLight = 12,
    Light = 25,
    Normal = 50,
    Medium = 57,
    DemiBold = 63,
    Bold = 75,
    ExtraBold = 81,
    Black = 87
}
