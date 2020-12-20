import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CardStyled,
  MinusStyled,
  PlusStyled,
  CardImage,
  TextStyled,
  StyledCounter,
  TrashStyled,
  ButtonSmall,
  LeftStyled,
  RightStyled,
} from "./Reserved.styles";
import { useDispatch } from "react-redux";
import { ClearOutlined } from "@ant-design/icons";
import { deleteItem, updateItem } from "../../containers/Utils/Redux/Action";

const ReservedItem = ({ value }) => {
  const [element, setElement] = useState(value);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    setElement(value);
  }, [value]);

  const reduceItemNumber = () => {
    if (element.number === 1) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number - 1,
      priceInUAH: (element.priceInUAH / element.number) * (element.number - 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const increaseItemNumber = () => {
    if (element.number === 20) {
      return;
    }
    const newElement = {
      ...element,
      number: element.number + 1,
      priceInUAH: (element.priceInUAH / element.number) * (element.number + 1),
    };
    setElement(newElement);
    dispatch(updateItem(newElement));
  };

  const removeElement = () => {
    dispatch(deleteItem(element));
  };

  const goToItem = () => {
    history.push(`/item?id=${element.id}`);
  };

  return (
    <CardStyled>
      <TrashStyled onClick={removeElement} component={ClearOutlined} />
      <LeftStyled>
        <CardImage onClick={goToItem} alt="Notebook" src={element.imageSrc} />
        <TextStyled>{element.title}</TextStyled>
      </LeftStyled>
      <RightStyled>
        <StyledCounter>
          <ButtonSmall onClick={increaseItemNumber}>
            <PlusStyled />
          </ButtonSmall>
          <TextStyled>{element.number}</TextStyled>
          <ButtonSmall>
            <MinusStyled onClick={reduceItemNumber} />
          </ButtonSmall>
        </StyledCounter>
        <TextStyled>{element.priceInUAH} UAH</TextStyled>
      </RightStyled>
    </CardStyled>
  );
};

export default ReservedItem;
