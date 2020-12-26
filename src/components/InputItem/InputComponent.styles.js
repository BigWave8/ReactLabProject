import styled from "styled-components";
import { Input } from "antd";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const InputStyled = styled(Input)`
  margin: 20px;
  margin-bottom: 40px;
  font-size: 16px;
  width: 300px;
`;

export const ErrorStyled = styled.div`
  position: absolute;
  color: red;
  font-size: 16px;
  top: 80px;
  left: 20px;
`;
