import styled from 'styled-components';
import { Rate, Select, Statistic } from 'antd';
import { ButtonStyled } from "../../Home/Home.styles";

export const ItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 500px;
    width: 100%;
    margin-top: 24px;
`;

export const TopPart = styled.div`
    width: auto;
    display: flex;
`;

export const ItemInfo = styled.div`
    flex-grow: 1;
    height: auto;
    padding-left: 60px;
`;

export const TagContainer = styled.div`
    margin-top: 20px;
    margin-left: 30px;
`;

export const TitleStyled = styled.h2`
    display: inline;
    font-family: "OpenSans Semibold";
    font-size: 24px;
    font-weight: 600;
    color: #313943;
    margin-left: 30px;
`;

export const RateStyled = styled(Rate)`
    float: right;
    margin-right: 50px;
`;

export const OptionTextStyled = styled.h3`
    display: inline-block;
    font-family: "OpenSans Regular";
    font-size: 18px;
    color: #313943;
    padding-top: 45px;
    max-width: 600px;
    margin-right: 20px;
`;

export const SelectStyled = styled(Select)`
    width: 224px;
`;

export const StatisticContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 30px 0 auto 30px;
`;

export const StatisticStyled = styled(Statistic)`
    margin-right: 50px;
`;

export const BottomPart = styled.div`
    width: 70%;
    padding-left: 200px;
    display: flex;
    justify-content: space-between;
`;

export const StyledPrice = styled.p`
    margin-right: auto;
    font-family: "OpenSans Regular";
    text-transform: uppercase;
    text-align: center;
    font-size: 19px;
    letter-spacing: 5px;
    color: #020243;
    border-bottom: 1px solid #020243;
`;

export const ButtonItemStyled = styled(ButtonStyled)`
    width: 160px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ButtonItemStyledReverse = styled(ButtonStyled)`
    width: 200px;
    margin-right: 30px;
    margin-bottom: 20px;
    border: 3px solid #548dfa;
    color: #548dfa;
    text-align: center;
    :hover {
        border: 3px solid #F9542F;
    }
`;