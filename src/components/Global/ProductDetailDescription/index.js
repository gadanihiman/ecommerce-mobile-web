/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string } from "prop-types";
import { Button } from 'antd';

import { Container, Description, ButtonContainer, Price } from './styled';

const ProductDetailContent = ({ description, price }) => {
  const buyButtonClicked = () => {
    console.log('clicked!');
  };
  return (
    <Container>
      <Description>{description}</Description>
      <ButtonContainer>
        <Price>{price}</Price>
        <div>
          <Button
            style={{
              width: '100px'
            }}
            onClick={buyButtonClicked}
            type="primary"
          >
            BUY
          </Button>
        </div>
      </ButtonContainer>
    </Container>
  );
};

ProductDetailContent.propTypes = {
  price: string,
  description: string.isRequired,
};

ProductDetailContent.defaultProps = {
  price: 0,
};

export default ProductDetailContent;


