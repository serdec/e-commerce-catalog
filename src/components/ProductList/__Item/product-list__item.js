import React from 'react';
import Product from '../../Product/product';
import PropTypes from 'prop-types';

const ProductList__Item = ({
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = '0',
  net_price = '0',
  discount = 0,
  inCart = false,
} = {}) => (
  <li className="product-list__item">
    <Product
      title={title}
      cover_image_url={cover_image_url}
      description={description}
      retail_price={retail_price}
      net_price={net_price}
      discount={discount}
      inCart={inCart}
    />
  </li>
);

ProductList__Item.propTypes = {
  title: PropTypes.string,
  cover_image_url: PropTypes.string,
  description: PropTypes.string,
  retail_price: PropTypes.string,
  net_price: PropTypes.string,
  discount: PropTypes.number,
  inCart: PropTypes.bool,
};
export default ProductList__Item;
