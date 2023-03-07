import styled from "@emotion/styled";

export const Year = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        filter: brightness(1.8);
    }
    @media screen and (max-width: 767px) {
        font-size: 22px;
        line-height: 26px;
    }
`;

export const YearSelectGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    gap: 26px;
    @media screen and (max-width: 767px) {
        margin-top: 20px;
        width: 188px;
        gap: 12px;
    }
`;

export const YearDisabled = styled(Year)`
    color: #585858;
`;

export const PrizeGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    gap: 36px;
    @media screen and (max-width: 767px) {
        margin-top: 26px;
        gap: 50px;
    }
`;

export const PrizeName = styled.div`
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 29px;
    line-height: 35px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #45f075;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const PrizeText = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */

    display: flex;
    align-items: center;

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const PrizeList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media screen and (max-width: 767px) {
        margin-top: 10px;
    }
`;
