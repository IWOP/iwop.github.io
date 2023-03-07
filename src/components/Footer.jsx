import styled from "@emotion/styled";

const Layout = styled.footer`
    width: 100vw;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #292929;
    @media screen and (max-width: 767px) {
        height: auto;
        padding: 60px 0;
    }
`;

const Children = styled.div`
    width: 1200px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1023px) {
        width: calc(100% - 70px);
        height: 279px;
    }
    @media screen and (max-width: 767px) {
        width: calc(100% - 70px);
        height: auto;
        gap: 26px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        height: auto;
        gap: 10px;
        flex-direction: column;
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 58px;
    height: 100%;
    @media screen and (max-width: 767px) {
        gap: 37px;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 767px) {
        height: auto;
        gap: 18px;
    }
`;

const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media screen and (max-width: 767px) {
        gap: 10px;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 36px */

    text-align: center;
    letter-spacing: -0.03em;

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        text-align: left;
    }
`;

const Subtitle = styled.div`
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

const Text = styled.div`
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #b6b6b6;
    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

const Link = styled.a`
    font-weight: 500;
    text-decoration: none;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #b6b6b6;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #ffffff;
        opacity: 0.8;
        text-decoration: underline;
    }
    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

const Gr = styled.div`
    display: flex;
    gap: 58px;
    @media screen and (max-width: 767px) {
        gap: 37px;
    }
`;

const Logo = styled.img`
    width: 281px;
    height: 49px;
    @media screen and (max-width: 767px) {
        width: 235px;
        height: 46px;
    }
`;

const Column3 = styled(Column2)`
    @media screen and (max-width: 767px) {
        gap: 8px;
        flex-direction: row;
    }
`;

const Footer = () => (
    <Layout>
        <Children>
            <LeftContainer>
                <Title>소프트웨어과 웹 개발 전문 동아리</Title>
                <Logo src="footer.svg" alt="" />
            </LeftContainer>
            <RightContainer>
                <Column>
                    <Subtitle>외부 SNS</Subtitle>
                    <Column3>
                        <Link
                            href="https://www.facebook.com/sunrinIwop/"
                            target={"_blank"}
                        >
                            페이스북
                        </Link>
                        <Link
                            href="https://www.instagram.com/sunrin_iwop/"
                            target={"_blank"}
                        >
                            인스타그램
                        </Link>
                    </Column3>
                </Column>
                <Gr>
                    <Column>
                        <Subtitle>부장 주현명</Subtitle>
                        <Column2>
                            <Text>010-7658-9798</Text>
                            <Text>@m.xx.__ju</Text>
                        </Column2>
                    </Column>
                    <Column>
                        <Subtitle>쀼장 김송연</Subtitle>
                        <Column2>
                            <Text>010-2022-7943</Text>
                            <Text>@silsu_ro</Text>
                        </Column2>
                    </Column>
                </Gr>
            </RightContainer>
        </Children>
    </Layout>
);

export default Footer;
