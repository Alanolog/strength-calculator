import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import sortDataByDate from "./sortDataByDate";
import { Line } from "react-chartjs-2";
function ChartWithResults({ option }) {
  const userUID = auth.currentUser.uid;
  const [data, setData] = useState([]);
  const [state, setState] = useState({
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
  useEffect(() => {
    setDataInState(userUID, setData);
  }, [option]);
  function setDataInState(userUID, setData, setState) {
    const docRef = db.collection("users").doc(`${userUID}`);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
          sortDataByDate(doc.data(), option, setData);
        } else console.log("data don't exists");
      })
      .then(() => {
        let dates = [];
        let weights = [];
        dates = data.map((el) => {
          let date = new Date(el.date);
          return `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`;
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

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Przewidywany One Rep Max",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
export default ChartWithResults;
