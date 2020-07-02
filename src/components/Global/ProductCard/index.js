/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, bool } from "prop-types";
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { Image } from '../styled';
import { CardContainer, ProductLabel, LovedBtnWrapper, CardImage, CardContent } from './styled';

const ProductCard = ({
  display,
  textAlign,
  withPrice,
  productName,
  productPrice,
  imageSrc,
  imageWidth,
  imageHeight,
  withLoveButton,
  ...attr
}) => {
  console.log('productPrice', productPrice);
  return (
    <CardContainer display={display} {...attr}>
      <CardImage>
        <Image
          src={imageSrc}
          alt="tShirt"
          width={imageWidth}
          height={imageHeight}
        />
        {withLoveButton && (
          <LovedBtnWrapper>
            <Button
              shape="circle"
              type="danger"
              icon={<HeartOutlined />}
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
  productName: string.isRequired,
  productPrice: string,
  imageSrc: string.isRequired,
  imageWidth: string,
  imageHeight: string,
  withLoveButton: bool,
  textAlign: bool,
  display: string,
  withPrice: bool,
};

ProductCard.defaultProps = {
  productPrice: null,
  imageWidth: '100px',
  imageHeight: '100px',
  withLoveButton: false,
  textAlign: false,
  display: 'vertical',
  withPrice: false,
};

export default ProductCard;


