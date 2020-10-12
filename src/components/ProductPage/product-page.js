import React from 'react';
import { any } from 'prop-types';
import Container from '../Product/Container/container';

const ProductPage = ({ children } = {}) => (
  <main className="product-page">
    <Container>{children}</Container>
  </main>
);

ProductPage.propTypes = {
  children: any,
};
export default ProductPage;
