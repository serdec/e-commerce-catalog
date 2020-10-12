import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import { Product__AddToCart } from './product__add-to-cart';

describe('product__add-to-cart', async (assert) => {
  const createProduct__AddToCart = ({ primary = false, inBag = false } = {}) =>
    render(<Product__AddToCart primary={primary} inBag={inBag} />);
  {
    const $ = createProduct__AddToCart();
    assert({
      given: 'no arguments',
      should: 'render the product add to cart component',
      expected: 1,
      actual: $('.product__add-to-cart').length,
    });
  }
  {
    const primary = true;
    const inBag = true;
    const $ = createProduct__AddToCart({ primary, inBag });
    const contains = match($.html().trim());
    assert({
      given: 'primary flag',
      should: 'render as primary button',
      expected: 'button--primary',
      actual: contains('button--primary'),
    });
    assert({
      given: 'in cart flag',
      should: 'render as in cart',
      expected: 'button--in-cart',
      actual: contains('button--in-cart'),
    });
  }
});
