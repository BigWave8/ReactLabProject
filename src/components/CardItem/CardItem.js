import React from "react";
import {
    Footer,
    CardStyled,
    CardImage,
    MetaStyled,
    TextStyled,
} from "./CardItem.styles";

const CardItem = ({ title, text, imageSrc, price }) => {
    return (
        <div>
            <CardStyled hoverable cover={<CardImage src={imageSrc} alt="Notebook" />}>
                <Footer>
                    <MetaStyled  title={title} description={text} />
                    <TextStyled>Price: {price} UAH</TextStyled>
                </Footer>
            </CardStyled>
        </div>
    );
};

export default CardItem;