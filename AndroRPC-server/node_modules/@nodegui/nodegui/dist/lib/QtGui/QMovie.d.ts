/// <reference types="node" />
import { NativeElement } from '../core/Component';
import { QObject, QObjectSignals } from '../QtCore/QObject';
import { QSize } from '../QtCore/QSize';
import { QPixmap } from './QPixmap';
export declare class QMovie extends QObject<QMovieSignals> {
    constructor(arg?: QObject | NativeElement);
    setFileName(fileName: string): void;
    loadFromData(buffer: Buffer): void;
    fileName(): string;
    setFormat(formatName: SupportedFormats): void;
    format(): string;
    setScaledSize(size: QSize): void;
    setSpeed(percentSpeed: number): void;
    start(): void;
    stop(): void;
    setPaused(paused: boolean): void;
    jumpToNextFrame(): boolean;
    jumpToFrame(frame: number): boolean;
    setCacheMode(cacheMode: CacheMode): void;
    state(): MovieState;
    currentFrameNumber(): number;
    currentPixmap(): QPixmap;
    frameCount(): number;
}
export declare enum CacheMode {
    CacheNone = 0,
    CacheAll = 1
}
export declare enum MovieState {
    NotRunning = 0,
    Paused = 1,
    Running = 2
}
export declare enum ImageReaderError {
    FileNotFoundError = 1,
    DeviceError = 2,
    UnsupportedFormatError = 3,
    InvalidDataError = 4,
    UnknownError = 0
}
declare type SupportedFormats = 'gif' | 'webp';
export interface QMovieSignals extends QObjectSignals {
    error: (error: ImageReaderError) => void;
    finished: () => void;
    frameChanged: (frameNumber?: number) => void;
    resized: (qSizeNative?: NativeElement) => void;
    started: () => void;
    stateChanged: (state: MovieState) => void;
    updated: (qRectNative: NativeElement) => void;
}
export {};
