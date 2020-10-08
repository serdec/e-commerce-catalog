import React from 'react';
import PropTypes from 'prop-types';

const Product__Price = ({ price, strike, discounted } = {}) => (
  <>
    {price ? (
      <span className="product__price">£{price}</span>
    ) : (
      <div
        className="product__price"
        itemScope
        itemType="http://schema.org/Offer"
      >
        <span className="product__price--strike">£{strike}</span>
        <span className="product__price--discounted" itemProp="price">
          £{discounted}
        </span>
      </div>
    )}
  </>
);

Product__Price.propTypes = {
  price: PropTypes.number,
  strike: PropTypes.number,
  discounted: PropTypes.number,
};

export default Product__Price;
