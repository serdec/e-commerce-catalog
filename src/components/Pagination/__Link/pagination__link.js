import React from 'react';
import { string } from 'prop-types';
import Link from 'next/link';

const Pagination__Link = ({ label = '', link = '' } = {}) => (
  <Link href={link}>
    <a className="pagination__link">{label}</a>
  </Link>
);

Pagination__Link.propTypes = {
  label: string,
  link: string,
};

export default Pagination__Link;
