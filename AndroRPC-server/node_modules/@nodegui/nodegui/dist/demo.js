"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QMainWindow_1 = require("./lib/QtWidgets/QMainWindow");
const QLabel_1 = require("./lib/QtWidgets/QLabel");
const FlexLayout_1 = require("./lib/core/FlexLayout");
const QPushButton_1 = require("./lib/QtWidgets/QPushButton");
const QWidget_1 = require("./lib/QtWidgets/QWidget");
const win = new QMainWindow_1.QMainWindow();
win.setWindowTitle('Hello World');
const centralWidget = new QWidget_1.QWidget();
centralWidget.setObjectName('myroot');
const rootLayout = new FlexLayout_1.FlexLayout();
centralWidget.setLayout(rootLayout);
const label = new QLabel_1.QLabel();
label.setObjectName('mylabel');
label.setText('Hello');
const button = new QPushButton_1.QPushButton();
button.setText('Hello');
const label2 = new QLabel_1.QLabel();
label2.setText('World');
label2.setInlineStyle(`
  color: red;
`);
rootLayout.addWidget(label);
rootLayout.addWidget(button);
rootLayout.addWidget(label2);
win.setCentralWidget(centralWidget);
win.setStyleSheet(`
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
  `);
win.show();
global.win = win;
