import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Product__Details from './product__details';

describe('product__details', async (assert) => {
  const createProduct__Details = ({ title = '', description = '' } = {}) =>
    render(<Product__Details />);
  {
    const $ = createProduct__Details();
    assert({
      given: 'no arguments',
      should: 'render the product details',
      expected: 1,
      actual: $('.product__details').length,
    });
  }
});
