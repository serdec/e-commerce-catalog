import React, { useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import WhishListIcon from '../../Icons/whishlist-icon';

const noop = () => {};

export const Product__WishlistButton = ({
  inWishlist = false,
  onWishlistClick = noop,
} = {}) => {
  const wishlistClass = inWishlist ? 'button--inWishlist' : 'button--wishlist';
  return (
    <button
      className={`product__wishlist-button button button--round ${wishlistClass}`}
      onClick={onWishlistClick}
    >
      <WhishListIcon />
    </button>
  );
};
Product__WishlistButton.propTypes = {
  inWishlist: bool,
  onWishlistClick: func,
};

const Product__WishlistButton_Container = ({
  inWishlist = false,
  onWishlistClick = noop,
} = {}) => {
  const [isInWishlist, setInWishlist] = useState(false);
  useEffect(() => {
    setInWishlist(inWishlist);
  }, [inWishlist]);

  return (
    <Product__WishlistButton
      inWishlist={isInWishlist}
      onWishlistClick={onWishlistClick}
    />
  );
};
Product__WishlistButton_Container.propTypes = {
  inWishlist: bool,
  onWishlistClick: func,
};

export default Product__WishlistButton_Container;
