import React from 'react';
import ProductPage from './product-page';

const withProductPage = (Component) => (props) => (
  <>
    {' '}
    <ProductPage>
      <Component {...props} />
    </ProductPage>
  </>
);

export default withProductPage;
