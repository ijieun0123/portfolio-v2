import styled from "styled-components";
import { useState, useEffect } from "react";

interface PortfolioSlideProps {
    imgUrl: string;
    title: string;
    info: string;
    skill: string;
    contribution: string;
    frontGithubUrl?: string;
    backGithubUrl?: string;
    goToUrl: string;
    figmaUrl?: string;
}

const StyledSlide = styled.div`
    width: 100%;
    max-width: 670px;

    @media (min-width: 768px) {
        width: 670px;
    }

    @media (min-width: 1024px) {
        width: 928px;
        max-width: none;
    }

    @media (min-width: 1440px) {
        width: 688px;
    }
`;

const PortfolioPhotoWrapper = styled.div`
    width: 100%;
    aspect-ratio: 296 / 153;
    overflow: hidden;

    @media (min-width: 768px) {
        aspect-ratio: 670 / 390;
    }

    @media (min-width: 1024px) {
        aspect-ratio: 928 / 540;
    }

    @media (min-width: 1440px) {
        height: 400px;
        aspect-ratio: 688 / 400;
    }
`;

const PortfolioPhoto = styled.a<{ imgUrl: string }>`
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${(props: { imgUrl: string }) => props.imgUrl}) no-repeat
        top/cover;
    transition: 0.3s ease-in-out;
`;

const TextIconBox = styled.div`
    padding-left: 8%;
`;

const Title = styled.h3`
    margin: 30px 0 20px;
    font-family: "NanumSquare", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--black-color);

    @media (min-width: 768px) {
        margin: 0 0 20px;
    }
`;

const InfoSkillContributionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
        display: flex;
        gap: 20px;

        b {
            position: relative;
            white-space: nowrap;
            font-weight: 600;

            &: after {
                content: "";
                position: absolute;
                top: 3px;
                right: -10px;
                width: 1px;
                height: 15px;
                background: #b0b0b0;
            }
        }
        p {
        }
    }
`;

const IconWrap = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;

    a {
        display: inline-block;
        width: 25px;
        height: 25px;
        transition: 0.2s;

        &:hover {
            transform: translateY(2px);
        }

        @media (min-width: 768px) {
            width: 30px;
            height: 30px;
        }
    }
`;

const FrontGithubIcon = styled.a`
    background: url("/portfolio-v2/img/portfolio_section_github_icon.png")
        no-repeat center/cover;
`;

const BackGithubIcon = styled.a`
    background: url("/portfolio-v2/img/portfolio_section_github_icon.png")
        no-repeat center/cover;
`;

const GoToIcon = styled.a`
    background: url("/portfolio-v2/img/portfolio_section_goto_icon.png")
        no-repeat center/cover;
`;

const FigmaIcon = styled.a`
    background: url("/portfolio-v2/img/portfolio_section_figma_icon.png")
        no-repeat center/cover;
`;

const PortfolioSlide = ({
    imgUrl,
    title,
    info,
    skill,
    contribution,
    frontGithubUrl,
    backGithubUrl,
    goToUrl,
    figmaUrl,
}: PortfolioSlideProps) => {
    return (
        <StyledSlide className="portfolio_slide">
            <PortfolioPhotoWrapper>
                <PortfolioPhoto
                    href={goToUrl}
                    target="_blank"
                    title="바로가기"
                    imgUrl={imgUrl}
                ></PortfolioPhoto>
            </PortfolioPhotoWrapper>
            <TextIconBox>
                <Title>{title}</Title>
                <InfoSkillContributionWrap>
                    <div>
                        <b className="paragraph">소개</b>
                        <p className="paragraph">{info}</p>
                    </div>
                    <div>
                        <b className="paragraph">기술</b>
                        <p className="paragraph">{skill}</p>
                    </div>
                    <div>
                        <b className="paragraph">작업 기여도</b>
                        <p className="paragraph">{contribution}</p>
                    </div>
                </InfoSkillContributionWrap>
                <IconWrap>
                    {frontGithubUrl && (
                        <FrontGithubIcon
                            href={frontGithubUrl}
                            target="_blank"
                            title="프론트 작업 깃허브"
                        ></FrontGithubIcon>
                    )}
                    {backGithubUrl && (
                        <BackGithubIcon
                            href={backGithubUrl}
                            target="_blank"
                            title="백엔드 작업 깃허브"
                        ></BackGithubIcon>
                    )}
                    {goToUrl && (
                        <GoToIcon
                            href={goToUrl}
                            target="_blank"
                            title="바로가기"
                        ></GoToIcon>
                    )}
                    {figmaUrl && (
                        <FigmaIcon
                            href={figmaUrl}
                            target="_blank"
                            title="피그마"
                        ></FigmaIcon>
                    )}
                </IconWrap>
            </TextIconBox>
        </StyledSlide>
    );
};

export default PortfolioSlide;
