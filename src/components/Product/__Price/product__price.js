import React from 'react';
import PropTypes from 'prop-types';

const Product__Price = ({
  retail_price = '0',
  net_price = '0',
  discount = 0,
} = {}) => (
  <div className="product__price" itemScope itemType="http://schema.org/Offer">
    {discount > 0 ? (
      <>
        <span className="product__price--strike">{net_price}</span>
        <span className="product__price--discounted">{retail_price}</span>
      </>
    ) : (
      <span className="product__price">{retail_price}</span>
    )}
  </div>
);

Product__Price.propTypes = {
  retail_price: PropTypes.string,
  net_price: PropTypes.string,
  discount: PropTypes.number,
};

export default Product__Price;
