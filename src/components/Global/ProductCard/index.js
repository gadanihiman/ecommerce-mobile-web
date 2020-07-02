/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, bool } from "prop-types";
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { Image } from '../styled';
import { CardContainer, ProductName, LovedBtnWrapper, CardImage } from './styled';

const ProductCard = ({
  display,
  textAlign,
  productName,
  imageSrc,
  imageWidth,
  imageHeight,
  withLoveButton,
}) => {
  return (
    <CardContainer>
      { display === 'vertical' ? (
        <>
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
          <ProductName
            textAlign={textAlign || 'left'}
          >
            {productName}
          </ProductName>
        </>
      ) : (
        <div>Card horizontal</div>
      )}
    </CardContainer>
  );
};

ProductCard.propTypes = {
  display: string,
  productName: string.isRequired,
  imageSrc: string.isRequired,
  imageWidth: string,
  imageHeight: string,
  withLoveButton: bool,
  textAlign: bool,
};

ProductCard.defaultProps = {
  display: 'vertical',
  imageWidth: '100px',
  imageHeight: '100px',
  withLoveButton: false,
  textAlign: false,
};

export default ProductCard;


