import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const slideIn = keyframes`
  0% {
      margin-top: 0px;
  }
  50% {
      margin-top: 40px;
  }
  100% {
      margin-top: 0px;
  }
`;

export const SectionNumber = styled.div`
    width: 40px;
    display: flex;
    justify-content: flex-start;
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: -0.08em;
    background: linear-gradient(90deg, #45f075 0.93%, #2746ed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
`;

export const Section = styled.div`
    background: #1c1c1c;
    width: 100vw;
    min-height: 100vh;
    padding: 300px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1023px) {
        padding: 200px 0px;
    }
    @media screen and (max-width: 767px) {
        padding: 150px 0px;
    }
`;

export const Children = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1023px) {
        width: calc(100% - 70px);
    }
    @media screen and (max-width: 767px) {
        width: calc(100% - 70px);
    }
`;

export const SectionTitle = styled.div`
    font-family: "Gmarket Sans TTF";
    font-weight: 700;
    overflow: auto;
    font-size: 36px;
    line-height: 150%;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    text-align: left;
    margin-top: 5px;
    color: #ffffff;
    @media screen and (max-width: 1023px) {
        font-size: 25px;
    }
    @media screen and (max-width: 767px) {
        font-size: 20px;
        width: 100%;
    }
`;

export const SectionContent = styled.div`
    width: 669px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: left;
    line-height: 150%;
    color: #ffffff;
    margin-top: 44px;
    overflow: auto;
    @media screen and (max-width: 1023px) {
        width: calc(100% - 100px);
        font-size: 20px;
    }
    @media screen and (max-width: 767px) {
        margin-top: 20px;
        width: 100%;
        font-size: 16px;
    }
`;

export const Bold = styled.span`
    color: #45f075;
`;

export const Logo = styled.img`
    animation: ${slideIn} 1s ease-in-out infinite;
    width: 353px;
    @media screen and (max-width: 1023px) {
        width: 250px;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const Logo2 = styled.img`
    animation: ${slideIn} 1s ease-in-out infinite;
    height: 258px;
    @media screen and (max-width: 1023px) {
        height: 250px;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const LeftContainer = styled.div`
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
