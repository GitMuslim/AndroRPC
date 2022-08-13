import { Component } from '../core/Component';
export declare enum WritingSystem {
    Any = 0,
    Latin = 1,
    Greek = 2,
    Cyrillic = 3,
    Armenian = 4,
    Hebrew = 5,
    Arabic = 6,
    Syriac = 7,
    Thaana = 8,
    Devanagari = 9,
    Bengali = 10,
    Gurmukhi = 11,
    Gujaratin = 12,
    Oriya = 13,
    Tamil = 14,
    Telugu = 15,
    Kannada = 16,
    Malayalam = 17,
    Sinhala = 18,
    Thai = 19,
    Lao = 20,
    Tibetan = 21,
    Myanmar = 22,
    Georgian = 23,
    Khmer = 24,
    SimplifiedChinese = 25,
    TraditionalChinese = 26,
    Japanese = 27,
    Korean = 28,
    Vietnamese = 29,
    Symbol = 30,
    Other = 30,
    Ogham = 31,
    Runic = 32,
    Nko = 33
}
export declare class QFontDatabase extends Component {
    constructor();
    families(ws?: WritingSystem): string[];
    bold(family: string, style: string): boolean;
    isFixedPitch(family: string, style?: string | null): boolean;
    italic(family: string, style: string): boolean;
    styles(family: string): string[];
    weight(family: string, style: string): number;
    static addApplicationFont(fileName: string): number;
    static applicationFontFamilies(id: number): string[];
    static removeApplicationFont(id: number): boolean;
}
export declare enum SystemFont {
    GeneralFont = 0,
    FixedFont = 1,
    TitleFont = 2,
    SmallestReadableFont = 3
}
