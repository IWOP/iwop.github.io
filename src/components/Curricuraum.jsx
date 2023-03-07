import {
    Section,
    SectionNumber,
    SectionTitle,
    SectionContent,
    Bold,
    Children,
    Logo,
    LeftContainer,
} from "../styles/section";

const Curricuraum = () => (
    <Section>
        <Children>
            <LeftContainer>
                <SectionNumber>02.</SectionNumber>
                <SectionTitle>CURRICURAUM</SectionTitle>
                <SectionContent>
                    IWOP에서
                    <Bold> 개발자 역할군</Bold>은 웹을 구성하는 3개의 기술,
                    <Bold> HTML, CSS, JavaScript</Bold>에 대한 기초 교육을
                    제공하고 있습니다. 이후에는 최신 웹 개발 기술인
                    <Bold> React</Bold> 라이브러리를 다루며, 동적인 웹
                    애플리케이션을 구현하는 방법을 배웁니다. 또한 협업을 위해
                    버전 관리 도구인
                    <Bold> Git,Git Flow, GitKraken</Bold>
                    등을 배우게 됩니다.
                    <br />
                    <br />
                    디자이너 역할군은
                    <Bold> UI/UX</Bold>에 대한 개념을 이해하고,
                    <Bold> Figma</Bold> 프로그램을 다루는것에 대해 배우게 되며
                    이후 유명 서비스의 디자인을 모작해보는 프로젝트를 진행하고,
                    그 과정에서
                    <Bold> UI/UX</Bold> 디자인 경험을 늘려갑니다. 또한 직접
                    서비스의 UI/UX를 디자인해보는 실전 프로젝트도 진행합니다
                    <br />
                    <br />
                    따로 배우고 싶은 기술이 있다면 선배들이 직접 가르쳐주는
                    <Bold> 멘토링 시스템</Bold>도 운영하고 있습니다. 이를 통해
                    동아리원들은 보다 전문적인 기술을 습득하고,
                    <Bold> 성장할 수 있는 기회</Bold>를 제공받습니다. 함께
                    동아리 활동을 통해 뛰어난 개발자와 디자이너로 성장해 나가
                    보시길 바랍니다.
                </SectionContent>
            </LeftContainer>
            <Logo src="/code.svg" alt="" />
        </Children>
    </Section>
);

export default Curricuraum;
