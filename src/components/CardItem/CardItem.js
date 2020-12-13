import React from "react";
import { useHistory } from "react-router-dom";
import {
    Footer,
    CardStyled,
    CardImage,
    MetaStyled,
    TextStyled,
} from "./CardItem.styles";

const CardItem = ({ title, text, imageSrc, id, price, producer, targetAge, barCode }) => {
    let history = useHistory();
    
    return (
        <div 
            onClick={() => {
                history.push(`/item?id=${id}`);
            }}
        >
            <CardStyled hoverable cover={<CardImage src={imageSrc} alt="Notebook" />}>
                <Footer>
                    <MetaStyled  title={title} description={text} />
                    <TextStyled>Price: {price} UAH</TextStyled>
                    <TextStyled>Producer: {producer}</TextStyled>
                    <TextStyled>Target age: {targetAge} years</TextStyled>
                    <TextStyled>Bar code: {barCode}</TextStyled>
                </Footer>
            </CardStyled>
        </div>
    );
};

export default CardItem;