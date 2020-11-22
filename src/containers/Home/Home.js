import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import { data as receivedData } from "../Data";
import {
    HomeSection,
    SectionWrapper,
    StyledText,
    CardWrapper,
    ButtonStyled
} from "./Home.styles";

const Home = () => {
return (
    <HomeSection>
        <SectionWrapper>  
            <StyledText>
                <h2>Introducing Your New</h2>
                <h1>FUN & STYLISH DESK</h1>
                <h3>Shop Now!</h3>
            </StyledText>
        </SectionWrapper>
        <CardWrapper>
        {receivedData.map(({ title, text, image, price }, idx) => (
            <CardItem
                title={title}
                text={text}
                imageSrc={image}
                price={price}
                id={idx}
            />
        ))}
        </CardWrapper>
        <ButtonStyled>Viev more</ButtonStyled>
    </HomeSection>
    );
};

export default Home;