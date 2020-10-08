import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HeaderBag__Item from './header-bag__item';

describe('header-bag__item', async (assert) => {
  const createHeaderBag__Item = ({ children } = {}) =>
    render(<HeaderBag__Item>{children}</HeaderBag__Item>);
  {
    const $ = createHeaderBag__Item();
    assert({
      given: 'no arguments',
      should: 'render the header bag item',
      expected: 1,
      actual: $('.header-bag__item').length,
    });
  }
  {
    const children = <h1>Some Text</h1>;
    const $ = createHeaderBag__Item({ children });
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
