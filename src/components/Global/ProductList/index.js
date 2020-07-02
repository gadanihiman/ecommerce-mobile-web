/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { arrayOf, any, string, bool } from "prop-types";
import Slider from "react-slick";
import { Link } from 'gatsby';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CardContainer, CardWrapper } from './styled';
import ProductCard from '../ProductCard';

const ProductList = ({
  display,
  withPrice,
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
            price,
            imageUrl,
          }) => (
            <div key={id}>
              <ProductCard
                display={display}
                withPrice={withPrice}
                productPrice={price}
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
          price,
          imageUrl,
        }) => (
          <Link to={`/product?id=${id}`} className="bottomMenu" key={id}>
            <CardWrapper>
              <ProductCard
                display={display}
                withPrice={withPrice}
                productPrice={price}
                productName={title}
                imageSrc={imageUrl}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                withLoveButton={withLoveButton}
                textAlign={textAlign}
              />
            </CardWrapper>
          </Link>
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
  textAlign: string,
  display: string,
  withPrice: bool,
};

ProductList.defaultProps = {
  display: 'vertical',
  products: [],
  imageWidth: '100px',
  imageHeight: '100px',
  withSlider: false,
  withLoveButton: false,
  textAlign: 'left',
  withPrice: false,
};

export default ProductList;


