import React from 'react';
import { any } from 'prop-types';

const Container = ({ children } = {}) => (
  <div className="container">{children}</div>
);

Container.propTypes = {
  children: any,
};

export default Container;
