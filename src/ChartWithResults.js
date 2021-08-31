import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { Line } from "react-chartjs-2";
import setDataInState from "./setDataInStateChart";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import showDataInChart from "./showDataInChart";
function ChartWithResults() {
  let dates = [];
  let weights = [];
  const x = {
    labels: [...dates],
    datasets: [
      {
        label: "Przysiad ze sztangą",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [...weights],
      },
    ],
  };

  const userUID = auth.currentUser.uid;
  const options = ["Przysiad ze sztangą", "Martwy ciąg", "Wyciskanie leżąc"];

  const [data, setData] = useState([]);
  const [state, setState] = useState(x);
  const [option, setOption] = useState(`${options[1]}`);
  useEffect(() => {
    setDataInState(userUID, option, setData);
    showDataInChart({ data: data, option: option }, setState);
  }, [option]);
  return (
    <>
      <form style={{ width: "100%", marginTop: 20, marginBottom: 20 }}>
        <InputLabel id="label">Wybierz bój</InputLabel>
        <Select
          style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
          labelId="label"
          id="select"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          {options.map((el, i) => {
            return (
              <MenuItem value={el} key={i}>
                {el}
              </MenuItem>
            );
          })}
        </Select>
      </form>
      {state !== x ? (
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
      ) : null}
    </>
  );
}
export default ChartWithResults;
