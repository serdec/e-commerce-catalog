import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Title from './product__title';

describe('product__title', async (assert) => {
  const createProduct__Title = ({ title = '' } = {}) =>
    render(<Product__Title title={title} />);

  {
    const $ = createProduct__Title();
    assert({
      given: 'no arguments',
      should: 'render the product title',
      expected: 1,
      actual: $('.product__title').length,
    });
  }
  {
    const title = 'myProduct Title';
    const $ = createProduct__Title({ title });
    const contains = match($.html().trim());
    assert({
      given: 'no arguments',
      should: 'render the product title',
      expected: title,
      actual: contains(title),
    });
  }
});
