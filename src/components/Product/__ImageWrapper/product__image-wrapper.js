import React from 'react';
import PropTypes from 'prop-types';
import Product__Image from '../__Image/product__image';
import Product__WishlistButton from '../__wishlistButton/product__wishlist-button';

const noop = () => {};
const Product__ImageWrapper = ({
  cover_image_url = '',
  inWishlist = false,
  onWishlistClick = noop,
} = {}) => (
  <figure className="product__image-wrapper">
    <Product__Image img={cover_image_url} />
    <Product__WishlistButton
      inWishlist={inWishlist}
      onWishlistClick={onWishlistClick}
    />
  </figure>
);

Product__ImageWrapper.propTypes = {
  cover_image_url: PropTypes.string,
  inWishlist: PropTypes.bool,
  onWishlistClick: PropTypes.func,
};
export default Product__ImageWrapper;
