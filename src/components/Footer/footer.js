import React from 'react';
import { any } from 'prop-types';

const Footer = ({ children } = {}) => (
  <footer className="container">{children}</footer>
);

Footer.propTypes = {
  children: any,
};

export default Footer;
