import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import Pagination__List from './pagination__list';

describe('pagination__list', async (assert) => {
  const createPagination__List = () => render(<Pagination__List />);

  {
    const $ = createPagination__List();
    assert({
      given: 'no arguments',
      should: 'render the pagination list component',
      expected: 1,
      actual: $('.pagination__list').length,
    });
  }
});
