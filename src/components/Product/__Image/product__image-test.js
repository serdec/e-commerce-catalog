import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Image from './product__image';

describe('product__image', async (assert) => {
  const createProduct__Image = ({ img = '' } = {}) =>
    render(<Product__Image img={img} />);

  {
    const $ = createProduct__Image();
    assert({
      given: 'no arguments',
      should: 'render the product__image element',
      expected: 1,
      actual: $('.product__image').length,
    });
  }

  {
    const img = 'some_image.jpg';
    const $ = createProduct__Image({ img });
    const contains = match($.html().trim());
    assert({
      given: 'an image',
      should: 'render the product__image with the image',
      expected: img,
      actual: contains(img),
    });
  }
});
