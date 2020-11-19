import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import Image1 from "../../images/notebook1.png";
import Image2 from "../../images/notebook2.png";
import Image3 from "../../images/notebook3.png";
import {
    HomeSection,
    SectionWrapper,
    StyledText,
    CardWrapper,
    ButtonStyled
} from "./Home.styles";

const data = [
{
    title: "Standard notebook",
    text: "Notebook will be an indispensable assistant for your important affairs and ideas",
    image: Image1,
    price: 99.99,
},
{
    title: "Thick cover",
    text: "Everyone needs extra protection!",
    image: Image2,
    price: 199.99,
},
{
    title: "Wide lines",
    text: "Notebooks for any task",
    image: Image3,
    price: 149.99,
},
];

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
        {data.map(({ title, text, image, price }, idx) => (
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