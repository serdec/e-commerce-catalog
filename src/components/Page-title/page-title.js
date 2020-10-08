import React from 'react';
import { string } from 'prop-types';

const PageTitle = ({ content = '' } = {}) => (
  <h1 className="page-title">{content}</h1>
);

PageTitle.propTypes = {
  content: string,
};
export default PageTitle;
