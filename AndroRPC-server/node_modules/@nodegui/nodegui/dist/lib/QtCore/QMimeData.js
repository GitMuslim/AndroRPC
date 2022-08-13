"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMimeData = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QUrl_1 = require("./QUrl");
/**
 * description
 */
class QMimeData extends Component_1.Component {
    constructor(arg) {
        let native;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else {
            native = new addon_1.default.QMimeData();
        }
        super(native);
    }
    /**
    Removes all the MIME type and data entries in the object.
    */
    clear() {
        return this.native.clear();
    }
    /**
    Returns true if the object can return a color (MIME type application/x-color); otherwise returns false.
    */
    hasColor() {
        return this.native.hasColor();
    }
    /**
    Returns true if the object can return HTML (MIME type text/html); otherwise returns false.
    */
    hasHtml() {
        return this.native.hasHtml();
    }
    /**
    Returns true if the object can return an image; otherwise returns false.
    */
    hasImage() {
        return this.native.hasImage();
    }
    /**
    Returns true if the object can return plain text (MIME type text/plain); otherwise returns false.
    */
    hasText() {
        return this.native.hasText();
    }
    /**
    Returns true if the object can return a list of urls; otherwise returns false.
    */
    hasUrls() {
        return this.native.hasUrls();
    }
    /**
    Returns a string if the data stored in the object is HTML (MIME type text/html); otherwise returns an empty string.
    */
    html() {
        return this.native.html();
    }
    /**
    Removes the data entry for mimeType in the object.
    */
    removeFormat(mimeType) {
        return this.native.removeFormat(mimeType);
    }
    /*
    Sets the data associated with the MIME type given by mimeType to the specified data.
    This is not implemented yet; need to do stuff with either Buffer or UInt8Array
    */
    // setData(mimeType: string, QByteArray: const): void {
    //     return this.native.setData(mimeType, QByteArray)
    // }
    /**
    Sets html as the HTML (MIME type text/html) used to represent the data.
    */
    setHtml(html) {
        return this.native.setHtml(html);
    }
    /**
    Sets text as the plain text (MIME type text/plain) used to represent the data.
    */
    setText(text) {
        return this.native.setText(text);
    }
    /**
    Sets the URLs stored in the MIME data object to those specified by urls.
    */
    setUrls(urls) {
        const natives = urls.map((v) => {
            return v.native;
        });
        return this.native.setUrls(natives);
    }
    /**
    Returns a plain text (MIME type text/plain) representation of the data.
    */
    text() {
        return this.native.text();
    }
    /**
     * Returns a list of URLs contained within the MIME data object.
     *
     * URLs correspond to the MIME type text/uri-list.
     */
    urls() {
        const natives = this.native.urls();
        return natives.map((v) => {
            return new QUrl_1.QUrl(v);
        });
    }
}
exports.QMimeData = QMimeData;
