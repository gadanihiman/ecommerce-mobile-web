import { Layout } from 'antd';
import React from "react"

const { Footer: FooterBase } = Layout;

const Footer = () => (
  <FooterBase>
    {/* Footer {siteTitle} */}
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterBase>
)

export default Footer
