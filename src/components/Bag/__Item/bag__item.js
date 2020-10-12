import React from 'react';
import PropTypes from 'prop-types';

const Bag__Item = ({ isCounter = false, value = 0 } = {}) => {
  const counterClass = isCounter ? '-counter' : '';
  return (
    <>
      {value > 0 && <span className={`bag__item${counterClass}`}>{value}</span>}
    </>
  );
};

Bag__Item.propTypes = {
  isCounter: PropTypes.bool,
  value: PropTypes.number,
};
export default Bag__Item;
