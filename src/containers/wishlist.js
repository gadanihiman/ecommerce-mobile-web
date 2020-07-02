import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { get } from "lodash"

import { func, any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductList from '../components/Global/ProductList'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
import { getHomePageData } from "../redux/Home/action"
import { selectHomePageData } from "../redux/Home/selectors"

const Wishlist = ({ onGetHomePageData, homepageData }) => {
  useEffect(() => {
    onGetHomePageData()
  }, [onGetHomePageData])
  console.log('homepageData', homepageData)
  const homepageDataResolved = homepageData.toJS();
  const productsPromo = get(homepageDataResolved, 'productPromo', []);
  return (
    <Layout title="Wishlist" withBackButton>
      <SEO title="Purchased products" />
      <Section>
        <ProductList
          products={productsPromo}
          withPrice
          display="horizontal"
          imageWidth="70px"
          imageHeight="70px"
        />
      </Section>
      <Link to="/">Go to Homepage</Link>
    </Layout>
  )
}

Wishlist.propTypes = {
  onGetHomePageData: func.isRequired,
  homepageData: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  homepageData: selectHomePageData(),
});

export const mapDispatchToProps = {
  onGetHomePageData: getHomePageData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)