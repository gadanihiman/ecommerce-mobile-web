/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, objectOf, any, func } from "prop-types";
import { Button } from 'antd';
import { connect } from "react-redux"
import { get } from "lodash";

import { Container, Description, ButtonContainer, Price } from './styled';
import { purchaseProduct } from "../../../redux/Home/action";

const ProductDetailContent = ({ description, product, onPurchaseProduct }) => {
  const buyButtonClicked = () => {
    console.log('clicked!');
    onPurchaseProduct(product);
  };
  return (
    <Container>
      <Description>{description}</Description>
      <ButtonContainer>
        <Price>{get(product, 'price', '$0')}</Price>
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
  product: objectOf(any),
  description: string.isRequired,
  onPurchaseProduct: func.isRequired,
};

ProductDetailContent.defaultProps = {
  product: 0,
};

// export const mapStateToProps = createStructuredSelector({
//   homepageData: selectHomePageData(),
// });

export const mapDispatchToProps = {
  onPurchaseProduct: purchaseProduct,
};

export default connect(null, mapDispatchToProps)(ProductDetailContent)
