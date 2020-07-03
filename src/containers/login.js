import React from "react"
// import { connect } from "react-redux"
// import { createStructuredSelector } from "reselect"

// import { any, objectOf } from "prop-types"
import Layout from "../components/Layout/layout"
import LoginForm from '../components/Global/LoginForm'
import { Section } from '../components/Global/styled'
import SEO from "../components/Layout/seo"
// import { selectHomePageData } from "../redux/Home/selectors"

const Login = () => {
  return (
    <Layout withHeader={false} withBottomNav={false}>
      <SEO title="Login" />
      <Section style={{ marginTop: 40 }}>
        <LoginForm />
      </Section>
    </Layout>
  )
}

// Login.propTypes = {
//   wishlistProduct: objectOf(any).isRequired,
// };

// export const mapStateToProps = createStructuredSelector({
//   wishlistProduct: selectHomePageData('wishlistProduct'),
// });

export default Login