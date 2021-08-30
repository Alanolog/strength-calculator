import React, { useState, useEffect } from "react";
import { auth, getData } from "./firebase";
import { Line } from "react-chartjs-2";

function ChartWithResults({ option }) {
  const userUID = auth.currentUser.uid;
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(userUID, setData)
    setTimeout(sortDataByDate(data,option,setData),1000)
  }, [option]);
  function sortDataByDate(data,option,setData){
    let type =
    option === "Przysiad ze sztangą"
      ? data.squat
      : option === "Martwy ciąg"
      ? data.deadlift
      : option === "Wyciskanie leżąc"
      ? data.bench
      : null;
      setData(type.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0)))
  }

  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: option,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
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
