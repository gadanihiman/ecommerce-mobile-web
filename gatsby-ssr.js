/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { renderToString } from "react-dom/server"
import Helmet from "react-helmet"
import { ServerStyleSheet, ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { theme } from './src/lib/constants';
import configureStore from "./src/redux/configure-store"
import LoadingPage from "./src/components/Layout/LoadingPage"
import GlobalStyle from './src/lib/global-styles';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(sheet.collectStyles(bodyComponent))

  replaceBodyHTMLString(body)
  setHeadComponents([sheet.getStyleElement()])
}

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

const { store, persistor } = configureStore()
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={<LoadingPage />} persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
);
