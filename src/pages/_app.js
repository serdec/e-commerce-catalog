import React from 'react';
import '../main.css';
import { any } from 'prop-types';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: any,
  pageProps: any,
};
export default wrapper.withRedux(MyApp);
