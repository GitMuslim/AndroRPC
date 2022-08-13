"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUrl = exports.UserInputResolutionOption = exports.UrlFormattingOption = exports.ParsingMode = exports.ComponentFormattingOption = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
var ComponentFormattingOption;
(function (ComponentFormattingOption) {
    /** The component is returned in a "pretty form", with most percent-encoded characters decoded. The exact behavior of PrettyDecoded varies from component to component and may also change from Qt release to Qt release. This is the default. */
    ComponentFormattingOption[ComponentFormattingOption["PrettyDecoded"] = 0] = "PrettyDecoded";
    /** Leave space characters in their encoded form ("%20"). */
    ComponentFormattingOption[ComponentFormattingOption["EncodeSpaces"] = 1048576] = "EncodeSpaces";
    /** Leave non-US-ASCII characters encoded in their UTF-8 percent-encoded form (e.g., "%C3%A9" for the U+00E9 codepoint, LATIN SMALL LETTER E WITH ACUTE). */
    ComponentFormattingOption[ComponentFormattingOption["EncodeUnicode"] = 2097152] = "EncodeUnicode";
    /** Leave certain delimiters in their encoded form, as would appear in the URL when the full URL is represented as text. The delimiters are affected by this option change from component to component. This flag has no effect in toString() or toEncoded().*/
    ComponentFormattingOption[ComponentFormattingOption["EncodeDelimiters"] = 12582912] = "EncodeDelimiters";
    /** Leave US-ASCII characters not permitted in the URL by the specification in their encoded form. This is the default on toString() and toEncoded(). */
    ComponentFormattingOption[ComponentFormattingOption["EncodeReserved"] = 16777216] = "EncodeReserved";
    /** Decode the US-ASCII characters that the URL specification does not allow to appear in the URL. This is the default on the getters of individual components. */
    ComponentFormattingOption[ComponentFormattingOption["DecodeReserved"] = 33554432] = "DecodeReserved";
    /** Leave all characters in their properly-encoded form, as this component would appear as part of a URL. When used with toString(), this produces a fully-compliant URL in QString form, exactly equal to the result of toEncoded() */
    ComponentFormattingOption[ComponentFormattingOption["FullyEncoded"] = 32505856] = "FullyEncoded";
    /** Attempt to decode as much as possible. For individual components of the URL, this decodes every percent encoding sequence, including control characters (U+0000 to U+001F) and UTF-8 sequences found in percent-encoded form. Use of this mode may cause data loss, see below for more information. */
    ComponentFormattingOption[ComponentFormattingOption["FullyDecoded"] = 133169152] = "FullyDecoded";
})(ComponentFormattingOption = exports.ComponentFormattingOption || (exports.ComponentFormattingOption = {}));
var ParsingMode;
(function (ParsingMode) {
    /** QUrl will try to correct some common errors in URLs. This mode is useful for parsing URLs coming from sources not known to be strictly standards-conforming. */
    ParsingMode[ParsingMode["TolerantMode"] = 0] = "TolerantMode";
    /** Only valid URLs are accepted. This mode is useful for general URL validation.*/
    ParsingMode[ParsingMode["StrictMode"] = 1] = "StrictMode";
    /** QUrl will interpret the URL component in the fully-decoded form, where percent characters stand for themselves, not as the beginning of a percent-encoded sequence. This mode is only valid for the setters setting components of a URL; it is not permitted in the QUrl constructor, in fromEncoded() or in setUrl(). For more information on this mode, see the documentation for QUrl::FullyDecoded.*/
    ParsingMode[ParsingMode["DecodedMode"] = 2] = "DecodedMode";
})(ParsingMode = exports.ParsingMode || (exports.ParsingMode = {}));
var UrlFormattingOption;
(function (UrlFormattingOption) {
    UrlFormattingOption[UrlFormattingOption["None"] = 0] = "None";
    UrlFormattingOption[UrlFormattingOption["RemoveScheme"] = 1] = "RemoveScheme";
    UrlFormattingOption[UrlFormattingOption["RemovePassword"] = 2] = "RemovePassword";
    UrlFormattingOption[UrlFormattingOption["RemoveUserInfo"] = 3] = "RemoveUserInfo";
    UrlFormattingOption[UrlFormattingOption["RemovePort"] = 8] = "RemovePort";
    UrlFormattingOption[UrlFormattingOption["RemoveAuthority"] = 9] = "RemoveAuthority";
    UrlFormattingOption[UrlFormattingOption["RemovePath"] = 32] = "RemovePath";
    UrlFormattingOption[UrlFormattingOption["RemoveQuery"] = 64] = "RemoveQuery";
    UrlFormattingOption[UrlFormattingOption["RemoveFragment"] = 128] = "RemoveFragment";
    UrlFormattingOption[UrlFormattingOption["RemoveFilename"] = 2048] = "RemoveFilename";
    UrlFormattingOption[UrlFormattingOption["PreferLocalFile"] = 512] = "PreferLocalFile";
    UrlFormattingOption[UrlFormattingOption["StripTrailingSlash"] = 1024] = "StripTrailingSlash";
    UrlFormattingOption[UrlFormattingOption["NormalizePathSegments"] = 4096] = "NormalizePathSegments";
})(UrlFormattingOption = exports.UrlFormattingOption || (exports.UrlFormattingOption = {}));
var UserInputResolutionOption;
(function (UserInputResolutionOption) {
    /** The default resolution mechanism is to check whether a local file exists, in the working directory given to fromUserInput, and only return a local path in that case. Otherwise a URL is assumed. */
    UserInputResolutionOption[UserInputResolutionOption["DefaultResolution"] = 0] = "DefaultResolution";
    /** This option makes fromUserInput() always return a local path unless the input contains a scheme, such as http://file.pl. This is useful for applications such as text editors, which are able to create the file if it doesn't exist. */
    UserInputResolutionOption[UserInputResolutionOption["AssumeLocalFile"] = 1] = "AssumeLocalFile";
})(UserInputResolutionOption = exports.UserInputResolutionOption || (exports.UserInputResolutionOption = {}));
class QUrl extends Component_1.Component {
    constructor(nativeOrString, parsingMode = ParsingMode.TolerantMode) {
        let native;
        if (!nativeOrString) {
            native = new addon_1.default.QUrl();
        }
        else if (helpers_1.checkIfNativeElement(nativeOrString)) {
            native = nativeOrString;
        }
        else {
            native = new addon_1.default.QUrl(nativeOrString, parsingMode);
        }
        super(native);
    }
    static fromQVariant(variant) {
        return new QUrl(addon_1.default.QUrl.fromQVariant(variant.native));
    }
    /**
    Returns an adjusted version of the URL. The output can be customized by passing flags with options.
    */
    adjusted(options) {
        return new QUrl(this.native.adjusted(options));
    }
    /**
    Returns the authority of the URL if it is defined; otherwise an empty string is returned.
    */
    authority(options = ComponentFormattingOption.PrettyDecoded) {
        return this.native.authority(options);
    }
    /**
    Resets the content of the QUrl. After calling this function, the QUrl is equal to one that has been constructed with the default empty constructor.
    */
    clear() {
        return this.native.clear();
    }
    /**
    Returns an error message if the last operation that modified this QUrl object ran into a parsing error. If no error was detected, this function returns an empty string and isValid() returns true.
    */
    errorString() {
        return this.native.errorString();
    }
    /**
    Returns the name of the file, excluding the directory path.
    */
    fileName(options = ComponentFormattingOption.FullyDecoded) {
        return this.native.fileName(options);
    }
    /**
    Returns the fragment of the URL. To determine if the parsed URL contained a fragment, use hasFragment().
    */
    fragment(options = ComponentFormattingOption.PrettyDecoded) {
        return this.native.fragment(options);
    }
    /**
    Returns true if this URL contains a fragment (i.e., if # was seen on it).
    */
    hasFragment() {
        return this.native.hasFragment();
    }
    /**
    Returns true if this URL contains a Query (i.e., if ? was seen on it).
    */
    hasQuery() {
        return this.native.hasQuery();
    }
    /**
    Returns the host of the URL if it is defined; otherwise an empty string is returned.
    */
    host(options = ComponentFormattingOption.FullyDecoded) {
        return this.native.host(options);
    }
    /**
    Returns true if the URL has no data; otherwise returns false.
    */
    isEmpty() {
        return this.native.isEmpty();
    }
    /**
    Returns true if this URL is pointing to a local file path. A URL is a local file path if the scheme is "file".
    */
    isLocalFile() {
        return this.native.isLocalFile();
    }
    /**
    Returns true if this URL is a parent of childUrl. childUrl is a child of this URL if the two URLs share the same scheme and authority, and this URL's path is a parent of the path of childUrl.
    */
    isParentOf(childUrl) {
        return this.native.isParentOf(childUrl.native);
    }
    /**
    Returns true if the URL is relative; otherwise returns false. A URL is relative reference if its scheme is undefined; this function is therefore equivalent to calling scheme().isEmpty().
    */
    isRelative() {
        return this.native.isRelative();
    }
    /**
    Returns true if the URL is non-empty and valid; otherwise returns false.
    */
    isValid() {
        return this.native.isValid();
    }
    /**
    Returns true if this URL and the given url are equal after applying options to both; otherwise returns false.
    */
    matches(url, options) {
        return this.native.matches(url.native, options);
    }
    /**
    Returns the password of the URL if it is defined; otherwise an empty string is returned.
    */
    password(options = ComponentFormattingOption.FullyDecoded) {
        return this.native.password(options);
    }
    /**
    Returns the path of the URL.
    */
    path(options = ComponentFormattingOption.FullyDecoded) {
        return this.native.path(options);
    }
    /**
    Returns the port of the URL, or defaultPort if the port is unspecified.
    */
    port(defaultPort = -1) {
        return this.native.port(defaultPort);
    }
    /**
    Returns the query string of the URL if there's a query string, or an empty result if not. To determine if the parsed URL contained a query string, use hasQuery().
    */
    query(options = ComponentFormattingOption.PrettyDecoded) {
        return this.native.query(options);
    }
    /**
    Returns the result of the merge of this URL with relative. This URL is used as a base to convert relative to an absolute URL.
    */
    resolved(relative) {
        return new QUrl(this.native.resolved(relative.native));
    }
    /**
    Returns the scheme of the URL. If an empty string is returned, this means the scheme is undefined and the URL is then relative.
    */
    scheme() {
        return this.native.scheme();
    }
    /**
    Sets the authority of the URL to authority.
    */
    setAuthority(authority, mode = ParsingMode.TolerantMode) {
        return this.native.setAuthority(authority, mode);
    }
    /**
    Sets the fragment of the URL to fragment. The fragment is the last part of the URL, represented by a '#' followed by a string of characters. It is typically used in HTTP for referring to a certain link or point on a page:
    */
    setFragment(fragment, mode = ParsingMode.TolerantMode) {
        return this.native.setFragment(fragment, mode);
    }
    /**
    Sets the host of the URL to host. The host is part of the authority.
    */
    setHost(host, mode = ParsingMode.DecodedMode) {
        return this.native.setHost(host, mode);
    }
    /**
    Sets the URL's password to password. The password is part of the user info element in the authority of the URL, as described in setUserInfo().
    */
    setPassword(password, mode = ParsingMode.DecodedMode) {
        return this.native.setPassword(password, mode);
    }
    /**
    Sets the path of the URL to path. The path is the part of the URL that comes after the authority but before the query string.
    */
    setPath(path, mode = ParsingMode.DecodedMode) {
        return this.native.setPath(path, mode);
    }
    /**
    Sets the port of the URL to port. The port is part of the authority of the URL, as described in setAuthority().
    */
    setPort(port) {
        return this.native.setPort(port);
    }
    /**
    Sets the query string of the URL to query.
    */
    setQuery(query, mode = ParsingMode.TolerantMode) {
        return this.native.setQuery(query, mode);
    }
    /**
    Sets the scheme of the URL to scheme. As a scheme can only contain ASCII characters, no conversion or decoding is done on the input. It must also start with an ASCII letter.
    */
    setScheme(scheme) {
        return this.native.setScheme(scheme);
    }
    /**
    Parses url and sets this object to that value. QUrl will automatically percent encode all characters that are not allowed in a URL and decode the percent-encoded sequences that represent an unreserved character (letters, digits, hyphens, undercores, dots and tildes). All other characters are left in their original forms.
    */
    setUrl(url, parsingMode = ParsingMode.TolerantMode) {
        return this.native.setUrl(url, parsingMode);
    }
    /**
    Sets the user info of the URL to userInfo. The user info is an optional part of the authority of the URL, as described in setAuthority().
    */
    setUserInfo(userInfo, mode = ParsingMode.TolerantMode) {
        return this.native.setUserInfo(userInfo, mode);
    }
    /**
    Sets the URL's user name to userName. The userName is part of the user info element in the authority of the URL, as described in setUserInfo().
    */
    setUserName(userName, mode = ParsingMode.DecodedMode) {
        return this.native.setUserName(userName, mode);
    }
    /**
    Swaps URL other with this URL. This operation is very fast and never fails.
    */
    swap(other) {
        return this.native.swap(other.native);
    }
    /**
    Returns a human-displayable string representation of the URL. The output can be customized by passing flags with options. The option RemovePassword is always enabled, since passwords should never be shown back to users.
    */
    toDisplayString(options = ComponentFormattingOption.PrettyDecoded) {
        return this.native.toDisplayString(options);
    }
    /**
    Returns the path of this URL formatted as a local file path. The path returned will use forward slashes, even if it was originally created from one with backslashes.
    */
    toLocalFile() {
        return this.native.toLocalFile();
    }
    /**
    Returns a string representation of the URL. The output can be customized by passing flags with options. The option QUrl::FullyDecoded is not permitted in this function since it would generate ambiguous data.
    
    See QUrl::ComponentFormattingOption for flags
    */
    toString(options) {
        if (arguments.length == 1) {
            return this.native.toString_withOpts(options);
        }
        return this.native.toString();
    }
    /**
    Returns a string representation of the URL. The output can be customized by passing flags with options. The option QUrl::FullyDecoded is not permitted in this function since it would generate ambiguous data.
    */
    url(options) {
        return this.native.url(options);
    }
    /**
    Returns the user info of the URL, or an empty string if the user info is undefined.
    */
    userInfo(options = ComponentFormattingOption.PrettyDecoded) {
        return this.native.userInfo(options);
    }
    /**
    Returns the user name of the URL if it is defined; otherwise an empty string is returned.
    */
    userName(options = ComponentFormattingOption.FullyDecoded) {
        return this.native.userName(options);
    }
    /**
    Returns a QUrl representation of localFile, interpreted as a local file. This function accepts paths separated by slashes as well as the native separator for this platform.
    */
    static fromLocalFile(localFile) {
        return new QUrl(addon_1.default.QUrl.fromLocalFile(localFile));
    }
    /**
    Returns a valid URL from a user supplied userInput string if one can be deduced. In the case that is not possible, an invalid QUrl() is returned.
    */
    static fromUserInput(userInput, workingDirectory, options = UserInputResolutionOption.DefaultResolution) {
        if (!workingDirectory) {
            return new QUrl(addon_1.default.QUrl.fromUserInput(userInput));
        }
        return new QUrl(addon_1.default.QUrl.fromUserInput(userInput, workingDirectory, options));
    }
}
exports.QUrl = QUrl;
