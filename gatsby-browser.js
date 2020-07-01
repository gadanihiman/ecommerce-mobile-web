import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './src/lib/global-styles';
import configureStore from "./src/redux/configure-store"
import { theme } from './src/lib/constants';
import LoadingPage from "./src/components/Layout/LoadingPage"

const { store, persistor } = configureStore()

/* eslint-disable react/prop-types */
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
