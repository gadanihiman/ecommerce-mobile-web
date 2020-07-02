/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { string, bool } from "prop-types";
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { Container, Header, Title } from './styled';

const ProductDetailContent = ({ title, withLoveButton }) => {
  return (
    <Container>
      <Header>
        {title && <Title>{title}</Title>}
        {withLoveButton && (
          <div>
            <Button
              shape="circle"
              icon={<HeartOutlined />}
            />
          </div>
        )}
      </Header>
    </Container>
  );
};

ProductDetailContent.propTypes = {
  withLoveButton: bool,
  title: string.isRequired,
};

ProductDetailContent.defaultProps = {
  withLoveButton: true,
};

export default ProductDetailContent;


