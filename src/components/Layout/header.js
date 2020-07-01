import React, { useState } from "react"
import { Link } from "gatsby"

import { Layout, Menu } from 'antd';
import PropTypes from "prop-types"
import "./layout.css";

const { Header: HeaderBase } = Layout;

const Header = ({ siteTitle }) => {

  return (
    <HeaderBase>
      <div className="logo">
        <h1 style={{ color: 'white' }}>{siteTitle}</h1>
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="aboutUs">
          <Link
            to="/about-us"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About Us
          </Link>
        </Menu.Item>
      </Menu>
    </HeaderBase>
  );
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
