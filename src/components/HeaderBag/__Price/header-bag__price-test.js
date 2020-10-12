import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HeaderBag__Price from './header-bag__price';

describe('header-bag__price', async (assert) => {
  const createHeaderBag__Price = ({ value } = {}) =>
    render(<HeaderBag__Price value={value} />);
  {
    const $ = createHeaderBag__Price();
    assert({
      given: 'no arguments',
      should: 'not render the header bag price component',
      expected: 0,
      actual: $('.header-bag__price').length,
    });
  }
  {
    const value = 210;
    const $ = createHeaderBag__Price({ value });
    const contains = match($.html().trim());
    const textToSearch = '210';
    assert({
      given: 'a price value',
      should: 'render the header bag price',
      expected: 1,
      actual: $('.header-bag__price').length,
    });
    assert({
      given: 'a price value',
      should: 'render the price',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const value = 0;
    const $ = createHeaderBag__Price({ value });
    const contains = match($.html().trim());
    const textToSearch = '0';
    assert({
      given: 'a price value of 0',
      should: 'not render the price',
      expected: '',
      actual: contains(textToSearch),
    });
  }
});
