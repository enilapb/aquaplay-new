// class js.Attr
joo.classLoader.prepare("package js",
    "public class Attr extends js.Node", 2, function ($$private) {
        ;
        return[
            "public native function get specified",
            "public native function get name",
            "public native function get value",
            "public native function get ownerElement",
        ];
    }, [], ["js.Node"], "0.8.0", "0.8.1"
);
// class js.Audio
joo.classLoader.prepare("package js",
    "public class Audio extends js.HTMLAudioElement", 5, function ($$private) {
        ;
        return[
        ];
    }, [], ["js.HTMLAudioElement"], "0.8.0", "0.8.1"
);
// class js.CanvasGradient
joo.classLoader.prepare("package js",
    "public interface CanvasGradient", 1, function ($$private) {
        ;
        return[,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.CanvasPattern
joo.classLoader.prepare("package js",
    "public interface CanvasPattern", 1, function ($$private) {
        ;
        return[
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.CanvasRenderingContext2D
joo.classLoader.prepare("package js",
    "public interface CanvasRenderingContext2D", 1, function ($$private) {
        ;
        return[, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Collection
joo.classLoader.prepare("package js",
    "public class Collection extends Array", 2, function ($$private) {
        ;
        return[
            "public native function item",
            "public native function getNamedItem",
        ];
    }, [], ["Array"], "0.8.0", "0.8.1"
);
// class js.ControlRange
joo.classLoader.prepare("package js",
    "public interface ControlRange extends js.TextRange", 1, function ($$private) {
        ;
        return[, ,
        ];
    }, [], ["js.TextRange"], "0.8.0", "0.8.1"
);
// class js.CSSPrimitiveValue
joo.classLoader.prepare("package js",
    "public class CSSPrimitiveValue", 1, function ($$private) {
        ;
        return[
            "public static const", {CSS_UNKNOWN:0},
            "public static const", {CSS_NUMBER:1},
            "public static const", {CSS_PERCENTAGE:2},
            "public static const", {CSS_EMS:3},
            "public static const", {CSS_EXS:4},
            "public static const", {CSS_PX:5},
            "public static const", {CSS_CM:6},
            "public static const", {CSS_MM:7},
            "public static const", {CSS_IN:8},
            "public static const", {CSS_PT:9},
            "public static const", {CSS_PC:10},
            "public static const", {CSS_DEG:11},
            "public static const", {CSS_RAD:12},
            "public static const", {CSS_GRAD:13},
            "public static const", {CSS_MS:14},
            "public static const", {CSS_S:15},
            "public static const", {CSS_HZ:16},
            "public static const", {CSS_KHZ:17},
            "public static const", {CSS_DIMENSION:18},
            "public static const", {CSS_STRING:19},
            "public static const", {CSS_URI:20},
            "public static const", {CSS_IDENT:21},
            "public static const", {CSS_ATTR:22},
            "public static const", {CSS_COUNTER:23},
            "public static const", {CSS_RECT:24},
            "public static const", {CSS_RGBCOLOR:25},
            "public function CSSPrimitiveValue", function () {
                ;
            },
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Document
joo.classLoader.prepare("package js",
    "public class Document extends js.Node", 2, function ($$private) {
        ;
        return[
            "public native function get compatMode",
            "public native function get designMode",
            "public native function set designMode",
            "public native function execCommand",
            "public native function get defaultView",
            "public native function get parentWindow",
            "public native function get documentElement",
            "public native function get body",
            "public native function get title",
            "public native function set title",
            "public native function get forms",
            "public native function get frames",
            "public native function get cookie",
            "public native function set cookie",
            "public native function createElement",
            "public native function createTextNode",
            "public native function createComment",
            "public native function getElementById",
            "public native function getElementsByName",
            "public native function write",
            "public native function open",
            "public native function close",
            "public native function createEvent",
            "public native function createEventObject",
            "public native function dispatchEvent",
            "public native function get location",
            "public native function createRange",
            "public native function createDocumentFragment",
            "public native function get selection",
        ];
    }, [], ["js.Node"], "0.8.0", "0.8.1"
);
// class js.Element
joo.classLoader.prepare("package js",
    "public class Element extends js.Node", 2, function ($$private) {
        ;
        return[
            "public native function get id",
            "public native function set id",
            "public native function get tagName",
            "public native function get ownerDocument",
            "public native function get contentWindow",
            "public native function get innerHTML",
            "public native function set innerHTML",
            "public native function get outerHTML",
            "public native function set outerHTML",
            "public native function get style",
            "public native function get runtimeStyle",
            "public native function get filters",
            "public native function get offsetLeft",
            "public native function get offsetTop",
            "public native function get offsetWidth",
            "public native function get offsetHeight",
            "public native function get offsetParent",
            "public native function get clientWidth",
            "public native function get clientHeight",
            "public native function get className",
            "public native function set className",
            "public native function get scrollLeft",
            "public native function set scrollLeft",
            "public native function get scrollTop",
            "public native function set scrollTop",
            "public native function focus",
            "public native function select",
            "public native function get attributes",
            "public native function mergeAttributes",
            "public native function get htmlFor",
            "public native function set htmlFor",
            "public native function get scopeName",
            "public native function getAttribute",
            "public native function removeAttribute",
            "public native function get title",
            "public native function get defaultChecked",
            "public native function set defaultChecked",
            "public native function get tBodies",
            "public native function get rows",
            "public native function get cells",
            "public native function get name",
            "public native function set name",
            "public native function get value",
            "public native function set value",
            "public native function get defaultValue",
            "public native function set defaultValue",
            "public native function get checked",
            "public native function set checked",
            "public native function get disabled",
            "public native function set disabled",
            "public native function get selectedIndex",
            "public native function set selectedIndex",
            "public native function get href",
            "public native function set href",
            "public native function get target",
            "public native function set target",
            "public native function get colSpan",
            "public native function set colSpan",
            "public native function get rowSpan",
            "public native function set rowSpan",
            "public native function get selectionStart",
            "public native function set selectionStart",
            "public native function get selectionEnd",
            "public native function set selectionEnd",
            "public native function scrollIntoView",
            "public native function createTextRange",
            "public native function createControlRange",
        ];
    }, [], ["js.Node"], "0.8.0", "0.8.1"
);
// class js.Event
joo.classLoader.prepare("package js",
    "public class Event", 1, function ($$private) {
        ;
        return[
            "public native function get type",
            "public native function preventDefault",
            "public native function stopPropagation",
            "public native function get pageX",
            "public native function set pageX",
            "public native function get pageY",
            "public native function set pageY",
            "public native function get clientX",
            "public native function get clientY",
            "public native function get screenX",
            "public native function get screenY",
            "public native function get keyCode",
            "public native function get fromElement",
            "public native function get toElement",
            "public native function get target",
            "public native function set target",
            "public native function get relatedTarget",
            "public native function set relatedTarget",
            "public native function get shiftKey",
            "public native function get shiftLeft",
            "public native function get ctrlKey",
            "public native function get ctrlLeft",
            "public native function get altKey",
            "public native function get metaKey",
            "public native function get srcElement",
            "public native function get returnValue",
            "public native function set returnValue",
            "public native function get cancelBubble",
            "public native function set cancelBubble",
            "public native function get touches",
            "public native function initMouseEvent",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.HTMLAudioElement
joo.classLoader.prepare("package js",
    "public class HTMLAudioElement extends js.HTMLElement", 4, function ($$private) {
        ;
        return[
            "public native function get src",
            "public native function set src",
            "public native function canPlayType",
            "public native function load",
            "public native function play",
            "public native function pause",
        ];
    }, [], ["js.HTMLElement"], "0.8.0", "0.8.1"
);
// class js.HTMLCanvasElement
joo.classLoader.prepare("package js",
    "public class HTMLCanvasElement extends js.HTMLElement", 4, function ($$private) {
        ;
        return[
            "public native function get width",
            "public native function set width",
            "public native function get height",
            "public native function set height",
            "public native function toDataURL",
            "public native function getContext",
        ];
    }, [], ["js.HTMLElement"], "0.8.0", "0.8.1"
);
// class js.HTMLElement
joo.classLoader.prepare("package js",
    "public class HTMLElement extends js.Element", 3, function ($$private) {
        ;
        return[
        ];
    }, [], ["js.Element"], "0.8.0", "0.8.1"
);
// class js.HTMLImageElement
joo.classLoader.prepare("package js",
    "public class HTMLImageElement extends js.HTMLElement", 4, function ($$private) {
        ;
        return[
            "public native function get src",
            "public native function set src",
            "public native function get complete",
            "public native function get width",
            "public native function set width",
            "public native function get height",
            "public native function set height",
        ];
    }, [], ["js.HTMLElement"], "0.8.0", "0.8.1"
);
// class js.HTMLScriptElement
joo.classLoader.prepare("package js",
    "public class HTMLScriptElement extends js.HTMLElement", 4, function ($$private) {
        ;
        return[
            "public native function get src",
            "public native function set src",
            "public native function get type",
            "public native function set type",
        ];
    }, [], ["js.HTMLElement"], "0.8.0", "0.8.1"
);
// class js.IESelection
joo.classLoader.prepare("package js",
    "public interface IESelection", 1, function ($$private) {
        ;
        return[, , , , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Image
joo.classLoader.prepare("package js",
    "public class Image extends js.HTMLImageElement", 5, function ($$private) {
        ;
        return[
        ];
    }, [], ["js.HTMLImageElement"], "0.8.0", "0.8.1"
);
// class js.ImageData
joo.classLoader.prepare("package js",
    "public interface ImageData", 1, function ($$private) {
        ;
        return[, , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.KeyEvent
joo.classLoader.prepare("package js",
    "public class KeyEvent extends js.Event", 2, function ($$private) {
        ;
        return[
            "public static const", {DOM_VK_CANCEL:3},
            "public static const", {DOM_VK_HELP:6},
            "public static const", {DOM_VK_BACK_SPACE:8},
            "public static const", {DOM_VK_TAB:9},
            "public static const", {DOM_VK_CLEAR:12},
            "public static const", {DOM_VK_RETURN:13},
            "public static const", {DOM_VK_ENTER:14},
            "public static const", {DOM_VK_SHIFT:16},
            "public static const", {DOM_VK_CONTROL:17},
            "public static const", {DOM_VK_ALT:18},
            "public static const", {DOM_VK_PAUSE:19},
            "public static const", {DOM_VK_CAPS_LOCK:20},
            "public static const", {DOM_VK_ESCAPE:27},
            "public static const", {DOM_VK_SPACE:32},
            "public static const", {DOM_VK_PAGE_UP:33},
            "public static const", {DOM_VK_PAGE_DOWN:34},
            "public static const", {DOM_VK_END:35},
            "public static const", {DOM_VK_HOME:36},
            "public static const", {DOM_VK_LEFT:37},
            "public static const", {DOM_VK_UP:38},
            "public static const", {DOM_VK_RIGHT:39},
            "public static const", {DOM_VK_DOWN:40},
            "public static const", {DOM_VK_PRINTSCREEN:44},
            "public static const", {DOM_VK_INSERT:45},
            "public static const", {DOM_VK_DELETE:46},
            "public static const", {DOM_VK_0:48},
            "public static const", {DOM_VK_1:49},
            "public static const", {DOM_VK_2:50},
            "public static const", {DOM_VK_3:51},
            "public static const", {DOM_VK_4:52},
            "public static const", {DOM_VK_5:53},
            "public static const", {DOM_VK_6:54},
            "public static const", {DOM_VK_7:55},
            "public static const", {DOM_VK_8:56},
            "public static const", {DOM_VK_9:57},
            "public static const", {DOM_VK_SEMICOLON:59},
            "public static const", {DOM_VK_EQUALS:61},
            "public static const", {DOM_VK_A:65},
            "public static const", {DOM_VK_B:66},
            "public static const", {DOM_VK_C:67},
            "public static const", {DOM_VK_D:68},
            "public static const", {DOM_VK_E:69},
            "public static const", {DOM_VK_F:70},
            "public static const", {DOM_VK_G:71},
            "public static const", {DOM_VK_H:72},
            "public static const", {DOM_VK_I:73},
            "public static const", {DOM_VK_J:74},
            "public static const", {DOM_VK_K:75},
            "public static const", {DOM_VK_L:76},
            "public static const", {DOM_VK_M:77},
            "public static const", {DOM_VK_N:78},
            "public static const", {DOM_VK_O:79},
            "public static const", {DOM_VK_P:80},
            "public static const", {DOM_VK_Q:81},
            "public static const", {DOM_VK_R:82},
            "public static const", {DOM_VK_S:83},
            "public static const", {DOM_VK_T:84},
            "public static const", {DOM_VK_U:85},
            "public static const", {DOM_VK_V:86},
            "public static const", {DOM_VK_W:87},
            "public static const", {DOM_VK_X:88},
            "public static const", {DOM_VK_Y:89},
            "public static const", {DOM_VK_Z:90},
            "public static const", {DOM_VK_CONTEXT_MENU:93},
            "public static const", {DOM_VK_NUMPAD0:96},
            "public static const", {DOM_VK_NUMPAD1:97},
            "public static const", {DOM_VK_NUMPAD2:98},
            "public static const", {DOM_VK_NUMPAD3:99},
            "public static const", {DOM_VK_NUMPAD4:100},
            "public static const", {DOM_VK_NUMPAD5:101},
            "public static const", {DOM_VK_NUMPAD6:102},
            "public static const", {DOM_VK_NUMPAD7:103},
            "public static const", {DOM_VK_NUMPAD8:104},
            "public static const", {DOM_VK_NUMPAD9:105},
            "public static const", {DOM_VK_MULTIPLY:106},
            "public static const", {DOM_VK_ADD:107},
            "public static const", {DOM_VK_SEPARATOR:108},
            "public static const", {DOM_VK_SUBTRACT:109},
            "public static const", {DOM_VK_DECIMAL:110},
            "public static const", {DOM_VK_DIVIDE:111},
            "public static const", {DOM_VK_F1:112},
            "public static const", {DOM_VK_F2:113},
            "public static const", {DOM_VK_F3:114},
            "public static const", {DOM_VK_F4:115},
            "public static const", {DOM_VK_F5:116},
            "public static const", {DOM_VK_F6:117},
            "public static const", {DOM_VK_F7:118},
            "public static const", {DOM_VK_F8:119},
            "public static const", {DOM_VK_F9:120},
            "public static const", {DOM_VK_F10:121},
            "public static const", {DOM_VK_F11:122},
            "public static const", {DOM_VK_F12:123},
            "public static const", {DOM_VK_F13:124},
            "public static const", {DOM_VK_F14:125},
            "public static const", {DOM_VK_F15:126},
            "public static const", {DOM_VK_F16:127},
            "public static const", {DOM_VK_F17:128},
            "public static const", {DOM_VK_F18:129},
            "public static const", {DOM_VK_F19:130},
            "public static const", {DOM_VK_F20:131},
            "public static const", {DOM_VK_F21:132},
            "public static const", {DOM_VK_F22:133},
            "public static const", {DOM_VK_F23:134},
            "public static const", {DOM_VK_F24:135},
            "public static const", {DOM_VK_NUM_LOCK:144},
            "public static const", {DOM_VK_SCROLL_LOCK:145},
            "public static const", {DOM_VK_COMMA:188},
            "public static const", {DOM_VK_PERIOD:190},
            "public static const", {DOM_VK_SLASH:191},
            "public static const", {DOM_VK_BACK_QUOTE:192},
            "public static const", {DOM_VK_OPEN_BRACKET:219},
            "public static const", {DOM_VK_BACK_SLASH:220},
            "public static const", {DOM_VK_CLOSE_BRACKET:221},
            "public static const", {DOM_VK_QUOTE:222},
            "public static const", {DOM_VK_META:224},
            "public native function initKeyEvent",
        ];
    }, [], ["js.Event"], "0.8.0", "0.8.1"
);
// class js.Location
joo.classLoader.prepare("package js",
    "public interface Location", 1, function ($$private) {
        ;
        return[, , , , , , , , , , , , , , , , , , , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Navigator
joo.classLoader.prepare("package js",
    "public class Navigator", 1, function ($$private) {
        ;
        return[
            "public native function get userAgent",
            "public native function get appName",
            "public native function get appCodeName",
            "public native function get appVersion",
            "public native function get cookieEnabled",
            "public native function get platform",
            "public native function get language",
            "public native function get systemLanguage",
            "public native function get mimeTypes",
            "public native function get plugins",
            "public native function get userLanguage",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Node
joo.classLoader.prepare("package js",
    "public class Node", 1, function ($$private) {
        ;
        return[
            "public static const", {ELEMENT_NODE:1},
            "public static const", {ATTRIBUTE_NODE:2},
            "public static const", {TEXT_NODE:3},
            "public static const", {CDATA_SECTION_NODE:4},
            "public static const", {ENTITY_REFERENCE_NODE:5},
            "public static const", {ENTITY_NODE:6},
            "public static const", {PROCESSING_INSTRUCTION_NODE:7},
            "public static const", {COMMENT_NODE:8},
            "public static const", {DOCUMENT_NODE:9},
            "public static const", {DOCUMENT_TYPE_NODE:10},
            "public static const", {DOCUMENT_FRAGMENT_NODE:11},
            "public static const", {NOTATION_NODE:12},
            "public static const", {DOCUMENT_POSITION_DISCONNECTED:1},
            "public static const", {DOCUMENT_POSITION_PRECEDING:2},
            "public static const", {DOCUMENT_POSITION_FOLLOWING:4},
            "public static const", {DOCUMENT_POSITION_CONTAINS:8},
            "public static const", {DOCUMENT_POSITION_CONTAINED_BY:16},
            "public static const", {DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:32},
            "public native function get nodeName",
            "public native function get localName",
            "public native function get namespaceURI",
            "public native function get nodeType",
            "public native function get nodeValue",
            "public native function get parentNode",
            "public native function get childNodes",
            "public native function get firstChild",
            "public native function get lastChild",
            "public native function get nextSibling",
            "public native function get previousSibling",
            "public native function setAttribute",
            "public native function removeChild",
            "public native function appendChild",
            "public native function insertBefore",
            "public native function replaceChild",
            "public native function cloneNode",
            "public native function getElementsByTagName",
            "public native function getElementsByTagNameNS",
            "public native function addEventListener",
            "public native function removeEventListener",
            "public native function attachEvent",
            "public native function detachEvent",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Range
joo.classLoader.prepare("package js",
    "public class Range", 1, function ($$private) {
        ;
        return[
            "public native function get collapsed",
            "public native function get commonAncestorContainer",
            "public native function get endContainer",
            "public native function get endOffset",
            "public native function get startContainer",
            "public native function get startOffset",
            "public native function setStart",
            "public native function setEnd",
            "public native function setStartBefore",
            "public native function setStartAfter",
            "public native function setEndBefore",
            "public native function setEndAfter",
            "public native function selectNode",
            "public native function selectNodeContents",
            "public native function collapse",
            "public native function cloneContents",
            "public native function deleteContents",
            "public native function extractContents",
            "public native function insertNode",
            "public native function surroundContents",
            "public static native function get END_TO_END",
            "public static native function get END_TO_START",
            "public static native function get START_TO_END",
            "public static native function get START_TO_START",
            "public native function compareBoundaryPoints",
            "public native function cloneRange",
            "public native function detach",
            "public native function comparePoint",
            "public native function createContextualFragment",
            "public native function isPointInRange",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Screen
joo.classLoader.prepare("package js",
    "public class Screen", 1, function ($$private) {
        ;
        return[
            "public native function get top",
            "public native function get left",
            "public native function get width",
            "public native function get height",
            "public native function get pixelDepth",
            "public native function get availTop",
            "public native function get availLeft",
            "public native function get availWidth",
            "public native function get availHeight",
            "public native function get colorDepth",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Selection
joo.classLoader.prepare("package js",
    "public interface Selection", 1, function ($$private) {
        ;
        return[, , , , , , , , , , , , , , , , , , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Style
joo.classLoader.prepare("package js",
    "public class Style", 1, function ($$private) {
        ;
        return[
            "public native function getPropertyValue",
            "public native function get cssText",
            "public native function set cssText",
            "public native function get azimuth",
            "public native function set azimuth",
            "public native function get background",
            "public native function set background",
            "public native function get backgroundAttachment",
            "public native function set backgroundAttachment",
            "public native function get backgroundColor",
            "public native function set backgroundColor",
            "public native function get backgroundImage",
            "public native function set backgroundImage",
            "public native function get backgroundPosition",
            "public native function set backgroundPosition",
            "public native function get backgroundRepeat",
            "public native function set backgroundRepeat",
            "public native function get border",
            "public native function set border",
            "public native function get borderCollapse",
            "public native function set borderCollapse",
            "public native function get borderColor",
            "public native function set borderColor",
            "public native function get borderSpacing",
            "public native function set borderSpacing",
            "public native function get borderStyle",
            "public native function set borderStyle",
            "public native function get borderTop",
            "public native function set borderTop",
            "public native function get borderRight",
            "public native function set borderRight",
            "public native function get borderBottom",
            "public native function set borderBottom",
            "public native function get borderLeft",
            "public native function set borderLeft",
            "public native function get borderTopColor",
            "public native function set borderTopColor",
            "public native function get borderRightColor",
            "public native function set borderRightColor",
            "public native function get borderBottomColor",
            "public native function set borderBottomColor",
            "public native function get borderLeftColor",
            "public native function set borderLeftColor",
            "public native function get borderTopStyle",
            "public native function set borderTopStyle",
            "public native function get borderRightStyle",
            "public native function set borderRightStyle",
            "public native function get borderBottomStyle",
            "public native function set borderBottomStyle",
            "public native function get borderLeftStyle",
            "public native function set borderLeftStyle",
            "public native function get borderTopWidth",
            "public native function set borderTopWidth",
            "public native function get borderRightWidth",
            "public native function set borderRightWidth",
            "public native function get borderBottomWidth",
            "public native function set borderBottomWidth",
            "public native function get borderLeftWidth",
            "public native function set borderLeftWidth",
            "public native function get borderWidth",
            "public native function set borderWidth",
            "public native function get bottom",
            "public native function set bottom",
            "public native function get captionSide",
            "public native function set captionSide",
            "public native function get clear",
            "public native function set clear",
            "public native function get clip",
            "public native function set clip",
            "public native function get color",
            "public native function set color",
            "public native function get content",
            "public native function set content",
            "public native function get counterIncrement",
            "public native function set counterIncrement",
            "public native function get counterReset",
            "public native function set counterReset",
            "public native function get cue",
            "public native function set cue",
            "public native function get cueAfter",
            "public native function set cueAfter",
            "public native function get cueBefore",
            "public native function set cueBefore",
            "public native function get cursor",
            "public native function set cursor",
            "public native function get direction",
            "public native function set direction",
            "public native function get display",
            "public native function set display",
            "public native function get elevation",
            "public native function set elevation",
            "public native function get emptyCells",
            "public native function set emptyCells",
            "public native function get cssFloat",
            "public native function set cssFloat",
            "public native function get font",
            "public native function set font",
            "public native function get fontFamily",
            "public native function set fontFamily",
            "public native function get fontSize",
            "public native function set fontSize",
            "public native function get fontSizeAdjust",
            "public native function set fontSizeAdjust",
            "public native function get fontStretch",
            "public native function set fontStretch",
            "public native function get fontStyle",
            "public native function set fontStyle",
            "public native function get fontVariant",
            "public native function set fontVariant",
            "public native function get fontWeight",
            "public native function set fontWeight",
            "public native function get height",
            "public native function set height",
            "public native function get left",
            "public native function set left",
            "public native function get letterSpacing",
            "public native function set letterSpacing",
            "public native function get lineHeight",
            "public native function set lineHeight",
            "public native function get listStyle",
            "public native function set listStyle",
            "public native function get listStyleImage",
            "public native function set listStyleImage",
            "public native function get listStylePosition",
            "public native function set listStylePosition",
            "public native function get listStyleType",
            "public native function set listStyleType",
            "public native function get margin",
            "public native function set margin",
            "public native function get marginTop",
            "public native function set marginTop",
            "public native function get marginRight",
            "public native function set marginRight",
            "public native function get marginBottom",
            "public native function set marginBottom",
            "public native function get marginLeft",
            "public native function set marginLeft",
            "public native function get markerOffset",
            "public native function set markerOffset",
            "public native function get marks",
            "public native function set marks",
            "public native function get maxHeight",
            "public native function set maxHeight",
            "public native function get maxWidth",
            "public native function set maxWidth",
            "public native function get minHeight",
            "public native function set minHeight",
            "public native function get minWidth",
            "public native function set minWidth",
            "public native function get orphans",
            "public native function set orphans",
            "public native function get outline",
            "public native function set outline",
            "public native function get outlineColor",
            "public native function set outlineColor",
            "public native function get outlineStyle",
            "public native function set outlineStyle",
            "public native function get outlineWidth",
            "public native function set outlineWidth",
            "public native function get overflow",
            "public native function set overflow",
            "public native function get padding",
            "public native function set padding",
            "public native function get paddingTop",
            "public native function set paddingTop",
            "public native function get paddingRight",
            "public native function set paddingRight",
            "public native function get paddingBottom",
            "public native function set paddingBottom",
            "public native function get paddingLeft",
            "public native function set paddingLeft",
            "public native function get page",
            "public native function set page",
            "public native function get pageBreakAfter",
            "public native function set pageBreakAfter",
            "public native function get pageBreakBefore",
            "public native function set pageBreakBefore",
            "public native function get pageBreakInside",
            "public native function set pageBreakInside",
            "public native function get pause",
            "public native function set pause",
            "public native function get pauseAfter",
            "public native function set pauseAfter",
            "public native function get pauseBefore",
            "public native function set pauseBefore",
            "public native function get pitch",
            "public native function set pitch",
            "public native function get pitchRange",
            "public native function set pitchRange",
            "public native function get playDuring",
            "public native function set playDuring",
            "public native function get position",
            "public native function set position",
            "public native function get quotes",
            "public native function set quotes",
            "public native function get richness",
            "public native function set richness",
            "public native function get right",
            "public native function set right",
            "public native function get size",
            "public native function set size",
            "public native function get speak",
            "public native function set speak",
            "public native function get speakHeader",
            "public native function set speakHeader",
            "public native function get speakNumeral",
            "public native function set speakNumeral",
            "public native function get speakPunctuation",
            "public native function set speakPunctuation",
            "public native function get speechRate",
            "public native function set speechRate",
            "public native function get stress",
            "public native function set stress",
            "public native function get tableLayout",
            "public native function set tableLayout",
            "public native function get textAlign",
            "public native function set textAlign",
            "public native function get textDecoration",
            "public native function set textDecoration",
            "public native function get textIndent",
            "public native function set textIndent",
            "public native function get textShadow",
            "public native function set textShadow",
            "public native function get textTransform",
            "public native function set textTransform",
            "public native function get top",
            "public native function set top",
            "public native function get unicodeBidi",
            "public native function set unicodeBidi",
            "public native function get verticalAlign",
            "public native function set verticalAlign",
            "public native function get visibility",
            "public native function set visibility",
            "public native function get voiceFamily",
            "public native function set voiceFamily",
            "public native function get volume",
            "public native function set volume",
            "public native function get whiteSpace",
            "public native function set whiteSpace",
            "public native function get widows",
            "public native function set widows",
            "public native function get width",
            "public native function set width",
            "public native function get wordSpacing",
            "public native function set wordSpacing",
            "public native function get zIndex",
            "public native function set zIndex",
            "public native function get opacity",
            "public native function set opacity",
            "public native function get filter",
            "public native function set filter",
            "public native function get WebkitTransform",
            "public native function set WebkitTransform",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Text
joo.classLoader.prepare("package js",
    "public class Text extends js.Node", 2, function ($$private) {
        ;
        return[
            "public native function get data",
            "public native function set data",
            "public native function appendData",
        ];
    }, [], ["js.Node"], "0.8.0", "0.8.1"
);
// class js.TextMetrics
joo.classLoader.prepare("package js",
    "public interface TextMetrics", 1, function ($$private) {
        ;
        return[,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.TextRange
joo.classLoader.prepare("package js",
    "public interface TextRange", 1, function ($$private) {
        ;
        return[, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.Window
joo.classLoader.prepare("package js",
    "public dynamic class Window", 1, function ($$private) {
        ;
        return[
            "public native function get top",
            "public native function get parent",
            "public native function get frameElement",
            "public native function get status",
            "public native function set status",
            "public native function get document",
            "public native function get navigator",
            "public native function get location",
            "public native function get event",
            "public native function open",
            "public native function focus",
            "public native function addEventListener",
            "public native function setTimeout",
            "public native function clearTimeout",
            "public native function setInterval",
            "public native function clearInterval",
            "public native function alert",
            "public native function confirm",
            "public native function prompt",
            "public native function get innerWidth",
            "public native function get innerHeight",
            "public native function eval",
            "public native function getComputedStyle",
            "public native function get screen",
            "public native function moveTo",
            "public native function get closed",
            "public native function close",
            "public native function scrollTo",
            "public native function getSelection",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
// class js.XMLHttpRequest
joo.classLoader.prepare("package js",
    "public class XMLHttpRequest", 1, function ($$private) {
        ;
        return[
            "public native function XMLHttpRequest",
            "public native static function get UNSENT",
            "public native static function get OPENED",
            "public native static function get HEADERS_RECEIVED",
            "public native static function get LOADING",
            "public native static function get DONE",
            "public native function get readyState",
            "public native function get responseText",
            "public native function get responseXML",
            "public native function get status",
            "public native function get statusText",
            "public native function setRequestHeader",
            "public native function overrideMimeType",
            "public native function open",
            "public var", {onreadystatechange:null},
            "public native function addEventListener",
            "public native function removeEventListener",
            "public native function send",
            "public native function abort",
            "public native function getResponseHeader",
            "public native function getAllResponseHeaders",
        ];
    }, [], [], "0.8.0", "0.8.1"
);
