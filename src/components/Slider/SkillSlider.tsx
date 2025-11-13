import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import SkillSlide from "../Slide/SkillSlide";
import "./SkillSlider.scss";
import "./Pagination.scss";

const skillData = [
    {
        id: 1,
        imgUrl: "/portfolio-v2/img/skill_section_figma.png",
        title: "Figma",
        description:
            "컴포넌트를 활용하여<br/>워크프레임, 웹 디자인을<br/>작성할 수 있습니다.",
    },
    {
        id: 2,
        imgUrl: "/portfolio-v2/img/skill_section_html.png",
        title: "HTML",
        description:
            "시멘틱 태그를 사용하여 마크업하고,<br/>웹 표준과 웹 접근성을 고려하여<br/>코딩할 수 있습니다.",
    },
    {
        id: 3,
        imgUrl: "/portfolio-v2/img/skill_section_css.png",
        title: "CSS",
        description:
            "SCSS 를 사용할 수 있습니다.<br/>또한 flex 와 grid 를 사용하여<br/>반응형 홈페이지를 만들 수 있습니다.",
    },
    {
        id: 4,
        imgUrl: "/portfolio-v2/img/skill_section_jquery.png",
        title: "JQuery",
        description:
            "클릭 이벤트, 스크롤 이벤트 등을<br/>사용하여 동적인 홈페이지를<br/>만들 수 있습니다.",
    },
    {
        id: 5,
        imgUrl: "/portfolio-v2/img/skill_section_js.png",
        title: "Javascript",
        description:
            "React 와 함께<br/>ES6+ 문법을 활용하여<br/>컴포넌트 개발 가능 합니다.",
    },
    {
        id: 6,
        imgUrl: "/portfolio-v2/img/skill_section_java.png",
        title: "Java",
        description:
            "Spring Boot 기반<br/>REST API 및 서버 로직 구현에<br/>활용할 수 있습니다.",
    },
    {
        id: 7,
        imgUrl: "/portfolio-v2/img/skill_section_react.png",
        title: "React",
        description:
            "Styled-Components의 Props를<br/>TypeScript 타입으로 명시하여 <br/>동적 테마 변경이 가능합니다.",
    },
    {
        id: 8,
        imgUrl: "/portfolio-v2/img/skill_section_github.png",
        title: "Github",
        description:
            "GitHub Actions를 활용하여<br/>CI/CD 환경을 구축하고 <br/>자동 배포를 경험했습니다.",
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

const SkillSlider = () => {
    // 2개씩 묶인 4개의 슬라이드 데이터
    const chunkedSkillData = chunkArray(skillData, 2);

    return (
        <StyledSwiper
            className="skill_slider"
            modules={[Pagination]}
            spaceBetween={200}
            slidesPerView={1}
            loop={false}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    pagination: false,
                    allowTouchMove: false,
                    enabled: false,
                },
            }}
        >
            {chunkedSkillData.map((cardPair, index) => (
                <SwiperSlide key={index}>
                    <div className="vertical_card_wrapper">
                        {cardPair.map(card => (
                            <SkillSlide
                                key={card.id}
                                imgUrl={card.imgUrl}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
};

export default SkillSlider;
