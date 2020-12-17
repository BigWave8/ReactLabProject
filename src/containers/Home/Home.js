import React, { useState, useEffect } from "react";
import CardItem from "../../components/CardItem/CardItem";
import {
  HomeSection,
  SectionWrapper,
  StyledText,
  CardWrapper,
  ButtonStyled,
} from "./Home.styles";
import { fetchData } from "../Utils/Api";

const Home = () => {
  const [source, setSource] = useState([]);
  const [data, setData] = useState([]);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(async () => {
    if (source.length === 0) {
      fetchData().then((res) => setSource(res));
    }
    fetchData().then((res) => setData(res.slice(0, 3)));
  }, []);

  const showMore = () => {
    setData(source.slice(0, 6));
    setIsShowMore(true);
  };

  const showLess = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
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
        {data.map(
          ({
            title,
            image,
            priceInHryvnia,
            producer,
            targetAge,
            barCode,
            id,
          }) => (
            <CardItem
              title={title}
              imageSrc={image}
              priceInHryvnia={priceInHryvnia}
              producer={producer}
              targetAge={targetAge}
              barCode={barCode}
              id={id}
            />
          )
        )}
      </CardWrapper>
      {!isShowMore && (
        <ButtonStyled onClick={() => showMore()}>Show More</ButtonStyled>
      )}
      {isShowMore && <ButtonStyled onClick={showLess}>Show Less</ButtonStyled>}
    </HomeSection>
  );
};

export default Home;
