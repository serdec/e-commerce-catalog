import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import ProductList from './product-list';

describe('product list', async (assert) => {
  const createProductList = () => render(<ProductList />);
  {
    const $ = createProductList();
    assert({
      given: 'no arguments',
      should: 'render the product list',
      expected: 1,
      actual: $('.product-list').length,
    });
  }
});
