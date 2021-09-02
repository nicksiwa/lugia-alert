import Swal from "sweetalert2";
import { dialogStyle } from "./dialog";

interface ILugiaAlert {
  start: Function;
}

const confirmed = (element: HTMLElement, result: any) => {
  if (result.value) {
    element.removeAttribute("data-confirm");
    element.click();
  }
};

function showConfirmationDialog(element: HTMLElement) {
  const title = element.getAttribute("data-confirm");
  const description = element.getAttribute("data-description");
  const style = dialogStyle(element.getAttribute("data-style"));
  const confirmButtonText = element.getAttribute("data-confirm-button-text");
  const cancelButtonText = element.getAttribute("data-cancel-button-text");

  const swal = Swal.mixin({
    customClass: {
      confirmButton: `lugia-btn lugia-btn--confirm ${style.confirmButton}`,
      cancelButton: "lugia-btn lugia-btn--cancel lugia-btn--ghost",
      popup: "lugia-popup",
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
    .then((result) => {
      confirmed(element, result);
    });
}

function handleConfirm(element: PointerEvent, Rails: any): void {
  Rails.stopEverything(element);
  showConfirmationDialog(element.target as HTMLElement);
}

const LugiaAlert: ILugiaAlert = {
  start: function (Rails: any) {
    Rails.delegate(
      document,
      "[data-confirm]",
      "click",
      function (element: PointerEvent) {
        handleConfirm(element, Rails);
      }
    );
  },
};

export default LugiaAlert;
