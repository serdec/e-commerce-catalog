import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const withLayout = (Component) => (props) => (
  <>
    {' '}
    <Header />
    <Component {...props} />
    <Footer />
  </>
);

export default withLayout;
