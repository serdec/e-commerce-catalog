import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Header from './header';

describe('header', async (assert) => {
  const createHeader = ({ children } = {}) =>
    render(<Header>{children}</Header>);
  {
    const $ = createHeader();
    {
      assert({
        given: 'no argument',
        should: 'render the header',
        expected: 1,
        actual: $('.header').length,
      });
    }
  }
});
