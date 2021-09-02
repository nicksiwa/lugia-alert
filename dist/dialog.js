"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogStyle = void 0;
var Style;
(function (Style) {
    Style["Primary"] = "primary";
    Style["Secondary"] = "secondary";
    Style["Info"] = "info";
    Style["Warning"] = "warning";
    Style["Danger"] = "danger";
})(Style || (Style = {}));
function dialogStyle(style) {
    switch (style) {
        case Style.Primary:
            return {
                icon: "",
                confirmButton: "lugia-btn--primary",
            };
        case Style.Secondary:
            return {
                icon: "",
                confirmButton: "lugia-btn--secondary",
            };
        case Style.Info:
            return {
                icon: "",
                confirmButton: "lugia-btn--info",
            };
        case Style.Warning:
            return {
                icon: "",
                confirmButton: "lugia-btn--warning",
            };
        case Style.Danger:
            return {
                icon: "",
                confirmButton: "lugia-btn--danger",
            };
        default:
            return {
                icon: "",
                confirmButton: "lugia-btn--primary",
            };
    }
}
exports.dialogStyle = dialogStyle;
//# sourceMappingURL=dialog.js.map