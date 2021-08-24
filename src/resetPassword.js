import Swal from "sweetalert2";
import { auth } from "./firebase";
function resetPassword(email) {
  auth.useDeviceLanguage();

  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      Swal.fire({
        title: "Wysłaliśmy ci przypomnienie hasła na email " + email,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    })
    .catch((err) => {
      if (err.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "podany email nie istnieje w zbiorze emaili",
        });
      } else if (err.code === "auth/invalid-email") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Podano źle sformatowany email",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: err.code,
          text: err.message,
        });
      }
    });
}

export default resetPassword;
