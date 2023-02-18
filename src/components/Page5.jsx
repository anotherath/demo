import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 327px;
  width: 100%;
`;

function Page5() {
  return (
    <Container>
      {/* <div
        style={{
          flex: 10,
          backgroundImage: "url(./moonDoge.jpg)",
          width: "100%",
        }}
      ></div> */}
      <div
        style={{
          flex: 10,
          backgroundColor: "#05a0dd",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            minWidth: "1080px",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            src={"./mascot.png"}
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              position: "relative",
              top: "124px",
              left: "50px",
              zIndex: "2",
            }}
            alt="mascot"
          />
          <div style={{ position: "relative", left: "-30px", top: "90px" }}>
            <div
              style={{ color: "white", fontSize: "38px", fontWeight: "500" }}
            >
              If you have any questions
            </div>
            <div
              style={{
                color: "white",
                fontSize: "17px",
                maxWidth: "400px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Come hang out with us on{" "}
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://t.me/ArbdogeGroup"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Telegram</strong>
              </a>{" "}
              where the team and our lovely community can help you find answers!
            </div>
            <div
              style={{
                color: "white",
                fontSize: "17px",
                paddingBottom: "20px",
              }}
            >
              E-mail: <strong>contact@arbdogcoin.com</strong>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 2,
          backgroundImage: `url(./background.png)`,
          position: "relative",
          zIndex: "3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Copyright © 2023 ArbDoge. All Rights Reserved
      </div>
    </Container>
  );
}

export default Page5;
