import React from 'react';
import { string } from 'prop-types';

const Footer__Sidenote = ({ content = '' } = {}) => (
  <p className="footer__sidenote">{content}</p>
);

Footer__Sidenote.propTypes = {
  content: string,
};
export default Footer__Sidenote;
