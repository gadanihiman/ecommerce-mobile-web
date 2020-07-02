import React, { useEffect } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { get } from "lodash"

import { func, arrayOf, any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductList from '../components/Global/ProductList'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
import { getHomePageData } from "../redux/Home/action"
import { selectHomePageData } from "../redux/Home/selectors"

const IndexPage = ({ onGetHomePageData, homepageData }) => {
  useEffect(() => {
    onGetHomePageData()
  }, [onGetHomePageData])
  console.log('homepageData', homepageData)
  const homepageDataResolved = homepageData.toJS();
  const categories = get(homepageDataResolved, 'category', []);
  const categoriesFormated = categories.map(data => {
    return {
      ...data,
      title: data.name,
    }
  })
  const productsPromo = get(homepageDataResolved, 'productPromo', []);
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <ProductList
          products={categoriesFormated}
          textAlign="center"
          withSlider
        />
      </Section>
      <Section>
        <ProductList
          products={productsPromo}
          withLoveButton
          display="vertical"
          imageWidth="100%"
          imageHeight="150px"
        />
      </Section>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

IndexPage.propTypes = {
  onGetHomePageData: func.isRequired,
  homepageData: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  homepageData: selectHomePageData(),
});

export const mapDispatchToProps = {
  onGetHomePageData: getHomePageData,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
