import { QWidget, QWidgetSignals } from '../../QtWidgets/QWidget';
export declare class StyleSheet {
    static create(cssString: string): string;
}
export declare function prepareInlineStyleSheet<Signals extends QWidgetSignals>(widget: QWidget<Signals>, rawStyle: string): string;
