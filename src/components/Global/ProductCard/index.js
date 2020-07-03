/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, bool, objectOf, any, arrayOf, func } from "prop-types";
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { get } from 'lodash';
import { Link } from 'gatsby';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { wishlistProduct } from "../../../redux/Home/action";
import { selectHomePageData } from "../../../redux/Home/selectors"
import { Image } from '../styled';
import { CardContainer, ProductLabel, LovedBtnWrapper, CardImage, CardContent } from './styled';

const ProductCard = ({
  display,
  textAlign,
  withPrice,
  // productID,
  // productName,
  // productPrice,
  // productPrice,
  imageWidth,
  imageHeight,
  withLoveButton,
  wishlistedProduct,
  onWishlistProduct,
  product,
  ...attr
}) => {
  const productID = get(product, 'id', '');
  const productName = get(product, 'title', '');
  const productPrice = get(product, 'price', '$0');
  const imageSrc = get(product, 'imageUrl', '');
  const isWishlisted = !!wishlistedProduct.toJS().find(item => item.id === productID);
  const wishlistButtonClicked = () => {
    console.log('clicked!');
    onWishlistProduct(product);
  };
  return (
    <CardContainer display={display} {...attr}>
      <CardImage>
        <Link to={`/product?id=${productID}`}>
          <Image
            src={imageSrc}
            alt="tShirt"
            width={imageWidth}
            height={imageHeight}
          />
        </Link>
        {withLoveButton && (
          <LovedBtnWrapper>
            <Button
              shape="circle"
              type={isWishlisted ? 'danger' : 'default'}
              icon={<HeartOutlined />}
              onClick={wishlistButtonClicked}
            />
          </LovedBtnWrapper>
        )}
      </CardImage>
      <CardContent display={display}>
        <ProductLabel
          display={display}
          textAlign={textAlign || 'left'}
        >
          {productName}
        </ProductLabel>
        {withPrice && (
          <ProductLabel
            display={display}
            textAlign={textAlign || 'left'}
          >
            {productPrice}
          </ProductLabel>
        )}
      </CardContent>
    </CardContainer>
  );
};

ProductCard.propTypes = {
  product: objectOf(any).isRequired,
  // productName: string.isRequired,
  // productID: string.isRequired,
  // imageSrc: string.isRequired,
  // productPrice: string,
  imageWidth: string,
  imageHeight: string,
  withLoveButton: bool,
  textAlign: bool,
  display: string,
  withPrice: bool,
  wishlistedProduct: arrayOf(any).isRequired,
  onWishlistProduct: func.isRequired,
};

ProductCard.defaultProps = {
  imageWidth: '100px',
  imageHeight: '100px',
  withLoveButton: false,
  textAlign: false,
  display: 'vertical',
  withPrice: false,
};

export const mapStateToProps = createStructuredSelector({
  wishlistedProduct: selectHomePageData('wishlistProduct'),
});

export const mapDispatchToProps = {
  onWishlistProduct: wishlistProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)


