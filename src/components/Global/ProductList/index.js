/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { arrayOf, any, string, bool } from "prop-types";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CardContainer, CardWrapper } from './styled';
import ProductCard from '../ProductCard';

const ProductList = ({
  products,
  withSlider,
  imageHeight,
  imageWidth,
  textAlign,
  withLoveButton,
}) => {
  const sliderSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <> </>,
    prevArrow: <> </>
  };
  return (
    <CardContainer>
      { withSlider ? (
        <Slider {...sliderSetting}>
          {products.map(({
            id,
            title,
            imageUrl,
          }) => (
            <div key={id}>
              <ProductCard
                productName={title}
                imageSrc={imageUrl}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                withLoveButton={withLoveButton}
                textAlign={textAlign}
              />
            </div>
          ))}
        </Slider>
      ) : (
        products.map(({
          id,
          title,
          imageUrl,
        }) => (
          <CardWrapper key={id}>
            <ProductCard
              productName={title}
              imageSrc={imageUrl}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              withLoveButton={withLoveButton}
              textAlign={textAlign}
            />
          </CardWrapper>
        ))
      )}
    </CardContainer>
  );
};

ProductList.propTypes = {
  products: arrayOf(any),
  imageWidth: string,
  imageHeight: string,
  withSlider: bool,
  withLoveButton: bool,
};

ProductList.defaultProps = {
  products: [],
  imageWidth: '100px',
  imageHeight: '100px',
  withSlider: false,
  withLoveButton: false,
};

export default ProductList;


