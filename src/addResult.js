import firebase from "firebase";
import calcOneRepMax from "./calcOneRepMax";
function addResult({ weight, reps }) {
  const uid = firebase.auth().currentUser.uid;
  const max = calcOneRepMax(reps, weight);
  console.log(max);
}
export default addResult;
