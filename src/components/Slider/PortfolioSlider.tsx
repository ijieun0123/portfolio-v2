import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import PortfolioSlide from "../Slide/PortfolioSlide";
import "./PortfolioSlider.scss";

interface PortfolioSliderProps {
    "data-aos"?: string;
    "data-aos-delay"?: string;
}

const portfolioData = [
    {
        id: 1,
        imgUrl: "/portfolio-v2/img/portfolio_section_mini.png",
        title: "미니 쿠퍼 리뉴얼 ( 데모 )",
        info: "반응형 디자인과 향상된 사용자 경험을 위한 리뉴얼 프로젝트",
        skill: "React, Typescript, AOS, Styled-Components, SCSS, Swiper",
        contribution: "디자인 100%, 퍼블리싱 100%",
        frontGithubUrl: "https://github.com/ijieun0123/mini",
        goToUrl: "https://ijieun0123.github.io/mini/",
        figmaUrl:
            "https://www.figma.com/design/UeoKT7p4M6sEzFGowKtoRo/mini?node-id=0-1&p=f&t=Z0ngzI6hRd814lEq-0",
    },
    {
        id: 2,
        imgUrl: "/portfolio-v2/img/portfolio_section_hermes.png",
        title: "에르메스 리뉴얼 ( 데모 )",
        info: "반응형 디자인과 향상된 사용자 경험을 위한 리뉴얼 프로젝트",
        skill: "React, Typescript, AOS, Styled-Components, SCSS, Swiper",
        contribution: "디자인 100%, 퍼블리싱 100%",
        frontGithubUrl: "https://github.com/ijieun0123/hermes",
        goToUrl: "https://ijieun0123.github.io/hermes/",
        figmaUrl:
            "https://www.figma.com/design/uHHWrrnEOR1GAacw2vRVf7/hermes?t=Z0ngzI6hRd814lEq-0",
    },
    {
        id: 3,
        imgUrl: "/portfolio-v2/img/portfolio_section_nike.png",
        title: "나이키 리뉴얼 ( 데모 )",
        info: "반응형 디자인과 향상된 사용자 경험을 위한 리뉴얼 프로젝트",
        skill: "React, Typescript, AOS, Styled-Components, SCSS, Swiper",
        contribution: "디자인 100%, 퍼블리싱 100%",
        frontGithubUrl: "https://github.com/ijieun0123/nike",
        goToUrl: "https://ijieun0123.github.io/nike/",
        figmaUrl:
            "https://www.figma.com/design/cjT7IuB3OBkPMi5UpkhfS2/nike?t=Z0ngzI6hRd814lEq-0",
    },
    {
        id: 4,
        imgUrl: "/portfolio-v2/img/portfolio_section_bank.png",
        title: "불리온뱅크",
        info: "프로모션 웹페이지",
        skill: "Html, Css, Jquery, Javascript, Fullpage.js",
        contribution: "디자인 100%, 퍼블리싱 100%",
        goToUrl: "https://bullionbank.co.kr/",
    },
    {
        id: 5,
        imgUrl: "/portfolio-v2/img/portfolio_section_bplus.png",
        title: "비플러스",
        info: "P2P 대출 서비스 페이지",
        skill: "Html, Css, Javascript, Bootstrap",
        contribution: "퍼블리싱 100%",
        goToUrl: "https://benefitplus.kr/",
    },
    {
        id: 6,
        imgUrl: "/portfolio-v2/img/portfolio_section_team_app.png",
        title: "팀 앱 ( Frontend + Backend ) ( 데모 )",
        info: "즉각적인 협업 환경을 목표로 개발된 플랫폼 컨셉 ( 인증/인가, 블로그 기능 구현 )",
        skill: "Java, Spring boot, JPA, H2 / TypeScript, React, SCSS, Styled-components",
        contribution: "디자인 50%, 퍼블리싱 100%, 개발 100%",
        frontGithubUrl: "https://github.com/ijieun0123/team-app-ts",
        backGithubUrl: "https://github.com/ijieun0123/team-app-java",
        goToUrl: "https://ijieun0123.github.io/team-app-ts",
        figmaUrl:
            "https://www.figma.com/design/70K7HCVIsWTcIM9N1iwOTW/team-app-%EC%B5%9C%EC%A2%85?node-id=1517-2&p=f&t=Z0ngzI6hRd814lEq-0",
    },
];

// 데이터 그룹화 함수
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const chunked: T[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }

    return chunked;
};

const StyledSwiper = styled(Swiper)``;

const PortfolioSlider = ({ ...rest }: PortfolioSliderProps) => {
    // 2개씩 묶인 4개의 슬라이드 데이터
    const chunkedSkillData = chunkArray(portfolioData, 2);

    return (
        <StyledSwiper
            className="portfolio_slider"
            modules={[Pagination]}
            spaceBetween={200}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
                1440: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                    allowTouchMove: false,
                    enabled: false,
                },
            }}
            {...rest}
        >
            {chunkedSkillData.map((cardPair, index) => (
                <SwiperSlide key={index}>
                    <div className="vertical_card_wrapper">
                        {cardPair.map(card => (
                            <PortfolioSlide
                                key={card.id}
                                imgUrl={card.imgUrl}
                                title={card.title}
                                info={card.info}
                                skill={card.skill}
                                contribution={card.contribution}
                                frontGithubUrl={card.frontGithubUrl}
                                backGithubUrl={card.backGithubUrl}
                                goToUrl={card.goToUrl}
                                figmaUrl={card.figmaUrl}
                            />
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default PortfolioSlider;
