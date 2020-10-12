import React from 'react';
import ProductPage from '../ProductPage/product-page';

const withProductPage = (Component) => (props) =>
  (function withProductPage() {
    return (
      <>
        {' '}
        <ProductPage>
          <Component {...props} />
        </ProductPage>
      </>
    );
  })();

export default withProductPage;
