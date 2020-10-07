import React from 'react';
import PropTypes from 'prop-types';
import Product__Image from '../__Image/product__image';
import Product__WishlistButton from '../__wishlistButton/product__wishlist-button';

const Product__ImageWrapper = ({ img = '' } = {}) => (
  <figure className="product__image-wrapper">
    <Product__Image img={img} />
    <Product__WishlistButton />
  </figure>
);

Product__ImageWrapper.propTypes = {
  img: PropTypes.string,
};
export default Product__ImageWrapper;
