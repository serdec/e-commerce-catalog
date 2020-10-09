import React from 'react';
import PropTypes from 'prop-types';

const Product__Image = ({ img }) => {
  const croppedImg = img + '?q=60&fit=crop&w=300&h=300';
  return (
    <img
      className="product__image"
      src={croppedImg}
      alt="Product"
      itemProp="image"
    />
  );
};
Product__Image.propTypes = {
  img: PropTypes.string,
};

export default Product__Image;
