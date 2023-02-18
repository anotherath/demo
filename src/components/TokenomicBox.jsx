import React from "react";

function TokenomicBox(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#05a0dd",
        borderRadius: "10px",
        width: "230px",
        height: "155px",
      }}
    >
      <div
        style={{
          fontSize: "19px",
          color: "white",
          fontWeight: "500",
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          fontSize: "40px",
          color: "white",
        }}
      >
        {props.percent}
      </div>
    </div>
  );
}

export default TokenomicBox;
