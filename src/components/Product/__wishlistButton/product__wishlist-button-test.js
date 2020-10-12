import React from 'react';
import { describe } from 'riteway';
import match from 'riteway/match';
import render from 'riteway/render-component';
import { Product__WishlistButton } from './product__wishlist-button';

describe('product__wishilist-button', async (assert) => {
  const createProduct__WishlistButton = ({ inWishlist = false } = {}) =>
    render(<Product__WishlistButton inWishlist={inWishlist} />);

  {
    const $ = createProduct__WishlistButton();
    assert({
      given: 'no arguments',
      should: 'render the product wishlist button',
      expected: 1,
      actual: $('.product__wishlist-button').length,
    });
  }
  {
    const $ = createProduct__WishlistButton({ inWishlist: false });
    const contains = match($.html());
    const textToSearch = 'button--wishlist';
    assert({
      given: 'a product not in the wishlist',
      should: 'render the button with the matching class',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const $ = createProduct__WishlistButton({ inWishlist: true });
    const contains = match($.html());
    const textToSearch = 'button--inWishlist';
    assert({
      given: 'a product in the wishlist',
      should: 'render the button with the class inWishilist',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
