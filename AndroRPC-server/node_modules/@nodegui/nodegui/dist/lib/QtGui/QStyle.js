"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStylePixelMetric = exports.QStyle = void 0;
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
class QStyle extends Component_1.Component {
    constructor(native) {
        if (!helpers_1.checkIfNativeElement(native)) {
            throw new Error('QStyle cannot be initialised this way. Use QApplication::style()');
        }
        super(native);
    }
    pixelMetric(metric) {
        return this.native.pixelMetric(metric);
    }
    polish(widget) {
        this.native.polish(widget.native);
    }
    unpolish(widget) {
        this.native.unpolish(widget.native);
    }
}
exports.QStyle = QStyle;
var QStylePixelMetric;
(function (QStylePixelMetric) {
    QStylePixelMetric[QStylePixelMetric["PM_ButtonMargin"] = 0] = "PM_ButtonMargin";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonDefaultIndicator"] = 1] = "PM_ButtonDefaultIndicator";
    QStylePixelMetric[QStylePixelMetric["PM_MenuButtonIndicator"] = 2] = "PM_MenuButtonIndicator";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonShiftHorizontal"] = 3] = "PM_ButtonShiftHorizontal";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonShiftVertical"] = 4] = "PM_ButtonShiftVertical";
    QStylePixelMetric[QStylePixelMetric["PM_DefaultFrameWidth"] = 5] = "PM_DefaultFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_SpinBoxFrameWidth"] = 6] = "PM_SpinBoxFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ComboBoxFrameWidth"] = 7] = "PM_ComboBoxFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MaximumDragDistance"] = 8] = "PM_MaximumDragDistance";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollBarExtent"] = 9] = "PM_ScrollBarExtent";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollBarSliderMin"] = 10] = "PM_ScrollBarSliderMin";
    QStylePixelMetric[QStylePixelMetric["PM_SliderThickness"] = 11] = "PM_SliderThickness";
    QStylePixelMetric[QStylePixelMetric["PM_SliderControlThickness"] = 12] = "PM_SliderControlThickness";
    QStylePixelMetric[QStylePixelMetric["PM_SliderLength"] = 13] = "PM_SliderLength";
    QStylePixelMetric[QStylePixelMetric["PM_SliderTickmarkOffset"] = 14] = "PM_SliderTickmarkOffset";
    QStylePixelMetric[QStylePixelMetric["PM_SliderSpaceAvailable"] = 15] = "PM_SliderSpaceAvailable";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetSeparatorExtent"] = 16] = "PM_DockWidgetSeparatorExtent";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetHandleExtent"] = 17] = "PM_DockWidgetHandleExtent";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetFrameWidth"] = 18] = "PM_DockWidgetFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabOverlap"] = 19] = "PM_TabBarTabOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabHSpace"] = 20] = "PM_TabBarTabHSpace";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabVSpace"] = 21] = "PM_TabBarTabVSpace";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarBaseHeight"] = 22] = "PM_TabBarBaseHeight";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarBaseOverlap"] = 23] = "PM_TabBarBaseOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_ProgressBarChunkWidth"] = 24] = "PM_ProgressBarChunkWidth";
    QStylePixelMetric[QStylePixelMetric["PM_SplitterWidth"] = 25] = "PM_SplitterWidth";
    QStylePixelMetric[QStylePixelMetric["PM_TitleBarHeight"] = 26] = "PM_TitleBarHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuScrollerHeight"] = 27] = "PM_MenuScrollerHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuHMargin"] = 28] = "PM_MenuHMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuVMargin"] = 29] = "PM_MenuVMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuPanelWidth"] = 30] = "PM_MenuPanelWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuTearoffHeight"] = 31] = "PM_MenuTearoffHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuDesktopFrameWidth"] = 32] = "PM_MenuDesktopFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarPanelWidth"] = 33] = "PM_MenuBarPanelWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarItemSpacing"] = 34] = "PM_MenuBarItemSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarVMargin"] = 35] = "PM_MenuBarVMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarHMargin"] = 36] = "PM_MenuBarHMargin";
    QStylePixelMetric[QStylePixelMetric["PM_IndicatorWidth"] = 37] = "PM_IndicatorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_IndicatorHeight"] = 38] = "PM_IndicatorHeight";
    QStylePixelMetric[QStylePixelMetric["PM_ExclusiveIndicatorWidth"] = 39] = "PM_ExclusiveIndicatorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ExclusiveIndicatorHeight"] = 40] = "PM_ExclusiveIndicatorHeight";
    QStylePixelMetric[QStylePixelMetric["PM_DialogButtonsSeparator"] = 41] = "PM_DialogButtonsSeparator";
    QStylePixelMetric[QStylePixelMetric["PM_DialogButtonsButtonWidth"] = 42] = "PM_DialogButtonsButtonWidth";
    QStylePixelMetric[QStylePixelMetric["PM_DialogButtonsButtonHeight"] = 43] = "PM_DialogButtonsButtonHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MdiSubWindowFrameWidth"] = 44] = "PM_MdiSubWindowFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MdiSubWindowMinimizedWidth"] = 45] = "PM_MdiSubWindowMinimizedWidth";
    QStylePixelMetric[QStylePixelMetric["PM_HeaderMargin"] = 46] = "PM_HeaderMargin";
    QStylePixelMetric[QStylePixelMetric["PM_HeaderMarkSize"] = 47] = "PM_HeaderMarkSize";
    QStylePixelMetric[QStylePixelMetric["PM_HeaderGripMargin"] = 48] = "PM_HeaderGripMargin";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabShiftHorizontal"] = 49] = "PM_TabBarTabShiftHorizontal";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabShiftVertical"] = 50] = "PM_TabBarTabShiftVertical";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarScrollButtonWidth"] = 51] = "PM_TabBarScrollButtonWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarFrameWidth"] = 52] = "PM_ToolBarFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarHandleExtent"] = 53] = "PM_ToolBarHandleExtent";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarItemSpacing"] = 54] = "PM_ToolBarItemSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarItemMargin"] = 55] = "PM_ToolBarItemMargin";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarSeparatorExtent"] = 56] = "PM_ToolBarSeparatorExtent";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarExtensionExtent"] = 57] = "PM_ToolBarExtensionExtent";
    QStylePixelMetric[QStylePixelMetric["PM_SpinBoxSliderHeight"] = 58] = "PM_SpinBoxSliderHeight";
    QStylePixelMetric[QStylePixelMetric["PM_DefaultTopLevelMargin"] = 59] = "PM_DefaultTopLevelMargin";
    QStylePixelMetric[QStylePixelMetric["PM_DefaultChildMargin"] = 60] = "PM_DefaultChildMargin";
    QStylePixelMetric[QStylePixelMetric["PM_DefaultLayoutSpacing"] = 61] = "PM_DefaultLayoutSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_ToolBarIconSize"] = 62] = "PM_ToolBarIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_ListViewIconSize"] = 63] = "PM_ListViewIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_IconViewIconSize"] = 64] = "PM_IconViewIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_SmallIconSize"] = 65] = "PM_SmallIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_LargeIconSize"] = 66] = "PM_LargeIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_FocusFrameVMargin"] = 67] = "PM_FocusFrameVMargin";
    QStylePixelMetric[QStylePixelMetric["PM_FocusFrameHMargin"] = 68] = "PM_FocusFrameHMargin";
    QStylePixelMetric[QStylePixelMetric["PM_ToolTipLabelFrameWidth"] = 69] = "PM_ToolTipLabelFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_CheckBoxLabelSpacing"] = 70] = "PM_CheckBoxLabelSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarIconSize"] = 71] = "PM_TabBarIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_SizeGripSize"] = 72] = "PM_SizeGripSize";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetTitleMargin"] = 73] = "PM_DockWidgetTitleMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MessageBoxIconSize"] = 74] = "PM_MessageBoxIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonIconSize"] = 75] = "PM_ButtonIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetTitleBarButtonMargin"] = 76] = "PM_DockWidgetTitleBarButtonMargin";
    QStylePixelMetric[QStylePixelMetric["PM_RadioButtonLabelSpacing"] = 77] = "PM_RadioButtonLabelSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutLeftMargin"] = 78] = "PM_LayoutLeftMargin";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutTopMargin"] = 79] = "PM_LayoutTopMargin";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutRightMargin"] = 80] = "PM_LayoutRightMargin";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutBottomMargin"] = 81] = "PM_LayoutBottomMargin";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutHorizontalSpacing"] = 82] = "PM_LayoutHorizontalSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_LayoutVerticalSpacing"] = 83] = "PM_LayoutVerticalSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_TabBar_ScrollButtonOverlap"] = 84] = "PM_TabBar_ScrollButtonOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_TextCursorWidth"] = 85] = "PM_TextCursorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_TabCloseIndicatorWidth"] = 86] = "PM_TabCloseIndicatorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_TabCloseIndicatorHeight"] = 87] = "PM_TabCloseIndicatorHeight";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollView_ScrollBarSpacing"] = 88] = "PM_ScrollView_ScrollBarSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollView_ScrollBarOverlap"] = 89] = "PM_ScrollView_ScrollBarOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_SubMenuOverlap"] = 90] = "PM_SubMenuOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_TreeViewIndentation"] = 91] = "PM_TreeViewIndentation";
    QStylePixelMetric[QStylePixelMetric["PM_HeaderDefaultSectionSizeHorizontal"] = 92] = "PM_HeaderDefaultSectionSizeHorizontal";
    QStylePixelMetric[QStylePixelMetric["PM_HeaderDefaultSectionSizeVertical"] = 93] = "PM_HeaderDefaultSectionSizeVertical";
    QStylePixelMetric[QStylePixelMetric["PM_TitleBarButtonIconSize"] = 94] = "PM_TitleBarButtonIconSize";
    QStylePixelMetric[QStylePixelMetric["PM_TitleBarButtonSize"] = 95] = "PM_TitleBarButtonSize";
    QStylePixelMetric[QStylePixelMetric["PM_CustomBase"] = 4026531840] = "PM_CustomBase";
})(QStylePixelMetric = exports.QStylePixelMetric || (exports.QStylePixelMetric = {}));
