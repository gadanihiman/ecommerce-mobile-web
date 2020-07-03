import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { get } from "lodash"

import { any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import ProductDetailImage from '../components/Global/ProductDetailImage';
import ProductDetailContent from '../components/Global/ProductDetailContent';
import ProductDetailDescription from '../components/Global/ProductDetailDescription';
import SEO from "../components/Layout/seo"
import { selectHomePageData } from "../redux/Home/selectors"

const Product = ({ homepageData, location }) => {
  const allProducts = get(homepageData.toJS(), 'productPromo', []);
  const query = get(location, 'search', '');
  const queryID = 'id=';
  const productID = query.slice(query.search(queryID)+queryID.length);
  const product = allProducts.find(item => item.id === productID);
  const productDetail = {
    imageUrl: get(product, 'imageUrl', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg/430px-Nintendo-Switch-Console-Docked-wJoyConRB.jpg'),
    name: get(product, 'title', 'Ini Barang Satu'),
    description: get(product, 'description', 'Eu eiusmod enim aute ut eu velit tempor. Dolore non ea non veniam tempor veniam ex fugiat ipsum est incididunt enim qui quis. Officia deserunt dolor nostrud consequat anim est. Ullamco ut quis sit et tempor labore veniam officia qui ex.'),
    isLoved: false,
  };

  return (
    <Layout withHeader={false}>
      <SEO title={`${productDetail.name} | Ecommerce Mobile Web`} />
      {!product && <div>No Product Found</div>}
      {product && (
        <>
          <ProductDetailImage
            withBackButton
            withShareButton
            imageUrl={productDetail.imageUrl}
          />
          <ProductDetailContent product={product} />
          <ProductDetailDescription
            description={productDetail.description}
            product={product}
          />
        </>
      )}
    </Layout>
  )
}

Product.propTypes = {
  homepageData: objectOf(any).isRequired,
  location: objectOf(any).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  homepageData: selectHomePageData(),
});

export default connect(mapStateToProps)(Product)
