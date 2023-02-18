import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-width: 1000px;
  justify-content: center;
  width: 100%;
  height: 960px;
  background-image: url("./Untitled-1.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Box = styled.div`
  width: 100%;
  max-width: 1180px;
  min-width: 1000px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  min-width: 1000px;
  height: 100px;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  min-width: 1000px;
  z-index: 1;
`;

function Page1() {
  function toSwap() {
    window.open("https://www.sushi.com/swap", "_blank");
  }

  const handleClickScroll = () => {
    window.scrollTo({ top: 3628, behavior: "smooth" });
  };

  return (
    <Container>
      <Box>
        <Bar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 4,
            }}
          >
            <img
              src={"./logo.png"}
              style={{
                height: "60px",
                width: "60px",
              }}
              alt="logo"
            />
            <div
              style={{
                fontSize: "30px",
                color: "white",
                fontFamily: "impact",
              }}
            >
              ArbDoge
            </div>
          </div>
          <div>
            <a
              href="https://t.me/ArbdogeOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"./tele.png"}
                style={{
                  height: "40px",
                  width: "40px",
                }}
                alt="logo"
              />
            </a>

            <a
              href="https://twitter.com/ArbDoge"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={"./twitter.png"}
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "22px",
                }}
                alt="logo"
              />
            </a>
          </div>
        </Bar>
        <MainPage>
          <div>
            <img
              src={"meme pic.png"}
              style={{
                height: "800px",
                width: "800px",
                top: "60px",
                objectFit: "cover",
                position: "absolute",
                zIndex: "3",
                // backgroundColor: "red",
              }}
              alt="mascot"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              paddingTop: "40px",
              paddingRight: "70px",
            }}
          >
            <div
              style={{
                fontSize: "96px",
                color: "white",
                fontFamily: "impact",
              }}
            >
              ArbDoge
            </div>
            <div style={{ fontSize: "25px", color: "white" }}>
              Meet the #1 Meme Coin
            </div>
            <div style={{ fontSize: "25px", color: "white" }}>
              Powered by Arbitrum!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "26px",
              }}
            >
              <button
                style={{
                  fontSize: "18px",
                  color: "white",
                  height: "70px",
                  width: "180px",
                  backgroundColor: "#05a0dd",
                  borderRadius: "10px",
                  marginRight: "16px",
                  border: "1px solid #05a0dd",
                  outline: "none",
                  cursor: "pointer",
                }}
                onClick={toSwap}
              >
                Buy Now
              </button>

              <img
                src={"./logo.png"}
                style={{
                  height: "70px",
                  width: "70px",
                  backgroundColor: "#C0EDFF",
                  border: "2px solid #05a0dd",
                  borderRadius: "10px",
                }}
                alt="logo"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "white",
                  textDecoration: "underline",
                  marginRight: "16px",
                  cursor: "pointer",
                }}
                onClick={handleClickScroll}
              >
                How to buy
              </div>
              <a
                href="https://bridge.arbitrum.io/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    fontSize: "16px",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  Bridge to Arbitrum
                </div>
              </a>
            </div>
            <img
              src={"./coin.png"}
              alt="coin"
              style={{
                position: "relative",
                left: "-40px",
                top: "120px",
                zIndex: "3",
              }}
              height="220px"
              width="220px"
            />
          </div>
        </MainPage>
      </Box>
    </Container>
  );
}

export default Page1;
