import React from 'react';
import Product from '../../Product/product';
import PropTypes from 'prop-types';

const ProductList__Item = ({
  uuid = '',
  title = '',
  cover_image_url = '',
  description = '',
  retail_price = {},
  net_price = {},
  discount = 0,
} = {}) => (
  <li className="product-list__item">
    <Product
      uuid={uuid}
      title={title}
      cover_image_url={cover_image_url}
      description={description}
      retail_price={retail_price}
      net_price={net_price}
      discount={discount}
    />
  </li>
);

ProductList__Item.propTypes = {
  uuid: PropTypes.string,
  title: PropTypes.string,
  cover_image_url: PropTypes.string,
  description: PropTypes.string,
  retail_price: PropTypes.object,
  net_price: PropTypes.object,
  discount: PropTypes.number,
};
export default ProductList__Item;
