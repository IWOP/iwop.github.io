import {
    Section1,
    IndexSubtitle,
    IndexTitle,
    IndexTitleV2,
    Letter,
    IndexHashtag,
} from "../styles/welcome";

const Welcome = () => {
    return (
        <Section1>
            <IndexSubtitle>남들보다 많이 앞선다는 것</IndexSubtitle>
            <IndexTitle>선린인터넷고등학교 웹 개발 전문 동아리</IndexTitle>
            <IndexTitleV2>
                <span>
                    <Letter>I</Letter>NTERNET
                </span>
                <span>
                    <Letter>W</Letter>ORLD
                </span>
                <span>
                    <Letter>O</Letter>PERATION
                </span>
                <span>
                    <Letter>P</Letter>EOPLE
                </span>
            </IndexTitleV2>
            <IndexHashtag>#서버 #프론트 #웹개발 #UI/UX</IndexHashtag>
        </Section1>
    );
};

export default Welcome;
