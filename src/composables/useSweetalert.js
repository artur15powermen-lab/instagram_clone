import Swal from "sweetalert2";

export function useSwal() {
  const toast = (text, icon = "success") =>
    Swal.fire({ toast: true, position: "top-end", icon, title: text,
                showConfirmButton: false, timer: 2500 });

  const confirm = async (text, confirmText = "Ha") =>
    (await Swal.fire({
      title: text,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: "Bekor qilish",
    })).isConfirmed;

  return { toast, confirm };
}