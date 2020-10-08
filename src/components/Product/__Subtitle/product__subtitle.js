import React from 'react';
import PropTypes from 'prop-types';

const Product__Subtitle = ({ subtitle = '' } = {}) => (
  <p className="product__subtitle" itemProp="description">
    {subtitle}
  </p>
);

Product__Subtitle.propTypes = {
  subtitle: PropTypes.string,
};
export default Product__Subtitle;
