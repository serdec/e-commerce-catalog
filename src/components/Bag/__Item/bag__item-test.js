import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Bag__Item from './bag__item';

describe('bag__item', async (assert) => {
  const createBag__Item = ({ value, isCounter = false } = {}) =>
    render(<Bag__Item value={value} isCounter={isCounter} />);
  {
    const $ = createBag__Item();
    assert({
      given: 'no arguments',
      should: 'not render the bag item',
      expected: 0,
      actual: $('.bag__item').length,
    });
  }
  {
    const value = 0;
    const $ = createBag__Item({ value, isCounter: true });
    const contains = match($.html());
    const textToSearch = '0';
    assert({
      given: 'a price value 0',
      should: 'should not render the counter',
      expected: '',
      actual: contains(textToSearch),
    });
  }
  {
    const value = 210;
    const $ = createBag__Item({ value });
    const contains = match($.html().trim());
    const textToSearch = '210';
    assert({
      given: 'a price value',
      should: 'render the bag item',
      expected: 1,
      actual: $('.bag__item').length,
    });
    assert({
      given: 'a price value',
      should: 'render the value',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const value = 210;
    const isCounter = true;
    const $ = createBag__Item({ value, isCounter });
    const contains = match($.html().trim());
    const textToSearch = '-counter';
    assert({
      given: 'a price value',
      should: 'render the item with the counter modifier',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
