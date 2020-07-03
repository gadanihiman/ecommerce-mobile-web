import { Link } from 'gatsby';
import React from 'react';

import "./layout.css";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <Link to="/" className="bottomMenu">
        Home
      </Link>
      <Link to="/" className="bottomMenu">
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


// BottomNav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// BottomNav.defaultProps = {
//   siteTitle: ``,
// }

export default BottomNav
