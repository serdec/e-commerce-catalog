import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Subtitle from './product__subtitle';

describe('prodcut__subtitle', async (assert) => {
  const createProduct__Subtitle = ({ subtitle = '' } = {}) =>
    render(<Product__Subtitle subtitle={subtitle} />);

  {
    const $ = createProduct__Subtitle();
    assert({
      given: 'no arguments',
      should: 'render the product subtitle',
      expected: 1,
      actual: $('.product__subtitle').length,
    });
  }
  {
    const subtitle = 'myProduct Subtitle';
    const $ = createProduct__Subtitle({ subtitle });
    const contains = match($.html().trim());
    assert({
      given: 'a subtitle',
      should: 'render the subtitle',
      expected: subtitle,
      actual: contains(subtitle),
    });
  }
});
