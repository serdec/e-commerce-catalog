import React from 'react';
import { array } from 'prop-types';
import Pagination__Item from '../__Item/pagination__item';
import Pagination__Link from '../__Link/pagination__link';

const Pagination__List = ({ list = [] } = {}) => (
  <ul className="pagination__list">
    {list.map((el) => (
      <Pagination__Item key={el.id}>
        <Pagination__Link id={el.id} title={el.title} />
      </Pagination__Item>
    ))}
  </ul>
);

Pagination__List.propTypes = {
  list: array,
};

export default Pagination__List;
