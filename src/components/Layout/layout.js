/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { string, node, bool } from "prop-types";
import { Layout as Container } from 'antd';
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import BottomNav from "./bottomNav"
import Footer from "./footer";
import "./layout.css";

const { Content } = Container;

const Layout = ({
  children,
  title,
  withSearch,
  withBackButton,
  withLoveButton,
  withHeader,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container className="layout">
      {withHeader && <Header
        withBackButton={withBackButton}
        withLoveButton={withLoveButton}
        withSearch={withSearch}
        title={title}
        siteTitle={data.site.siteMetadata.title}
      />}
      <Content
        className="content"
        style={{
          ...(withHeader ? { margin: '46px 0px' } : { margin: '0px 0px' })
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <BottomNav />
      <Footer style={{ textAlign: 'center' }} />
    </Container>
  )
}

Layout.propTypes = {
  withHeader: bool,
  children: node.isRequired,
  title: string,
  withSearch: bool,
  withBackButton: bool,
  withLoveButton: bool,
}

Layout.defaultProps = {
  withHeader: true,
  title: null,
  withSearch: false,
  withBackButton: false,
  withLoveButton: false,
}

export default Layout
