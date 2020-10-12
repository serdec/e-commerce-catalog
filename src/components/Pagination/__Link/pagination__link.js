import React from 'react';
import { bool, string } from 'prop-types';
import Link from 'next/link';

const Pagination__Link = ({ label = '', link = '', current = false } = {}) => {
  const currentClass = current ? 'pagination__link--current' : '';
  return (
    <Link href={link}>
      <a className={`pagination__link ${currentClass}`}>{label}</a>
    </Link>
  );
};

Pagination__Link.propTypes = {
  label: string,
  link: string,
  current: bool,
};

export default Pagination__Link;
