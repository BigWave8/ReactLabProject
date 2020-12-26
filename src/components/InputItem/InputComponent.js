import React from "react";
import {
  ErrorStyled,
  InputContainer,
  InputStyled,
  Title,
} from "./InputComponent.styles";
import { Field, ErrorMessage } from "formik";

const InputComponent = ({ title, name, type }) => {
  return (
    <InputContainer>
      <Title>{title}:</Title>
      <Field id={name} name={name} type={type} as={InputStyled} />
      <ErrorStyled>
        <ErrorMessage name={name} />
      </ErrorStyled>
    </InputContainer>
  );
};

export default InputComponent;
