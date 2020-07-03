import { Input } from 'antd';
// import { Link } from 'gatsby';
import React from 'react';
import { Link } from "gatsby"
import { SearchOutlined, HeartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { bool, string, func, objectOf, any } from "prop-types"
import { get } from 'lodash';

import { selectHomePageData } from "../../redux/Home/selectors"
import "./layout.css";
import { changeSearchText, getSearchData } from '../../redux/Home/action';

const Header = ({
  withSearch,
  withBackButton,
  withLoveButton,
  setIsSearch,
  onChangeSearchText,
  onGetSearchData,
  searchText,
  homepageData,
  title,
}) => {
  const allData = get(homepageData.toJS(), 'productPromo', []);

  const searchToggle = value => {
    if (setIsSearch) setIsSearch(value);
  };
  
  const handleChangeSearch = () => e => {
    onChangeSearchText(e.target.value);
    onGetSearchData({ searchText, allData });
  };

  return (
    <div className="header">
      {withBackButton && (
        <div className="back">
          <Link to="/">
            <ArrowLeftOutlined onClick={() => searchToggle(false)} />
          </Link>
        </div>
      )}
      {withLoveButton && (
        <div className="love">
          <Link to="/wishlist">
            <HeartOutlined />
          </Link>
        </div>
      )}
      {withSearch && (
        <div className="search">
          <Input
            placeholder="Search.."
            prefix={<SearchOutlined />}
            onClick={() => searchToggle(true)}
            // onBlur={() => searchToggle(false)}
            onChange={handleChangeSearch()}
            value={searchText}
          />
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
  onChangeSearchText: func.isRequired,
  onGetSearchData: func.isRequired,
  setIsSearch: func.isRequired,
  searchText: string.isRequired,
  homepageData: objectOf(any).isRequired,
}

Header.defaultProps = {
  withBackButton: false,
  withLoveButton: false,
  withSearch: false,
  title: null,
}

export const mapStateToProps = createStructuredSelector({
  searchText: selectHomePageData('searchText'),
  homepageData: selectHomePageData(),
});

export const mapDispatchToProps = {
  onChangeSearchText: changeSearchText,
  onGetSearchData: getSearchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
