import { NativeElement, Component } from '../core/Component';
import { QUrl } from './QUrl';
/**
 * description
 */
export declare class QMimeData extends Component {
    constructor(arg?: NativeElement);
    /**
    Removes all the MIME type and data entries in the object.
    */
    clear(): void;
    /**
    Returns true if the object can return a color (MIME type application/x-color); otherwise returns false.
    */
    hasColor(): boolean;
    /**
    Returns true if the object can return HTML (MIME type text/html); otherwise returns false.
    */
    hasHtml(): boolean;
    /**
    Returns true if the object can return an image; otherwise returns false.
    */
    hasImage(): boolean;
    /**
    Returns true if the object can return plain text (MIME type text/plain); otherwise returns false.
    */
    hasText(): boolean;
    /**
    Returns true if the object can return a list of urls; otherwise returns false.
    */
    hasUrls(): boolean;
    /**
    Returns a string if the data stored in the object is HTML (MIME type text/html); otherwise returns an empty string.
    */
    html(): string;
    /**
    Removes the data entry for mimeType in the object.
    */
    removeFormat(mimeType: string): void;
    /**
    Sets html as the HTML (MIME type text/html) used to represent the data.
    */
    setHtml(html: string): void;
    /**
    Sets text as the plain text (MIME type text/plain) used to represent the data.
    */
    setText(text: string): void;
    /**
    Sets the URLs stored in the MIME data object to those specified by urls.
    */
    setUrls(urls: [QUrl]): void;
    /**
    Returns a plain text (MIME type text/plain) representation of the data.
    */
    text(): string;
    /**
     * Returns a list of URLs contained within the MIME data object.
     *
     * URLs correspond to the MIME type text/uri-list.
     */
    urls(): [QUrl];
}
