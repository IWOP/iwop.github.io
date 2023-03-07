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

const ApplyTitle = styled.div`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    margin-top: 40px;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 767px) {
        margin-top: 26px;
        font-size: 24px;
        line-height: 29px;
    }
`;

const QuestionGroup = styled.div`
    gap: 40px;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    text-align: left;
    @media screen and (max-width: 767px) {
        margin-top: 26px;
    }
`;

const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    @media screen and (max-width: 767px) {
        gap: 12px;
    }
`;

const QuestionTitle = styled.div`
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #45f075;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

const Answer = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    width: 766px;

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 16px;
        width: 100%;
    }
`;

const InfoGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

const InfoLabel = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #ffffff;
    @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        width: 100%;
        text-align: left;
    }
`;

const Info = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    color: #929292;
    @media screen and (max-width: 767px) {
        width: 100%;
        font-size: 18px;
        line-height: 150%;
        text-align: left;
    }
`;

const I = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    gap: 15px;
    @media screen and (max-width: 767px) {
        margin-top: 72px;
    }
`;

const ApplyButton = styled.a`
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    background: #45f075;
    color: #000000;
    padding: 20px 52px;
    cursor: pointer;
    text-decoration: none;
    @media screen and (max-width: 767px) {
        padding: 8px 18px;
        font-size: 15px;
        line-height: 18px;
    }
    &:hover {
        opacity: 0.8;
    }
`;

const Button2 = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    font-size: 28px;
    line-height: 30px;
    background: #3f3f3f;
    color: #fff;
    padding: 20px 52px;

    @media screen and (max-width: 767px) {
        padding: 8px 18px;
        font-size: 15px;
        line-height: 18px;
    }
    &:hover {
        opacity: 0.8;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
    align-items: center;
    @media screen and (max-width: 767px) {
        gap: 10px;
    }
`;

const Apply = () => (
    <Section>
        <Children>
            <LeftContainer>
                <SectionNumber>05.</SectionNumber>
                <SectionTitle>APPLY</SectionTitle>
                <ApplyTitle>자주 하는 질문들</ApplyTitle>
                <QuestionGroup>
                    <Question>
                        <QuestionTitle>
                            Q1. 지원 자격이 어떻게 되나요?
                        </QuestionTitle>
                        <Answer>
                            개발자의 경우 선린인터넷고등학교 1학년에
                            재학중이라면 누구나 지원 가능합니다. 다만 디자이너의
                            경우 1학년 콘텐츠디자인과만 지원이 가능합니다.
                        </Answer>
                    </Question>
                    <Question>
                        <QuestionTitle>
                            Q2. 전공을 못해도 지원 가능한가요?
                        </QuestionTitle>
                        <Answer>
                            열심히 하려는 자세와 웹에 대한 흥미를 갖고 있다면
                            누구든지 지원 가능합니다.
                        </Answer>
                    </Question>
                    <Question>
                        <QuestionTitle>
                            Q3. 포트폴리오는 필수인가요?
                        </QuestionTitle>
                        <Answer>
                            포트폴리오는 여러분을 미리 알기 위한 하나의
                            장치입니다. 필수가 아니며 포트폴리오가 없더라도
                            동아리에서 열심히 할 의지만 있다면 합격하실 수
                            있습니다. 다만, 포트폴리오가 있는 것과 없는 것은
                            꽤나 차이가 큽니다.
                        </Answer>
                    </Question>
                </QuestionGroup>
                <I>
                    <InfoGroup>
                        <InfoLabel>모집 일정</InfoLabel>
                        <Info>
                            3월 8일 9시 ~ 3월 14일 오후 10시 / 디자이너 :
                            thisplay 참고{" "}
                        </Info>
                    </InfoGroup>
                    <InfoGroup>
                        <InfoLabel>면접 일정</InfoLabel>
                        <Info>3월 20일 예정(추후 공지)</Info>
                    </InfoGroup>
                    <ButtonGroup>
                        <ApplyButton
                            href="https://docs.google.com/forms/d/13qgZxzpnKWAB4kCSLYH_qS_CUkDUE5QgrmxZ1hFK48k/viewform?edit_requested=true"
                            target={"_blank"}
                        >
                            지원하기
                        </ApplyButton>
                        <Button2
                            href="https://thisplay.sunrin.graphics"
                            target={"_blank"}
                        >
                            디자이너 지원하기
                        </Button2>
                    </ButtonGroup>
                </I>
            </LeftContainer>
        </Children>
    </Section>
);

export default Apply;
