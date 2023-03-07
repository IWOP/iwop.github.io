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

const Introduce = () => (
    <Section>
        <Children>
            <LeftContainer>
                <SectionNumber>01.</SectionNumber>
                <SectionTitle>INTRODUCE</SectionTitle>
                <SectionContent>
                    IWOP은 2001년 설립된
                    <Bold> 소프트웨어과 유일의 웹 개발 동아리</Bold>로, 지금까지
                    지속적으로 우수한 실적을 내며 소프트웨어과 학생들의 웹 개발
                    역량을 한층 높여왔습니다.
                    <br />
                    <br />
                    또한 IWOP은
                    <Bold> 소프트웨어과에서 가장 오래된 동아리</Bold>
                    로서, 다양한 경험과 노하우를 쌓아온 경험있는 동아리입니다.
                    IWOP은 최신 기술을 적용하여 창의적이고 혁신적인 웹 개발
                    프로젝트를 수행하며, 학교 내외에서 다양한 수상과 입상 경력을
                    쌓고 있습니다.
                    <br />
                    <br />
                    많은 부원들이 IWOP에서 성장하고, 성공의 발판을 마련했습니다.
                    함께 IWOP에서 멋진 경험과 기술을 쌓아나가 보시길 바랍니다.
                </SectionContent>
            </LeftContainer>
            <Logo src="/logo.svg" alt="" />
        </Children>
    </Section>
);

export default Introduce;
