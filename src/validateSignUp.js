import validator from "validator";
import Swal from "sweetalert2";

function validateEmail(email, email2) {
  if (!validator.isEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Niestety to nie jest poprawny email!",
    });
    return false;
  }
  if (!validator.equals(email, email2)) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Emaile nie są takie same!",
    });
    return false;
  }
}
function validatePassword(password, password2) {
  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Hasło jest za krótkie!",
    });
    return false;
  }
  if (!validator.equals(password, password2)) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Hasła nie są takie same!",
    });
    return false;
  }
}
function validateSignUp(email, email2, password, password2) {
  validateEmail(email, email2);
  validatePassword(password, password2);
}
export default validateSignUp;
