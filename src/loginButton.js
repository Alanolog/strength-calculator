import Swal from "sweetalert2";
import { db, auth } from "./firebase";
import validateLogin from "./validateLogin";
function loginButton(email, password, setLogin) {
  if (validateLogin(email, password) === false) {
    return;
  }
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = auth.currentUser;
      const userData = {
        lastLogin: Date.now(),
      };
      db.collection("users").doc(user.uid).update(userData);
      Swal.fire({
        title: "Zalogowałeś się na konto",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      setLogin(true, user.uid);
    })
    .catch((err) => {
      if (err.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Nie znaleziono użytkownika z takim emailem!",
        });
      } else if (err.code === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Podałeś złe hasło!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: err.code,
          text: err.message,
        });
      }
      setLogin(false);
    });
  return;
}
export default loginButton;
