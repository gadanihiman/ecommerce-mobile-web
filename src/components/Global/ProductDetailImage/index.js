/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, bool } from "prop-types";
import { Button } from 'antd';
import { Link } from 'gatsby';
import { ShareAltOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { Image } from '../styled';
import { CardContainer, CardImage, BackButton, ShareButton } from './styled';

const ProductDetailImage = ({ imageUrl, withShareButton, withBackButton }) => {
  console.log('imageUrl', imageUrl);
  return (
    <CardContainer>
      <CardImage>
        {withBackButton && (
          <Link to="/">
            <BackButton>
              <Button
                shape="circle"
                icon={<ArrowLeftOutlined />}
              />
            </BackButton>
          </Link>
        )}
        {withShareButton && (
          <ShareButton>
            <Button
              shape="circle"
              icon={<ShareAltOutlined />}
            />
          </ShareButton>
        )}
        <Image
          src={imageUrl}
          alt="tShirt"
          width="100%"
          height="180px"
        />
      </CardImage>
    </CardContainer>
  );
};

ProductDetailImage.propTypes = {
  withBackButton: bool,
  withShareButton: bool,
  imageUrl: string.isRequired,
};

ProductDetailImage.defaultProps = {
  withBackButton: false,
  withShareButton: false,
};

export default ProductDetailImage;


