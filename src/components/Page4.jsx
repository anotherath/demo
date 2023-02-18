import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  width: 100%;
  background-image: url(./background.png);
`;

function Page4() {
  return (
    <Container id="11">
      <div
        style={{
          fontSize: "63px",
          color: "white",
          fontFamily: "impact",
          paddingBottom: "30px",
        }}
      >
        How to Buy
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "8px solid white",
          backgroundColor: "#05a0dd",
          width: "850px",
          height: "478px",
          fontFamily: "impact",
          color: "white",
          fontSize: "40px",
        }}
      >
        coming soon
        {/* <iframe
          width="850"
          height="478"
          src="https://www.youtube.com/embed/000al7ru3ms"
          title="Ð is for Ðogecoin"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </Container>
  );
}

export default Page4;
