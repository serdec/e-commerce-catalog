import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import ProductPage from './product-page';

describe('product-page', async (assert) => {
  const createProductPage = ({ children } = {}) =>
    render(<ProductPage>{children}</ProductPage>);
  {
    const $ = createProductPage();
    assert({
      given: 'no arguments',
      should: 'render the product page component',
      expected: 1,
      actual: $('.product-page').length,
    });
  }
  {
    const children = <h1>Some text</h1>;
    const $ = createProductPage({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some text';
    assert({
      given: 'some children',
      should: 'render the children',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
