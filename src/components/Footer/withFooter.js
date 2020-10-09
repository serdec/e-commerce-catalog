import React from 'react';
import Footer from './footer';

const withFooter = (Component) => (props) => (
  <>
    {' '}
    <Component {...props} />
    <Footer />
  </>
);

export default withFooter;
