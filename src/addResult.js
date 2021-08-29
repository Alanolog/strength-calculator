import firebase from "firebase";
import calcOneRepMax from "./calcOneRepMax";
import Swal from "sweetalert2";
function addResult({ weight, reps, option }) {
  if (weight === "") {
    Swal.fire({
      icon: "error",
      title: "Puste pole!",
      text: "Wprowadź wage sztangi!",
    });
    return;
  }
  if (reps === "") {
    Swal.fire({
      icon: "error",
      title: "Puste pole!",
      text: "Wprowadź ilość powtórzeń!",
    });
    return;
  }
  let type =
    option === "Przysiad ze sztangą"
      ? "squat"
      : option === "Martwy ciąg"
      ? "deadlift"
      : option === "Wyciskanie leżąc"
      ? "bench"
      : null;
  if (option === null) {
    return "Błąd!";
  }
  let currTime = new Date();
  const userUID = firebase.auth().currentUser.uid;
  const max = calcOneRepMax(reps, weight);
  firebase
    .firestore()
    .collection("users")
    .doc(`${userUID}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        let data = doc.data()[type];
        firebase
          .firestore()
          .collection("users")
          .doc(`${userUID}`)
          .update({
            [type]: [
              ...data,
              {
                weight: weight,
                reps: reps,
                estimatedMax: max,
                date: Date.parse(currTime),
              },
            ],
          })
          .then(() => {
            Swal.fire({
              title: "Dodałeś wynik w boju :)",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      } else console.log("data don't exists");
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
export default addResult;
