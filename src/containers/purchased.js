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

const PurchasedPage = ({ onGetHomePageData, homepageData }) => {
  useEffect(() => {
    onGetHomePageData()
  }, [onGetHomePageData])
  const homepageDataResolved = homepageData.toJS();
  const productsPromo = get(homepageDataResolved, 'productPromo', []);
  return (
    <Layout title="Purchased History" withBackButton>
      <SEO title="Purchased products" />
      <Section>
        <ProductList
          withPrice
          products={productsPromo}
          display="horizontal"
          imageWidth="60px"
          imageHeight="60px"
        />
      </Section>
      <Link to="/">Go to Homepage</Link>
    </Layout>
  )
}

PurchasedPage.propTypes = {
  onGetHomePageData: func.isRequired,
  homepageData: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  homepageData: selectHomePageData(),
});

export const mapDispatchToProps = {
  onGetHomePageData: getHomePageData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedPage)
