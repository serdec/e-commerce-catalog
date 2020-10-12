import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HeaderBag from './header-bag';

describe('aside', async (assert) => {
  const createHeaderBag = ({ children } = {}) =>
    render(<HeaderBag>{children}</HeaderBag>);
  {
    const $ = createHeaderBag();
    {
      assert({
        given: 'no argument',
        should: 'render the header-bag',
        expected: 1,
        actual: $('.header-bag').length,
      });
    }
  }
  {
    const children = <h1>Some Text</h1>;
    const $ = createHeaderBag({ children });
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
