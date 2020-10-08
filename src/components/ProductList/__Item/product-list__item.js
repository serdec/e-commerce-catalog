import React from 'react';
import Product from '../../Product/product';
import PropTypes from 'prop-types';

const ProductList__Item = ({
  title = '',
  img = '',
  subtitle = '',
  price = undefined,
  strike = undefined,
  discounted = undefined,
  inCart = false,
} = {}) => (
  <li className="product-list__item">
    <Product
      title={title}
      img={img}
      subtitle={subtitle}
      price={price}
      strike={strike}
      discounted={discounted}
      inCart={inCart}
    />
  </li>
);

ProductList__Item.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  strike: PropTypes.number,
  discounted: PropTypes.number,
  inCart: PropTypes.bool,
};
export default ProductList__Item;
