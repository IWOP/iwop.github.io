import styled from "@emotion/styled";

export const IndexSubtitle = styled.div`
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;

    letter-spacing: -0.08em;
    background: linear-gradient(90deg, #45f075 28.79%, #2746ed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media screen and (max-width: 1023px) {
    }
    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const IndexTitle = styled.div`
    margin-top: 27px;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.03em;

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-top: 20px;
        line-height: 150%;
    }
`;

export const IndexTitleV2 = styled.div`
    margin-top: 5px;
    font-family: "GmarketSansBold";
    font-weight: 700;
    font-size: 29px;
    line-height: 33px;
    color: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-top: 4px;
        width: 242px;
        height: 46px;
        gap: 8px;
        font-family: "Gmarket Sans TTF";
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        text-align: center;
    }
`;

export const Letter = styled.span`
    background: linear-gradient(
        180deg,
        #69f339 40.63%,
        #0066ff 87.5%,
        #0066ff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const Section1 = styled.div`
    background: #1c1c1c;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IndexHashtag = styled.div`
    margin-top: 42px;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    color: #6d6d6d;
    @media screen and (max-width: 767px) {
        font-size: 16px;
        margin-top: 33px;
    }
`;
