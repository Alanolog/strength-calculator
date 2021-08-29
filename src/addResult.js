import firebase from "firebase";
import calcOneRepMax from "./calcOneRepMax";
function addResult({ weight, reps, option }) {
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
  console.log(firebase.auth());
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
            console.log("Document successfully updated!");
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
