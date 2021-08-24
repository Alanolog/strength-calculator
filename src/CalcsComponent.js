import React, { useState, useEffect } from "react";
import LongMenu from "./Menu";
import OneRepMaxCalc from "./OneRepMaxCalc";
function CalcsComponent({ data }) {
  const [CurrOption, setCurrOption] = useState("OneRepMaxCalc");

  useEffect(() => {}, [CurrOption]);
  return (
    <>
      <div style={{ width: "100%", marginBottom: 20, display: "flex" }}>
        <LongMenu setCurrOption={setCurrOption} />
        <h3
          style={{
            float: "right",
            paddingRight: "5%",
            width: "50%",
            fontWeight: "600",
            color: "#3f51b5",
          }}
        >
          {data.email}
        </h3>
      </div>
      {CurrOption === "OneRepMaxCalc" ? <OneRepMaxCalc /> : null}
    </>
  );
}
export default CalcsComponent;
