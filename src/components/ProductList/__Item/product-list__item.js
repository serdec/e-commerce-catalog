import React from 'react';
import Product from '../../Product/product';
import { object } from 'prop-types';

const ProductList__Item = ({ product = {} } = {}) => (
  <li className="product-list__item">
    <Product product={product} />
  </li>
);

ProductList__Item.propTypes = {
  product: object,
};
export default ProductList__Item;
