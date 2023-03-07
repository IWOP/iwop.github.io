import {
    Section,
    SectionNumber,
    SectionTitle,
    SectionContent,
    Bold,
    Children,
    LeftContainer,
} from "../styles/section";

import styled from "@emotion/styled";

const ProjectData = [
    {
        name: "MZ++ - 주현명",
        image: "/해커톤 참가작 - MZ++.png",
    },
    {
        name: "선린 홈페이지 리메이크 - 주현명",
        image: "/선린인터넷고 홈페이지 리메이크.png",
    },
    {
        name: "Calculator - 이기훈",
        image: "/Calculator.png",
    },
    {
        name: "InCommu - 김효헌",
        image: "/InCommu.png",
    },
    {
        name: "Ingopass - 주현명",
        image: "/Ingopass.png",
    },
    {
        name: "plannunity - 나제원",
        image: "/pannunity.png",
    },
    {
        name: "yeshow - 주현명",
        image: "/yeshow.png",
    },
    {
        name: "Todo - 윤도현",
        image: "/Todo.png",
    },
    {
        name: "sunrinet - 박현성",
        image: "/sunrinet.png",
    },
    {
        name: "MyDaily - 이혜린",
        image: "/MyDaily.png",
    },
];

const ProjectList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 13px;
    height: 670px;
    overflow: scroll;
    margin-top: 20px;
    @media screen and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
        height: 1000px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        height: 658px;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 7px;
    }
`;

const ProjectPreview = styled.img`
    width: 100%;
    height: 100%;
    background-position: center;
`;

const ProjectBox = styled.div`
    width: 290px;
    height: 173px;
    background: #353535;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        width: 157px;
        height: 93px;
    }
`;

const ProjectName = styled.div`
    font-family: "Gmarket Sans TTF";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 14px;
    }
`;

const ProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: flex-start;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    @media screen and (max-width: 767px) {
        gap: 10px;
    }
`;

const Project = () => (
    <Section>
        <Children>
            <LeftContainer>
                <SectionNumber>04.</SectionNumber>
                <SectionTitle>PROJECTS</SectionTitle>
                <SectionContent>
                    아이왑 부원들이 만들어온 작품 목록입니다.
                </SectionContent>
                <ProjectList>
                    {ProjectData.map((v, i) => (
                        <ProjectItem key={i}>
                            <ProjectBox>
                                <ProjectPreview src={v.image} />
                            </ProjectBox>

                            <ProjectName>{v.name}</ProjectName>
                        </ProjectItem>
                    ))}
                </ProjectList>
            </LeftContainer>
        </Children>
    </Section>
);

export default Project;
