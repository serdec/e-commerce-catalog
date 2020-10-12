import React from 'react';
import Link from 'next/link';
import { array, number } from 'prop-types';
import Pagination__Item from '../__Item/pagination__item';
import Pagination__Link from '../__Link/pagination__link';
import ArrowLeft from '../../Icons/arrow-left';
import ArrowRight from '../../Icons/arrow-right';

const Pagination__List = ({ list = [], current = 1 } = {}) => {
  const prevPage = current - 1;
  const nextPage = parseInt(current) + 1;
  const prevLink = current > 1 ? `/page/${prevPage}` : `/page/${current}`;
  const nextLink =
    current < list.length ? `/page/${nextPage}` : `/page/${current}`;
  const url = '/page/';
  return (
    <ul className="pagination__list">
      <Pagination__Item>
        <Link href={prevLink}>
          <a className="pagination__link">
            <ArrowLeft />
          </a>
        </Link>
      </Pagination__Item>

      {list.map((page) => (
        <Pagination__Item key={page.id}>
          <Pagination__Link
            label={page.id}
            link={`${url}${page.id}`}
            current={current === parseInt(page.id)}
          />
        </Pagination__Item>
      ))}
      <Pagination__Item>
        <Link href={nextLink}>
          <a className="pagination__link">
            <ArrowRight />
          </a>
        </Link>
      </Pagination__Item>
    </ul>
  );
};

Pagination__List.propTypes = {
  list: array,
  current: number,
};

export default Pagination__List;
