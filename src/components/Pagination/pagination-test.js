import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Pagination from './pagination';

describe('pagination', async (assert) => {
  const createPagination = ({ children } = {}) =>
    render(<Pagination>{children}</Pagination>);
  {
    const $ = createPagination();
    assert({
      given: 'no arguments',
      should: 'render the pagination component',
      expected: 1,
      actual: $('.pagination').length,
    });
  }
  {
    const children = <h1>Some text</h1>;
    const $ = createPagination({ children });
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
