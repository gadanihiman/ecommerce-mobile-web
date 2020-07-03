import { Link } from 'gatsby';
import React from 'react';

import PropTypes from "prop-types"
import "./layout.css";

const BottomNav = ({ siteTitle }) => {

  return (
    <div className="bottomNav">
      <Link to="/" className="bottomMenu">
        Home
      </Link>
      <Link to="/about-us" className="bottomMenu">
        Feed
      </Link>
      <Link to="/purchased" className="bottomMenu">
        Cart
      </Link>
      <Link to="/wishlist" className="bottomMenu">
        Profile
      </Link>
    </div>
  );
};


BottomNav.propTypes = {
  siteTitle: PropTypes.string,
}

BottomNav.defaultProps = {
  siteTitle: ``,
}

export default BottomNav
