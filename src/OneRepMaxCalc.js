import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
function OneRepMaxCalc() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [max, setMax] = useState("");

  function CalcOneRepMax() {
    if (reps < 8) {
      setMax(Math.round(weight * (36 / (37 - reps)) * 10) / 10);
    } else if (reps <= 10 && reps >= 8) {
      setMax(
        Math.round(
          ((weight * (1 + reps / 30) + weight * (36 / (37 - reps))) / 2) * 10
        ) / 10
      );
    } else {
      setMax(Math.round(weight * (1 + reps / 30) * 10) / 10);
    }
  }

  return (
    <>
      <form
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "1rem",
          border: "1px solid lightgray",
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Podniesiona waga"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Ilość powtórzeń"
          variant="outlined"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          type="number"
        />
        <Button variant="contained" color="primary" onClick={CalcOneRepMax}>
          Oblicz swój One Rep Max
        </Button>
      </form>
      {max === "" ? null : (
        <h3 style={{ color: "#3f51b5" }}>Twój one rep max wynosi: {max}kg</h3>
      )}
    </>
  );
}
export default OneRepMaxCalc;
