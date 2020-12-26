import React from "react";
import {
  FormStyled,
  ButtonForm,
  InputContainer,
  FooterContainer,
} from "./Checkout.styles";
import { CartContainer, TitleStyled } from "../Cart.styles";
import { Formik } from "formik";
import InputComponent from "../../../components/InputItem/InputComponent";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { OrderSchema } from "./ValidationSchema";
import { resetItems } from "../../Utils/Redux/Action";

const Checkout = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <CartContainer>
      <TitleStyled>Checkout</TitleStyled>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          year: "",
        }}
        validationSchema={OrderSchema}
        onSubmit={(values) => {
          dispatch(resetItems);
          history.push("/success");
        }}
      >
        {({ handleSubmit }) => (
          <FormStyled onSubmit={handleSubmit}>
            <InputContainer>
              <InputComponent title="First Name" name="firstName" type="text" />
              <InputComponent title="Last Name" name="lastName" type="text" />
              <InputComponent title="Email" name="email" type="email" />
              <InputComponent
                title="Phone Number"
                name="phoneNumber"
                type="text"
              />
              <InputComponent title="Address" name="address" type="text" />
              <InputComponent title="Years old" name="year" type="text" />
            </InputContainer>
            <FooterContainer>
              <ButtonForm onClick={history.goBack}>Go Back</ButtonForm>
              <ButtonForm onClick={handleSubmit}>Continue</ButtonForm>
            </FooterContainer>
          </FormStyled>
        )}
      </Formik>
    </CartContainer>
  );
};

export default Checkout;
