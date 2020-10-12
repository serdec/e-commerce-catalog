import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Product__Details from './product__details';
import { wrapper } from '../../../store/store';

const Product__Details_WithStore = wrapper.withRedux(Product__Details);

describe('product__details', async (assert) => {
  const createProduct__Details = () => render(<Product__Details_WithStore />);
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
