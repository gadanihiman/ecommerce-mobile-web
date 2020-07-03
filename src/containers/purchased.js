import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductList from '../components/Global/ProductList'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
import { selectHomePageData } from "../redux/Home/selectors"

const PurchasedPage = ({ purchasedProduct }) => {
  return (
    <Layout title="Purchased History" withBackButton>
      <SEO title="Purchased products | Ecommerce Mobile Web" />
      <Section>
        <ProductList
          withPrice
          products={purchasedProduct}
          display="horizontal"
          imageWidth="60px"
          imageHeight="60px"
        />
      </Section>
    </Layout>
  )
}

PurchasedPage.propTypes = {
  purchasedProduct: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  purchasedProduct: selectHomePageData('purchasedProduct'),
});

export default connect(mapStateToProps)(PurchasedPage)
