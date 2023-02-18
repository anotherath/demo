import React from "react";
import styled from "styled-components";
import "./App.css";
import AddressBar from "./components/AddressBar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

const Container = styled.div`
  background-color: black;
  width: 100%;
  min-width: 1200px;
  height: fit-content;
`;

function App() {
  return (
    <>
      <Container>
        <AddressBar />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </Container>
    </>
  );
}

export default App;
