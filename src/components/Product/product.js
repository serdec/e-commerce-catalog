import React from 'react';
import PropTypes from 'prop-types';
import Product__ImageWrapper from './__ImageWrapper/product__image-wrapper';

const Product = ({ title = '', img = '' } = {}) => (
  <article className="product" itemScope itemType="http://schema.org/Product">
    <Product__ImageWrapper img={img} />
    <div className="product__details"></div>
  </article>
);

Product.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Product;
