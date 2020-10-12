import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import ProductList__Item from './product-list__item';
import { wrapper } from '../../../store/store';

const ProductList__Item_WithStore = wrapper.withRedux(ProductList__Item);

describe('product-list__item', async (assert) => {
  const createProductList__item = () => render(<ProductList__Item_WithStore />);
  {
    const $ = createProductList__item();
    assert({
      given: 'no arguments',
      should: 'render a product list item',
      expected: 1,
      actual: $('.product-list__item').length,
    });
  }
});
