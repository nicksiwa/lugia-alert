"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var dialog_1 = require("./dialog");
var confirmed = function (element, result) {
    console.log(">>>>>", result);
    // if (result.value) {
    //   element.removeAttribute("data-confirm");
    //   element.click();
    // }
};
function showConfirmationDialog(element) {
    var title = element.getAttribute("data-confirm");
    var description = element.getAttribute("data-description");
    var style = (0, dialog_1.dialogStyle)(element.getAttribute("data-style"));
    var confirmButtonText = element.getAttribute("data-confirm-button-text");
    var cancelButtonText = element.getAttribute("data-cancel-button-text");
    var swal = sweetalert2_1.default.mixin({
        customClass: {
            confirmButton: "lugia-btn lugia-btn--confirm " + style.confirmButton,
            cancelButton: "lugia-btn lugia-btn--cancel lugia-btn--ghost",
            container: "lugia-container",
        },
        buttonsStyling: false,
    });
    swal
        .fire({
        title: title || "Are you sure?",
        text: description || "",
        showCancelButton: true,
        confirmButtonText: confirmButtonText || "Confirm",
        cancelButtonText: cancelButtonText || "Cancel",
        reverseButtons: true,
        showClass: {
            popup: "scale-up-center",
        },
        hideClass: {
            popup: "scale-down-center",
        },
    })
        .then(function (result) {
        confirmed(element, result);
    });
}
function handleConfirm(element, Rails) {
    Rails.stopEverything(element);
    showConfirmationDialog(element.target);
}
var LugiaAlert = {
    start: function (Rails) {
        Rails.delegate(document, "[data-confirm]", "click", function (element) {
            handleConfirm(element, Rails);
        });
    },
};
exports.default = LugiaAlert;
//# sourceMappingURL=index.js.map