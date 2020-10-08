import React from 'react';
import { string } from 'prop-types';

const Pagination__Link = ({ id = '', title = '' } = {}) => {
  return (
    <a className="pagination__link">
      {id === 'LeftArrow' && (
        <svg
          className="icon"
          width="8px"
          height="10px"
          viewBox="18 18 8 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>{title}</title>
          <polygon
            id="Left-Icon"
            stroke="none"
            fillRule="evenodd"
            transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
            points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
          ></polygon>
        </svg>
      )}
      {id === 'RightArrow' && (
        <svg
          className="icon"
          width="8px"
          height="10px"
          viewBox="18 18 8 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Arrow Right</title>
          <polygon
            id="Left-Iocn"
            stroke="none"
            fillRule="evenodd"
            points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
          ></polygon>
        </svg>
      )}
      {id !== 'RightArrow' && id !== 'LeftArrow' && id}
    </a>
  );
};

Pagination__Link.propTypes = {
  id: string,
  title: string,
};

export default Pagination__Link;
