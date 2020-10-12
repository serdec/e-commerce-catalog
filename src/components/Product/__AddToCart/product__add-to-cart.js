import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const noop = () => { };

/* Export for testing */
export const Product__AddToCart = ({
  inBag = false,
  onBagClick = noop,
} = {}) => {
  const buttonLabel = inBag ? 'In cart' : 'add to Cart';
  const buttonIsInCart = inBag ? 'button--in-cart' : '';
  return (
    <button
      className={`product__add-to-cart button button--primary ${buttonIsInCart}`}
      onClick={onBagClick}
    >
      {buttonLabel}
    </button>
  );
};
/*
 * When using static generation there might be a mismatch
 * between the version pre-generated and the one on the
 * client side. The useEffect below fixes the mismatch
 * between the two versions.
 */
const Product__AddToCart_Container = ({
  inBag = false,
  onBagClick = noop,
} = {}) => {
  const [isInBag, setIsInBag] = useState(false);
  //fixes hydration mismatch
  useEffect(() => {
    setIsInBag(inBag);
  }, [inBag]);

  return <Product__AddToCart inBag={isInBag} onBagClick={onBagClick} />;
};

Product__AddToCart_Container.propTypes = {
  inBag: PropTypes.bool,
  onBagClick: PropTypes.func,
};

Product__AddToCart.propTypes = {
  inBag: PropTypes.bool,
  onBagClick: PropTypes.func,
};

export default Product__AddToCart_Container;
