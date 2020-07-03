import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductList from '../components/Global/ProductList'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
import { selectHomePageData } from "../redux/Home/selectors"

const Wishlist = ({ wishlistProduct }) => {
  return (
    <Layout title="Wishlist" withBackButton>
      <SEO title="Purchased products" />
      <Section>
        <ProductList
          products={wishlistProduct}
          withPrice
          display="horizontal"
          imageWidth="70px"
          imageHeight="70px"
        />
      </Section>
    </Layout>
  )
}

Wishlist.propTypes = {
  wishlistProduct: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  wishlistProduct: selectHomePageData('wishlistProduct'),
});

export default connect(mapStateToProps)(Wishlist)