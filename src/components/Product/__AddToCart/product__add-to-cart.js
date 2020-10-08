import React from 'react';
import PropTypes from 'prop-types';

const Product__AddToCart = ({ inCart = false } = {}) => {
  const buttonLabel = inCart ? 'In cart' : 'add to Cart';
  const buttonIsInCart = inCart ? 'button--in-cart' : '';
  return (
    <button
      className={`product__add-to-cart button button--primary ${buttonIsInCart}`}
    >
      {buttonLabel}
    </button>
  );
};

Product__AddToCart.propTypes = {
  inCart: PropTypes.bool,
};
export default Product__AddToCart;
