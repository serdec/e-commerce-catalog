import React from 'react';
import PropTypes from 'prop-types';
import Product__ImageWrapper from './__ImageWrapper/product__image-wrapper';
import Product__Details from './__Details/product__details';

const Product = ({
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = 0,
  net_price = 0,
  discount = 0,
  inCart = false,
} = {}) => (
  <article className="product" itemScope itemType="http://schema.org/Product">
    <Product__ImageWrapper cover_image_url={cover_image_url} />
    <Product__Details
      title={title}
      cover_image_url={cover_image_url}
      description={description}
      retail_price={retail_price}
      net_price={net_price}
      discount={discount}
      inCart={inCart}
    />
  </article>
);

Product.propTypes = {
  cover_image_url: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  retail_price: PropTypes.number,
  net_price: PropTypes.number,
  discount: PropTypes.number,
  inCart: PropTypes.bool,
};

export default Product;
