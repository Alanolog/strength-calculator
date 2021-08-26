import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
import calcFFMI from "./calcFFMI";
function FFMICalc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BFPercentage, setBFPercentage] = useState("");
  const [FFMI, setFFMI] = useState("");
  const [normalizedFFMI, setNormalizedFFMI] = useState("");
  return (
    <>
      <h2 style={{ color: "#3f51b5", textAlign: "center" }}>Kalkulator BMR</h2>
      <form style={formStyle}>
        <TextField
          id="outlined-basic"
          label="Waga"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Wzrost w centymetrach"
          variant="outlined"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Procent tkanki tłuszczowej w organizmie"
          variant="outlined"
          value={BFPercentage}
          onChange={(e) => setBFPercentage(e.target.value)}
          type="number"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            calcFFMI(weight, height, BFPercentage, setFFMI, setNormalizedFFMI)
          }
        >
          Oblicz swoje FFMI
        </Button>
      </form>
      {FFMI !== "" ? (
        <>
          <p>Twoje FFMI wynosi {FFMI}</p>
          <p>Po normalizacji FFMI wynosi {normalizedFFMI}</p>
        </>
      ) : null}
    </>
  );
}
export default FFMICalc;
