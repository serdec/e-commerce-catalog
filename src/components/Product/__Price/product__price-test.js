import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Product__Price from './product__price';

describe('product__price', async (assert) => {
  const createProduct__Price = ({ retail_price, net_price, discount } = {}) =>
    render(
      <Product__Price
        retail_price={retail_price}
        net_price={net_price}
        discount={discount}
      />
    );

  {
    const $ = createProduct__Price();
    {
      assert({
        given: 'no arguments',
        should: 'render the product price container and the retail price',
        expected: 2,
        actual: $('.product__price').length,
      });
    }
  }
  {
    {
      const retail_price = 100;
      const $ = createProduct__Price({ retail_price });
      const contains = match($.html().trim());

      assert({
        given: 'a retail price',
        should: 'render the retail price',
        expected: '100',
        actual: contains(retail_price),
      });
    }
    {
      const retail_price = 101;
      const $ = createProduct__Price({ retail_price });
      const contains = match($.html().trim());
      assert({
        given: 'a retail price',
        should: 'render the retail price',
        expected: '101',
        actual: contains(retail_price),
      });
    }
    {
      const discount = 10;
      const net_price = 200;
      const retail_price = 100;
      const $ = createProduct__Price({ retail_price, net_price, discount });
      const contains = match($.html());
      const net_priceClass = 'product__price--strike';
      const discountedClass = 'product__price--discounted';
      assert({
        given: 'a net price and a discount',
        should: 'render the net price striked',
        expected: net_priceClass,
        actual: contains(net_priceClass),
      });
      assert({
        given: 'a retail price and a discount',
        should: 'render the retail price',
        expected: '100',
        actual: contains('100'),
      });
      assert({
        given: 'a discount retail price',
        should: 'render the retail price as discounted',
        expected: discountedClass,
        actual: contains(discountedClass),
      });
    }
  }
  {
    {
      const discount = 0;
      const retail_price = 100;
      const net_price = 200;
      const $ = createProduct__Price({ retail_price, net_price, discount });
      const contains = match($.html().trim());
      {
        assert({
          given: 'a discount of 0 and a retail price',
          should: 'render the retail price',
          expected: '100',
          actual: contains(retail_price),
        });
        {
          assert({
            given: 'a retail price and no discount',
            should: 'not render the net price',
            expected: '',
            actual: contains(net_price),
          });
        }
      }
    }
  }
});
