import styled from 'styled-components';
import Heading from "../../images/first-section.jpg";
import { Button } from "antd";

export const HomeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${Heading}) no-repeat;
    height: 800px;
    width: 100%;
    margin: 12px auto;
`;

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    height: 240px;
    width: 480px;
    background-color: #fff;
    h1 {
        font-size: 32px;
        font-weight: 400;
        margin: 0px;
    }
    h2 {
        font-size: 24px;
        font-weight: 400;
        margin: 0px;
    }
    h3 {
        font-size: 20px;
        font-weight: 100;
        text-decoration: underline;
        margin: 0px;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 32px 10%;
    flex-wrap: wrap;
`

export const ButtonStyled = styled(Button)`
    border: 3px solid #F9542F;
    text-transform: uppercase;
    font-size: 16px;
    color: #F9542F;
    letter-spacing: 4px;
    text-align: center;
    width: 160px;
    height: 48px;
    border-radius: 16px;
    margin-bottom: 60px;
    :hover {
        border: 3px solid #548dfa;
        color: #548dfa;
    }
`;