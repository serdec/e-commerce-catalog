import React from 'react';
import PropTypes from 'prop-types';

const Product__Image = ({ img }) => (
  <img className="product__image" src={img} alt="Product" itemProp="image" />
);

Product__Image.propTypes = {
  img: PropTypes.string,
};

export default Product__Image;
