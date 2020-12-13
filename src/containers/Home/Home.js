import React, { useState } from "react";
import CardItem from "../../components/CardItem/CardItem";
import {
    HomeSection,
    SectionWrapper,
    StyledText,
    CardWrapper,
    ButtonStyled
} from "./Home.styles";
import { data as source } from "./Source";

const Home = () => {
    const [data, setData] = useState(source.slice(0, 3));
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setData(source);
        setIsShowMore(true);
    };

    const showLess = () => {
        window.scrollTo({
            top: 1000,
            behavior: "smooth",
        });
        console.log(window);
    
        setData(source.slice(0, 3));
        setIsShowMore(false);
    };

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
            {data.map(({ title, text, image, price, producer, targetAge, barCode }, idx) => (
                <CardItem
                    title={title}
                    text={text}
                    imageSrc={image}
                    price={price}
                    producer={producer}
                    targetAge={targetAge}
                    barCode={barCode}
                    id={idx}
                />
            ))}
            </CardWrapper>
            {!isShowMore && (<ButtonStyled onClick={() => showMore()}>Show More</ButtonStyled>)}
            {isShowMore && <ButtonStyled onClick={showLess}>Show Less</ButtonStyled>}
        </HomeSection>
    );
};

export default Home;