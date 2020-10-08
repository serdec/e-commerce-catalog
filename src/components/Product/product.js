import React from 'react';
import PropTypes from 'prop-types';
import Product__ImageWrapper from './__ImageWrapper/product__image-wrapper';
import Product__Details from './__Details/product__details';

const Product = ({
  title = '',
  img = '',
  subtitle = '',
  price = undefined,
  strike = undefined,
  discounted = undefined,
  inCart = false,
} = {}) => (
  <article className="product" itemScope itemType="http://schema.org/Product">
    <Product__ImageWrapper img={img} />
    <Product__Details
      title={title}
      img={img}
      subtitle={subtitle}
      price={price}
      strike={strike}
      discounted={discounted}
      inCart={inCart}
    />
  </article>
);

Product.propTypes = {
  img: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  strike: PropTypes.number,
  discounted: PropTypes.number,
  inCart: PropTypes.bool,
};

export default Product;
