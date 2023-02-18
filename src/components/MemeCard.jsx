import React from "react";

function MemeCard(props) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        minWidth: "1000px",
        zIndex: 4,
        left: "103px",
        top: "29px",
        marginBottom: "41px",
      }}
    >
      <img
        style={{
          width: "255px",
          height: "255px",
          borderRadius: "20px",
          marginRight: "40px",
        }}
        src={props.src}
        alt="meme"
      />
      <div style={{ position: "relative", top: "33px" }}>
        <div
          style={{
            color: "white",
            fontSize: "39px",
            fontFamily: "impact",
            paddingBottom: "20px",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            color: "white",
            fontSize: "18px",
            maxWidth: "570px",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MemeCard;
