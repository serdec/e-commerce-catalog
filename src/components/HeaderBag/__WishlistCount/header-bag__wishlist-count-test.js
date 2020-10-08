import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HeaderBag__WishlistCount from './header-bag__wishlist-count';

describe('header-bag__count', async (assert) => {
  const createHeaderBag__WishlistCount = ({ children } = {}) =>
    render(<HeaderBag__WishlistCount>{children}</HeaderBag__WishlistCount>);
  {
    const $ = createHeaderBag__WishlistCount();
    assert({
      given: 'no arguments',
      should: 'render the header bag wishlist count',
      expected: 1,
      actual: $('.header-bag__wishlist-count').length,
    });
  }
  {
    const children = <h1>Some Text</h1>;
    const $ = createHeaderBag__WishlistCount({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some Text';
    assert({
      given: 'some children',
      should: 'render the header bag whislist count children',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
