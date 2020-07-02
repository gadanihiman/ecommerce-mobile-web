import { Input } from 'antd';
// import { Link } from 'gatsby';
import React from 'react';
import { SearchOutlined, HeartOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { bool, string } from "prop-types"
import "./layout.css";

const Header = ({
  withSearch,
  withBackButton,
  withLoveButton,
  title,
}) => {
  return (
    <div className="header">
      {withBackButton && (
        <div className="back">
          <ArrowLeftOutlined />
        </div>
      )}
      {withLoveButton && (
        <div className="love">
          <HeartOutlined />
        </div>
      )}
      {withSearch && (
        <div className="search">
          <Input placeholder="Search.." prefix={<SearchOutlined />} />
        </div>
      )}
      {title && (
        <div className="pagetitle">
          {title}
        </div>
      )}
      {/* <div className="logo">
        <h1 style={{ color: 'white' }}>{siteTitle}</h1>
      </div> */}
    </div>
  );
};


Header.propTypes = {
  withSearch: bool,
  withBackButton: bool,
  withLoveButton: bool,
  title: string,
}

Header.defaultProps = {
  withBackButton: false,
  withLoveButton: false,
  withSearch: false,
  title: null,
}

export default Header
