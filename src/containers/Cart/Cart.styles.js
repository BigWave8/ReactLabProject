import styled from "styled-components";
import { ButtonStyled } from "../Home/Home.styles";

export const CartContainer = styled.section`
  max-width: 1366px;
  margin: 0 auto;
`;

export const TitleStyled = styled.h1`
  font-size: 30px;
  letter-spacing: 4px;
  padding-top: 36px;
  padding-bottom: 36px;
  font-weight: 400;
  color: #020243;
  text-align: center;
`;

export const TotalPriceSyled = styled.p`
  font-family: "OpenSans-Light";
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 30px;
  margin-right: 120px;
  color: #020243;
  text-align: end;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  max-width: 1160px;
`;

export const ButtonOnCart = styled(ButtonStyled)`
  width: 200px;
  margin: 0px;
`;
