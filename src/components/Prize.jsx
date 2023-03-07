import {
    Section,
    SectionNumber,
    SectionTitle,
    Children,
    Logo2,
    LeftContainer,
} from "../styles/section";

import {
    YearSelectGroup,
    Year,
    YearDisabled,
    PrizeGroup,
    PrizeName,
    PrizeList,
    PrizeText,
} from "../styles/prize";

import { useState } from "react";

const Prize = () => {
    const [year, setYear] = useState(2019);

    return (
        <Section>
            <Children>
                <LeftContainer>
                    <SectionNumber>03.</SectionNumber>
                    <SectionTitle>AWARDS</SectionTitle>
                    <YearSelectGroup>
                        {[2019, 2020, 2022].map((item, id) => {
                            if (item === year) {
                                return <Year key={id}>{item}</Year>;
                            } else {
                                return (
                                    <YearDisabled
                                        key={id}
                                        onClick={() => setYear(item)}
                                    >
                                        {item}
                                    </YearDisabled>
                                );
                            }
                        })}
                    </YearSelectGroup>
                    <PrizeGroup>
                        <div>
                            <PrizeName>모바일 콘텐츠 경진대회</PrizeName>
                            {year === 2020 && (
                                <PrizeList>
                                    <PrizeText>
                                        스테일메이트 - 대상 (방진혁)
                                    </PrizeText>
                                    <PrizeText>
                                        MoonShadow - 대상 (소성민)
                                    </PrizeText>
                                    <PrizeText>DROP - 대상 (이호준) </PrizeText>
                                    <PrizeText>
                                        따릉이스트 - 금상 (박종훈)
                                    </PrizeText>
                                </PrizeList>
                            )}
                            {year === 2019 && (
                                <PrizeList>
                                    <PrizeText>
                                        JustLance - 동상 (방진혁){" "}
                                    </PrizeText>
                                </PrizeList>
                            )}
                        </div>
                        <div>
                            <PrizeName>디지털 콘텐츠 경진대회</PrizeName>
                            {year === 2019 && (
                                <PrizeList>
                                    <PrizeText>
                                        Circles - 대상 (박종훈)
                                    </PrizeText>
                                    <PrizeText>
                                        Gangle - 은상 (김재현)
                                    </PrizeText>
                                    <PrizeText>Space - 동상 (염태민)</PrizeText>
                                </PrizeList>
                            )}
                            {year === 2020 && (
                                <PrizeList>
                                    <PrizeText>MBit - 금상 (염태민)</PrizeText>
                                    <PrizeText>UJS - 은상 (강성우)</PrizeText>
                                    <PrizeText>UJS - 은상 (김동희)</PrizeText>
                                    <PrizeText>UJS - 은상 (문정윤)</PrizeText>
                                    <PrizeText>WVCP - 은상 (배동인)</PrizeText>
                                    <PrizeText>Drain - 동상 (김재현)</PrizeText>
                                    <PrizeText>Drain - 동상 (김세희)</PrizeText>
                                </PrizeList>
                            )}
                            {year === 2022 && (
                                <PrizeList>
                                    <PrizeText>
                                        Membeder - 동상 (윤도현)
                                    </PrizeText>
                                </PrizeList>
                            )}
                        </div>
                        <div>
                            <PrizeName>기타</PrizeName>
                            {year === 2019 && (
                                <PrizeList>
                                    <PrizeText>
                                        박정우 - 제9회 서강대학교 게임/애니/만화
                                        아이디어 공모전 동상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 천하제일 코딩대회 동상
                                    </PrizeText>
                                    <PrizeText>
                                        최효승 - 천하제일 코딩대회 동상
                                    </PrizeText>
                                    <PrizeText>
                                        이성현 - 천하제일 코딩대회 동상
                                    </PrizeText>
                                    <PrizeText>
                                        최효승 - 천하제일 코딩
                                    </PrizeText>
                                    <PrizeText>
                                        이성현 - 프로그래밍 경시대회 은상
                                    </PrizeText>
                                    <PrizeText>
                                        이성현 - 선린 정보 알고리즘 경시대회
                                        동상
                                    </PrizeText>
                                    <PrizeText>
                                        박종훈 - 2019 스마틴 앱 챌린지 생활부분
                                        가작
                                    </PrizeText>
                                    <PrizeText>박종훈 - 앱잼 우수상 </PrizeText>
                                    <PrizeText>박종훈 - 선린톤 동상 </PrizeText>
                                    <PrizeText>
                                        김재현 - iot 공모전 은상{" "}
                                    </PrizeText>
                                    <PrizeText>
                                        김수빈 - iot 공모전 동상{" "}
                                    </PrizeText>
                                    <PrizeText>
                                        방진혁 - iot 공모전 동상{" "}
                                    </PrizeText>
                                </PrizeList>
                            )}
                            {year === 2020 && (
                                <PrizeList>
                                    <PrizeText>
                                        염태민 - 교내 창의 아이디어 경진대회
                                        금상
                                    </PrizeText>
                                    <PrizeText>
                                        이호준 - 교내 창의 아이디어 경진대회
                                        금상
                                    </PrizeText>
                                    <PrizeText>
                                        이호준 - 교내 창의 아이디어 경진대회
                                        금상
                                    </PrizeText>
                                    <PrizeText>
                                        박종훈 - 선린톤 은상 염태민 - IOT
                                        경진대회 은상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 천하제일 코딩대회 동상 배동인 -
                                        프로그래밍 경시대회 장려상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - ICT콤플렉스 앱개발 챌린지
                                        최우수상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 한컴라이프케어 대국민 마스크
                                        아이디어 공모전 기술부분 은상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 서울시 창의 아이디어 경진대회
                                        동상
                                    </PrizeText>
                                    <PrizeText>
                                        이호준 - 서울시 창의 아이디어 경진대회
                                        동상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 업사이클링 메이커톤 우수상
                                    </PrizeText>
                                    <PrizeText>
                                        이호준 - 업사이클링 메이커톤 우수상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 한국공항공사배 고등창업 장려상
                                    </PrizeText>
                                    <PrizeText>
                                        이호준 - 한국공항공사배 고등창업 장려상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - 제 3회 KB국민은행 소프트웨어
                                        경진대회 특별상
                                    </PrizeText>
                                    <PrizeText>
                                        박종훈 - 제 3회 KB국민은행 소프트웨어
                                        경진대회 특별상
                                    </PrizeText>
                                    <PrizeText>
                                        염태민 - SK Smarteen App Challenge
                                        엔터테이먼트 부분 가작
                                    </PrizeText>
                                </PrizeList>
                            )}
                        </div>
                    </PrizeGroup>
                </LeftContainer>
                <Logo2 src="/prize.svg" alt="" />
            </Children>
        </Section>
    );
};

export default Prize;
