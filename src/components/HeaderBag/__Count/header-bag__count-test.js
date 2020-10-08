import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HeaderBag__Count from './header-bag__count';

describe('header-bag__count', async (assert) => {
  const createHeaderBag__Count = ({ children } = {}) =>
    render(<HeaderBag__Count>{children}</HeaderBag__Count>);
  {
    const $ = createHeaderBag__Count();
    assert({
      given: 'no arguments',
      should: 'render the header bag count',
      expected: 1,
      actual: $('.header-bag__count').length,
    });
  }
  {
    const children = <h1>Some Text</h1>;
    const $ = createHeaderBag__Count({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some Text';
    assert({
      given: 'some children',
      should: 'render the header bag count children',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
