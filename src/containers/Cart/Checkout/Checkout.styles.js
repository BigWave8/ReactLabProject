import styled from "styled-components";
import { Form } from "formik";
import { ButtonStyled } from "../../Home/Home.styles";
import { Footer } from "../Cart.styles";

export const FormStyled = styled(Form)`
  padding-bottom: 0px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 360px;
  font-family: "OpenSans-Light";
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const FooterContainer = styled(Footer)`
  margin: 10px auto;
  max-width: 980px;
`;

export const ButtonForm = styled(ButtonStyled)`
  width: 200px;
`;
