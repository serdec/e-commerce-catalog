import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product from './product';

describe('product', async (assert) => {
  const createProduct = ({ title = '', img = '' } = {}) =>
    render(<Product title={title} img={img} />);

  {
    const $ = createProduct();
    assert({
      given: 'no arguments',
      should: 'render the product',
      expected: 1,
      actual: $('.product').length,
    });
  }

  {
    const $ = createProduct();
    assert({
      given: 'no arguments',
      should: 'render the product details',
      expected: 1,
      actual: $('.product__details').length,
    });
  }
});
