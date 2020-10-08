import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Pagination__Item from './pagination__item';

describe('pagination__item', async (assert) => {
  const createPagination__Item = ({ children } = {}) =>
    render(<Pagination__Item>{children}</Pagination__Item>);

  {
    const $ = createPagination__Item();
    assert({
      given: 'no arguments',
      should: 'render the pagination item component',
      expected: 1,
      actual: $('.pagination__item').length,
    });
  }
  {
    const children = <h1>Some text</h1>;
    const $ = createPagination__Item({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some text';
    assert({
      given: 'no arguments',
      should: 'render the pagination item component',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
