import React from 'react';
import PropTypes from 'prop-types';
import Product__Title from '../__Title/product__title';
import Product__Subtitle from '../__Subtitle/product__subtitle';
import Product__Price from '../__Price/product__price';

const Product__Details = ({
  title = '',
  subtitle = '',
  price,
  strike,
  discounted,
} = {}) => (
  <div className="product__details">
    <Product__Title title={title} />
    <Product__Subtitle subtitle={subtitle} />
    <Product__Price price={price} strike={strike} discounted={discounted} />
    <button className="product__add-to-cart button button--primary">
      Add to Cart
    </button>
  </div>
);

Product__Details.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  strike: PropTypes.number,
  discounted: PropTypes.number,
};
export default Product__Details;
