import styled from "styled-components";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

export const CardStyled = styled(Card)`
    width: 364px;
    height: 532px;
    margin: 64px 0;
    display: flex;
    flex-direction: column;
`;

export const CardImage = styled.img`
    height: 280px;
    width: 364px;
`; 

export const Footer = styled.div`
    border: 1px solid #dcd3cc;
    padding: 10px 0;
    height: 200px;
    width: 314px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const MetaStyled  = styled(Meta)`
    font-family: "Playfair Display";
    font-size: 16px;
    text-align: center;
    .ant-card-meta-title{
        font-size: 24px;
    }
`;

export const TextStyled = styled.p`
    font-family: "Playfair Display";
    font-size: 20px;
    color: #242424;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 10px;
    margin-bottom: 0px;
`;