import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Product__ImageWrapper from './product__image-wrapper';

describe('product__image-wrapper', async (assert) => {
  const createProduct__ImageWrapper = () => render(<Product__ImageWrapper />);
  {
    const $ = createProduct__ImageWrapper();
    assert({
      given: 'no arguments',
      should: 'render the product image wrapper',
      expected: 1,
      actual: $('.product__image-wrapper').length,
    });
  }
});
