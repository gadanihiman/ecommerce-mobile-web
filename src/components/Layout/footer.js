import { Layout } from 'antd';
import React from "react"

const { Footer: FooterBase } = Layout;

const Footer = () => (
  <FooterBase>
    {/* Footer {siteTitle} */}
    © {new Date().getFullYear()}, Made with love by
    {` `}
    <a href="https://github.com/gadanihiman">Gadani H.G</a>
  </FooterBase>
)

export default Footer
