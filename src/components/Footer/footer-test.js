import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
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
  {
    const children = <h1>Some Text</h1>;
    const $ = createFooter({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some Text';
    assert({
      given: 'no arguments',
      should: 'render the footer component',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
