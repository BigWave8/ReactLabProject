import styled from "styled-components";
import Icon, {
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 160px;
  margin: 0 auto;
  padding-right: 20px;
  border: 1px solid #020243;
  margin-bottom: 20px;
  position: relative;
`;

export const LeftStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export const CardImage = styled.img`
  height: 158px;
  width: 207px;
`;

export const TextStyled = styled.p`
  font-family: "OpenSans Regular";
  font-size: 24px;
  color: #020243;
  text-align: center;
  letter-spacing: 5px;
  margin: 0;
`;

export const RightStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-left: 100px;
`;

export const PlusStyled = styled(PlusSquareOutlined)`
  font-size: 32px;
  color: #020243;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const MinusStyled = styled(MinusSquareOutlined)`
  font-size: 32px;
  color: #020243;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export const TrashStyled = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 25px;
  color: #020243;
  :hover {
    animation: move 0.3s infinite;
  }
  @keyframes move {
    0% {
      transform: rotate(5deg);
      margin-right: 2px;
    }
    50% {
      transform: rotate(-10deg);
      margin-left: 2px;
      margin-right: 0px;
    }
    100% {
      transform: rotate(5deg);
      margin-left: 0px;
      margin-right: 2px;
    }
  }
`;

export const ButtonSmall = styled(Button)`
  border: none;
  background-color: transparent;
  width: 32px;
  margin: auto 0;
  padding: 0;
`;
