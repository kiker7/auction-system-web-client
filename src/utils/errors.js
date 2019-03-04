import {toast} from "react-toastify";

export function toastError(msg, error) {
  toast.error(msg + error, {
    autoClose: true
  });
}
