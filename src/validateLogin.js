import validator from "validator";
import Swal from "sweetalert2";
function validateEmail(email) {
  if (!validator.isEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Niestety to nie jest poprawny email!",
    });
    return false;
  }
}
function validatePassword(password) {
  if (password.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text: "Hasło jest za krótkie!",
    });
    return false;
  }
}
function validateLogin(email, password) {
  if (validateEmail(email) === false) return false;
  if (validatePassword(password) === false) return false;
}
export default validateLogin;
