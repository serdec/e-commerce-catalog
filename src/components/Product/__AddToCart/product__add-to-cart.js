import React from 'react';
import PropTypes from 'prop-types';

const Product__AddToCart = ({ primary = false, inCart = false } = {}) => {
  const type = primary ? 'button--primary' : '';
  const isInCart = inCart ? 'button--in-cart' : '';
  return (
    <button className={`product__add-to-cart button ${type} ${isInCart}`}>
      Add to Cart
    </button>
  );
};

Product__AddToCart.propTypes = {
  primary: PropTypes.bool,
  inCart: PropTypes.bool,
};
export default Product__AddToCart;
