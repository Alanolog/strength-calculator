import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
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
    setDataInState(userUID, option, setData, setState);
  }, [option]);
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
