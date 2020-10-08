import React from 'react';
import PropTypes from 'prop-types';

const Bag__Item = ({ isCounter = false, value } = {}) => {
  const counterClass = isCounter ? '-counter' : '';
  return (
    <>{value && <span className={`bag__item${counterClass}`}>{value}</span>}</>
  );
};

Bag__Item.propTypes = {
  isCounter: PropTypes.bool,
  value: PropTypes.number,
};
export default Bag__Item;
