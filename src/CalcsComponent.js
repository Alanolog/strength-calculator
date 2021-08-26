import React, { useState, useEffect } from "react";
import LongMenu from "./Menu";
import OneRepMaxCalc from "./OneRepMaxCalc";
import BMRCalc from "./BMRCalc";
import FFMICalc from "./FFMICalc";
function CalcsComponent({ data }) {
  const [CurrOption, setCurrOption] = useState("OneRepMaxCalc");

  useEffect(() => {}, [CurrOption]);
  return (
    <>
      <div style={{ width: "100%", marginBottom: 20, display: "flex" }}>
        <LongMenu setCurrOption={setCurrOption} />
        <a
          style={{
            display: "block",
            float: "right",
            paddingRight: "5%",
            textAlign: "right",
            width: "50%",
            fontWeight: "600",
            color: "#3f51b5",
            paddingTop: "2%",
            textDecoration: "none",
          }}
          href="./index.html"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          Wyloguj
        </a>
      </div>
      {CurrOption === "OneRepMaxCalc" ? <OneRepMaxCalc /> : null}
      {CurrOption === "BMRCalc" ? <BMRCalc data={data} /> : null}
      {CurrOption === "FFMICalc" ? <FFMICalc /> : null}
    </>
  );
}
export default CalcsComponent;
