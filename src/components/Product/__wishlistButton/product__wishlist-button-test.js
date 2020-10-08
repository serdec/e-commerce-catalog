import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Product__WishlistButton from './product__wishlist-button';

describe('product__wishilist-button', async (assert) => {
  const createProduct__WishlistButton = () =>
    render(<Product__WishlistButton />);

  {
    const $ = createProduct__WishlistButton();
    assert({
      given: 'no arguments',
      should: 'render the product wishlist button',
      expected: 1,
      actual: $('.product__wishlist-button').length,
    });
  }
});
