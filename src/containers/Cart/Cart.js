import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ReservedItem from "../../components/ReservedItem/Reserved";
import {
  CartContainer,
  TitleStyled,
  TotalPriceSyled,
  ButtonOnCart,
  Footer,
} from "./Cart.styles";

const Cart = () => {
  let history = useHistory();
  const select = useSelector((state) => state);

  const handleClick = () => {
    console.log(select);
  };

  return (
    <CartContainer>
      <TitleStyled>Shopping Cart</TitleStyled>
      {select.reservations.map((value) => {
        return <ReservedItem value={value} />;
      })}
      <TotalPriceSyled>Total Price: {select.totalPrice} UAH</TotalPriceSyled>
      <Footer>
        <ButtonOnCart onClick={history.goBack}>Go Back</ButtonOnCart>
        <ButtonOnCart onClick={handleClick}>Continue</ButtonOnCart>
      </Footer>
    </CartContainer>
  );
};

export default Cart;
