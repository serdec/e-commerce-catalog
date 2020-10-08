import React from 'react';
import PropTypes from 'prop-types';

const Product__Title = ({ title = '' } = {}) => (
  <h1 className="product__title" itemProp="brand">
    {title}
  </h1>
);

Product__Title.propTypes = {
  title: PropTypes.string,
};

export default Product__Title;
