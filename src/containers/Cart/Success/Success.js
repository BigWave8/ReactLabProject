import React from "react";
import { CartContainer, ButtonSuccess } from "./Success.styles";
import { Result } from "antd";
import { useHistory } from "react-router-dom";

const Success = () => {
  let history = useHistory();
  return (
    <CartContainer>
      <Result
        status="success"
        title="Successfully Purchased"
        subTitle="Congratulations on your purchase! Order Number: 98765432567123."
        extra={[
          <ButtonSuccess onClick={() => history.push("/catalog")}>
            Go to Catalog
          </ButtonSuccess>,
        ]}
      />
    </CartContainer>
  );
};

export default Success;
