import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Price from './product__price';

describe('product__price', async (assert) => {
  const createProduct__Price = ({ price, strike, discounted } = {}) =>
    render(
      <Product__Price price={price} strike={strike} discounted={discounted} />
    );

  {
    const $ = createProduct__Price();
    {
      assert({
        given: 'no arguments',
        should: 'render the product price component',
        expected: 1,
        actual: $('.product__price').length,
      });
    }
  }
  {
    {
      const strike = 100;
      const $ = createProduct__Price({ strike });
      const contains = match($.html().trim());

      assert({
        given: 'a strike price',
        should: 'render the price',
        expected: '100',
        actual: contains(strike),
      });
    }
    {
      const strike = 101;
      const $ = createProduct__Price({ strike });
      const contains = match($.html().trim());
      assert({
        given: 'a strike price',
        should: 'render the price',
        expected: '101',
        actual: contains(strike),
      });
    }
    {
      const strike = 100;
      const $ = createProduct__Price({ strike });
      const contains = match($.html().trim());
      const strikeClass = 'product__price--strike';
      assert({
        given: 'a strike price',
        should: 'render the prices with the correct class',
        expected: strikeClass,
        actual: contains(strikeClass),
      });
    }
  }
  {
    {
      const discounted = 50;
      const $ = createProduct__Price({ discounted });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a discounted price',
          should: 'render the price',
          expected: '50',
          actual: contains(discounted),
        });
      }
    }
    {
      const discounted = 51;
      const $ = createProduct__Price({ discounted });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a discounted price',
          should: 'render the price',
          expected: '51',
          actual: contains(discounted),
        });
      }
    }
    {
      const discounted = 50;
      const $ = createProduct__Price({ discounted });
      const contains = match($.html().trim());
      const discountedClass = 'product__price--discounted';
      assert({
        given: 'a discounted price',
        should: 'render the prices with the correct class',
        expected: discountedClass,
        actual: contains(discountedClass),
      });
    }
  }
  {
    {
      const price = 200;
      const $ = createProduct__Price({ price });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a regular price',
          should: 'render the price',
          expected: '200',
          actual: contains(price),
        });
      }
    }
    {
      const price = 201;
      const $ = createProduct__Price({ price });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a regular price',
          should: 'render the price',
          expected: '201',
          actual: contains(price),
        });
      }
    }
    {
      const price = 200;
      const discounted = 100;
      const strike = 50;
      const $ = createProduct__Price({ price, discounted, strike });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a regular price',
          should: 'not render the strike price',
          expected: '',
          actual: contains(strike),
        });
      }
      {
        assert({
          given: 'a regular price',
          should: 'not render the discounted price',
          expected: '',
          actual: contains(discounted),
        });
      }
    }
  }
});
