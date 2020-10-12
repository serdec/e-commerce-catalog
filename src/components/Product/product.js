import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product__ImageWrapper from './__ImageWrapper/product__image-wrapper';
import Product__Details from './__Details/product__details';
import { isProductInBag } from '../Bag/reducer';
import { addToBag, removeFromBag } from '../Bag/reducer';
import {
  addToWishlist,
  isProductInWishlist,
  removeFromWishlist,
} from '../Wishlist/reducer';

const noop = () => { };

const mapStateToProps = (state) => ({
  isProductInBag: isProductInBag(state.bag),
  isProductInWishlist: isProductInWishlist(state.wishlist),
});
const mapDispatchToProps = {
  addToBag,
  removeFromBag,
  addToWishlist,
  removeFromWishlist,
};

export const Product = ({
  product = {},
  isProductInBag = noop,
  addToBag = noop,
  removeFromBag = noop,
  isProductInWishlist = noop,
  addToWishlist = noop,
  removeFromWishlist = noop,
} = {}) => {
  const inBag = isProductInBag(product.uuid);
  const onBagClick = inBag
    ? () => removeFromBag(product.uuid)
    : () => addToBag(product);

  const inWishlist = isProductInWishlist(product.uuid);
  const onWishlistClick = inWishlist
    ? () => removeFromWishlist(product.uuid)
    : () => addToWishlist(product);

  return (
    <article className="product" itemScope itemType="http://schema.org/Product">
      <Product__ImageWrapper
        cover_image_url={product.cover_image_url}
        inWishlist={inWishlist}
        onWishlistClick={onWishlistClick}
      />
      <Product__Details
        {...product}
        retail_price={product.retail_price?.formatted_value}
        net_price={product.net_price?.formatted_value}
        inBag={isProductInBag(product.uuid)}
        onBagClick={() => onBagClick(product)}
      />
    </article>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  isProductInBag: PropTypes.func,
  addToBag: PropTypes.func,
  removeFromBag: PropTypes.func,
  isProductInWishlist: PropTypes.func,
  addToWishlist: PropTypes.func,
  removeFromWishlist: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
