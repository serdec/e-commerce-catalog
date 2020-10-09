import React from 'react';
import PropTypes from 'prop-types';

const Product__Description = ({ description = '' } = {}) => (
  <p className="product__subtitle" itemProp="description">
    {description}
  </p>
);

Product__Description.propTypes = {
  description: PropTypes.string,
};
export default Product__Description;
