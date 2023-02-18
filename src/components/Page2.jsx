import React from "react";
import styled from "styled-components";
import TokenomicBox from "./TokenomicBox";
import MemeCard from "./MemeCard";

const Container = styled.div`
  height: fit-content;
  margin-top: -280px;
`;

const Curve = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 5vh;
  overflow: hidden;
  height: fit-content;
  width: 100%;
  background: transparent;
  z-index: 2;
  ::before {
    border-radius: 100% 100% 0 0;
    position: absolute;
    background-image: url("./background.png");
    bottom: 100px;
    right: -200px;
    left: -200px;
    content: "";
    top: 0;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1000px;
  margin-top: -110px;
  background-image: url("./background.png");
  height: fit-content;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 1000px;
`;

function Page2() {
  return (
    <Container>
      <Curve>
        <div
          style={{
            fontSize: "63px",
            color: "#05a0dd",
            fontFamily: "impact",
            zIndex: "3",
            marginTop: "120px",
          }}
        >
          About ArbDoge
        </div>

        <div
          style={{
            fontSize: "18px",
            color: "white",
            zIndex: "3",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          The ArbDoge project aims to introduce individuals to the Arbitrum
          ecosystem through its fun and friendly mascot,
          <br />
          ArbDoge!
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "white",
            zIndex: "3",
            textAlign: "center",
            paddingTop: "60px",
          }}
        >
          The project is community owned and managed, with strict limits on
          individual holdings to promote decentralization
          <br /> and widespread adoption.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "white",
            zIndex: "3",
            textAlign: "center",
            paddingTop: "60px",
          }}
        >
          By leveraging the power of memes and community-driven content
          creation, ArbDoge aims to increase awareness
          <br /> and understanding of the Arbitrum universe, serving as a guide
          and companion to all Arbinauts along the way!
        </div>
      </Curve>
      <Box>
        <div
          style={{
            fontSize: "39px",
            color: "white",
            textAlign: "center",
            paddingTop: "160px",
            fontFamily: "impact",
          }}
        >
          Tokenomics
        </div>
        <div
          style={{
            display: "flex",
            width: "782px",
            justifyContent: "space-between",
            paddingTop: "60px",
          }}
        >
          <TokenomicBox percent={"4%"}>TRANSACTION FEE</TokenomicBox>
          <TokenomicBox percent={"2%"}>MAX WALLET</TokenomicBox>
          <TokenomicBox percent={"1B"}>TOTAL SUPPLY</TokenomicBox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "60px",
          }}
        >
          <a>
            <div
              style={{
                fontSize: "16px",
                color: "white",
                paddingBottom: "20px",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              OWNERSHIP RENOUNCE
            </div>
          </a>

          <a>
            <div
              style={{
                fontSize: "16px",
                color: "white",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              LIQUIDITY LOCK
            </div>
          </a>
        </div>
        <img
          src={"./coin.png"}
          alt="coin"
          style={{
            position: "relative",
            left: "360px",
            zIndex: "3",
            transform: "rotate(45deg)",
          }}
          height="220px"
          width="220px"
        />
        <List>
          <img
            src={"./memeList.png"}
            style={{
              width: "1200px",
              position: "absolute",
              zIndex: 3,
            }}
            alt="list"
          />
          <MemeCard src={"./meme.png"} title={"Community"}>
            From the start, ArbDoge was designed to support a large number of
            smaller token holders, who will all participate in and benefit from
            the growth and development of the ArbDoge Community. All projects
            and initiatives will be community-led and will result in additional
            value being brought into the ArbDoge and Arbitrum ecosystems.
            Everyone is wel- come to join the community and help it grow!
          </MemeCard>
          <MemeCard src={"./meme 2.png"} title={"Dedication"}>
            Like the legendary Inu Hachiko, ArbDoge is here to be a guide and
            companion for every single community member as they explore the
            Arbitrum universe. ArbDoge is a loyal mascot for Arbitrum, and will
            introduce new participants to the blockchain's innovations with a
            warm smile and a helping hand!
          </MemeCard>
          <MemeCard src={"./meme 1.png"} title={"Fun!"}>
            Blockchain and cryptocurrency technology can be daunting and scary,
            but it doesn't have to be! ArbDoge will help everyone understand
            that crypto can be a space for creativity, collaboration, and
            connection. ArbDoge is a place where people's talents and skills can
            shine, and where everyone has something to enjoy!
          </MemeCard>
        </List>
        <img
          src={"./coin.png"}
          alt="coin"
          style={{
            position: "relative",
            left: "-440px",
            top: "80px",
            zIndex: "3",
            transform: "rotate(-45deg) scaleX(-1)",
            // transform: "",
          }}
          height="220px"
          width="220px"
        />
      </Box>
    </Container>
  );
}

export default Page2;
