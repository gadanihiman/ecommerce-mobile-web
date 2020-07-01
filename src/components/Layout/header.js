import { Input } from 'antd';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';

import PropTypes from "prop-types"
import "./layout.css";

const Header = ({ siteTitle }) => {

  return (
    <div className="header">
      <div className="love">
        <HeartOutlined />
      </div>
      <div className="search">
        <Input placeholder="Search.." prefix={<SearchOutlined />} />
      </div>
      {/* <div className="logo">
        <h1 style={{ color: 'white' }}>{siteTitle}</h1>
      </div> */}
    </div>
  );
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
