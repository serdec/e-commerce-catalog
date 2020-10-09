import React from 'react';
import Header from './header';

const withHeader = (Component) =>
  function WithHeader(props) {
    return (
      <>
        {' '}
        <Header /> <Component {...props} />
      </>
    );
  };

export default withHeader;
