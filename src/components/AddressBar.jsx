import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  min-height: 54px;
  display: flex;
  background-color: #05a0dd;
  color: white;
  font-size: 17px;
  justify-content: center;
`;

function AddressBar() {
  return (
    <Container>
      <p>Contract Address: 0xF3645B1ccCFC083004fF552C625E495c26c025Bf</p>
    </Container>
  );
}

export default AddressBar;
