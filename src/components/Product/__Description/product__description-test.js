import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Description from './product__description';

describe('prodcut__description', async (assert) => {
  const createProduct__description = ({ description = '' } = {}) =>
    render(<Product__Description description={description} />);

  {
    const $ = createProduct__description();
    assert({
      given: 'no arguments',
      should: 'render the product description',
      expected: 1,
      actual: $('.product__subtitle').length,
    });
  }
  {
    const description = 'myProduct description';
    const $ = createProduct__description({ description });
    const contains = match($.html().trim());
    assert({
      given: 'a description',
      should: 'render the description',
      expected: description,
      actual: contains(description),
    });
  }
});
