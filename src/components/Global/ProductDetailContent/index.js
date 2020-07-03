/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { bool, func, objectOf, any, arrayOf } from "prop-types";
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { get } from "lodash";

import { Container, Header, Title } from './styled';
import { wishlistProduct } from "../../../redux/Home/action";
import { selectHomePageData } from "../../../redux/Home/selectors"

const ProductDetailContent = ({
  product,
  withLoveButton,
  onWishlistProduct,
  wishlistedProduct,
}) => {
  const isWishlisted = !!wishlistedProduct.toJS().find(item => item.id === product.id);
  const wishlistButtonClicked = () => {
    console.log('clicked!');
    onWishlistProduct(product);
  };
  return (
    <Container>
      <Header>
        <Title>{get(product, 'title', 'Ini Produk Satu')}</Title>
        {withLoveButton && (
          <div>
            <Button
              shape="circle"
              icon={<HeartOutlined />}
              onClick={wishlistButtonClicked}
              type={isWishlisted ? 'danger' : 'default'}
            />
          </div>
        )}
      </Header>
    </Container>
  );
};

ProductDetailContent.propTypes = {
  withLoveButton: bool,
  onWishlistProduct: func.isRequired,
  product: objectOf(any).isRequired,
  wishlistedProduct: arrayOf(any).isRequired,
};

ProductDetailContent.defaultProps = {
  withLoveButton: true,
};

export const mapStateToProps = createStructuredSelector({
  wishlistedProduct: selectHomePageData('wishlistProduct'),
});

export const mapDispatchToProps = {
  onWishlistProduct: wishlistProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContent)
