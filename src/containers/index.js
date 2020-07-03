import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { get, isEmpty } from "lodash"

import { func, any, objectOf, arrayOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductList from '../components/Global/ProductList'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
import { getHomePageData } from "../redux/Home/action"
import { selectHomePageData } from "../redux/Home/selectors"

const IndexPage = ({ onGetHomePageData, homepageData, searchData }) => {
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    onGetHomePageData()
  }, [onGetHomePageData])
  const homepageDataResolved = homepageData.toJS();
  const searchDataFormatted = searchData.toJS();
  console.log('searchDataFormatted', searchDataFormatted);
  const categories = get(homepageDataResolved, 'category', []);
  const categoriesFormated = categories.map(data => ({
    ...data,
    title: data.name,
  }));
  const productsPromo = get(homepageDataResolved, 'productPromo', []);
  return (
    <Layout
      withBackButton={isSearch}
      setIsSearch={setIsSearch}
      withLoveButton={!isSearch}
      withSearch
    >
      <SEO title="Home" />
      {!isSearch && (
        <>
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
        </>
      )}
      {isSearch && !isEmpty(searchDataFormatted) && (
        <ProductList
          withPrice
          products={searchDataFormatted}
          display="horizontal"
          imageWidth="60px"
          imageHeight="60px"
        />
      )}
      {isSearch && isEmpty(searchDataFormatted) && <div>No product found</div>}
      <Link to="/purchased">Go to purchased page</Link>
    </Layout>
  )
}

IndexPage.propTypes = {
  onGetHomePageData: func.isRequired,
  homepageData: objectOf(any).isRequired,
  searchData: arrayOf(any).isRequired
};

export const mapStateToProps = createStructuredSelector({
  homepageData: selectHomePageData(),
  searchData: selectHomePageData('searchData'),
});

export const mapDispatchToProps = {
  onGetHomePageData: getHomePageData,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
