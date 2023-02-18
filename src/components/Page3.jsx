import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
  background-color: #05a0dd;
`;

const File = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  height: 90px;
  width: 140px;
  border-top-right-radius: 40px;
  background-color: white;
  margin: 30px 0px 30px 0px;
`;

function Page3() {
  return (
    <Container>
      <div
        style={{
          fontSize: "63px",
          color: "white",
          fontFamily: "impact",
        }}
      >
        Whitepapper
      </div>
      <a>
        <File>file</File>
      </a>
      <div
        style={{
          fontSize: "63px",
          color: "white",
          fontFamily: "impact",
        }}
      >
        ArbDogeMap
      </div>
      <a>
        <File>file</File>
      </a>
    </Container>
  );
}

export default Page3;
