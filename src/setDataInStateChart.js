import { db } from "./firebase";
import sortDataByDate from "./sortDataByDate";
function setDataInState(userUID, option, setData) {
  let data = [];
  const docRef = db.collection("users").doc(`${userUID}`);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        setData(doc.data());
        data = doc.data();
        sortDataByDate(data, option, setData);
      } else console.log("data don't exists");
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
export default setDataInState;
