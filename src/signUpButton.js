import Swal from "sweetalert2";
import { db, auth } from "./firebase";
import validateSignUp from "./validateSignUp";

function signUpButton(
  { email, email2, password, password2, sex, birthDate },
  setLogin
) {
  if (validateSignUp(email, email2, password, password2)) {
    window.location.reload();
  }
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = auth.currentUser;
      const userData = {
        email: email,
        sex: sex,
        birthDate: Date.parse(birthDate),
        lastLogin: Date.now(),
        bench: [],
        deadlift: [],
        squat: [],
      };
      db.collection("users").doc(user.uid).set(userData);
      Swal.fire({
        title: "Utworzyłeś konto",
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
      if (err.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Podany email jest już używany przez kogoś innego!",
        });
      } else if (err.code === "auth/weak-password") {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Hasło musi mieć co najmniej 6 liter!",
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
}
export default signUpButton;
