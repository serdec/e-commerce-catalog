import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Footer from './footer';

describe('footer', async (assert) => {
  const createFooter = ({ children } = {}) =>
    render(<Footer>{children}</Footer>);
  {
    const $ = createFooter();
    assert({
      given: 'no arguments',
      should: 'render the footer component',
      expected: 1,
      actual: $('footer').length,
    });
  }
});
