import { db } from "./firebase";
import sortDataByDate from "./sortDataByDate";
function setDataInState(userUID, option, setData, setState) {
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
    .then(() => {
      let dates = [];
      let weights = [];
      dates = data.map((el) => {
        let date = new Date(el.date);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      });
      weights = data.map((el) => {
        return el.estimatedMax;
      });
      setState({
        labels: [...dates],
        datasets: [
          {
            label: option,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 1,
            data: [...weights],
          },
        ],
      });
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
export default setDataInState;
