import styled from "styled-components";

interface SkillSlideProps {
    title: string;
    description: string;
    imgUrl: string;
}

const StyledSlide = styled.div`
    width: 296px;
    height: 296px;
    padding: 30px 30px 50px 30px;
    box-shadow: 0px 4px 12px 0px rgba(43, 29, 30, 0.2);
    border-top: 5px solid var(--orange-color);

    @media (min-width: 768px) {
        width: 50%;
        max-width: 375px;
        fle-shrink: 0;
    }
`;

const Icon = styled.div<{ imgUrl: string }>`
    width: 60px;
    height: 60px;
    background: url(${(props: { imgUrl: string }) => props.imgUrl}) no-repeat
        center/cover;
`;

const Title = styled.h3`
    margin: 30px 0;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: var(--black-color);

    @media (min-width: 1024px) {
        font-size: 25px;
    }
`;

const Description = styled.p``;

const SkillSlide = ({ title, description, imgUrl }: SkillSlideProps) => {
    return (
        <StyledSlide className="skill_slide">
            <Icon imgUrl={imgUrl}></Icon>
            <Title>{title}</Title>
            <Description
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: description }}
            ></Description>
        </StyledSlide>
    );
};

export default SkillSlide;
