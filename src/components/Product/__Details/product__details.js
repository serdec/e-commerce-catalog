import React from 'react';
import PropTypes from 'prop-types';
import Product__Title from '../__Title/product__title';
import Product__Description from '../__description/product__description';
import Product__Price from '../__Price/product__price';
import Product__AddToCart from '../__AddToCart/product__add-to-cart';

const Product__Details = ({
  title = '',
  description = '',
  retail_price = '0',
  net_price = '0',
  discount = 0,
  inCart = false,
} = {}) => (
  <div className="product__details">
    <Product__Title title={title} />
    <Product__Description description={description} />
    <Product__Price
      retail_price={retail_price}
      net_price={net_price}
      discount={discount}
    />
    <Product__AddToCart inCart={inCart} />
  </div>
);

Product__Details.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  retail_price: PropTypes.string,
  net_price: PropTypes.string,
  discount: PropTypes.number,
  inCart: PropTypes.bool,
};
export default Product__Details;
