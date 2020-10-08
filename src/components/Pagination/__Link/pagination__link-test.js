import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Pagination__Link from './pagination__link';

describe('pagination__link', async (assert) => {
  const createPagination__Link = ({ id = '', title = '' } = {}) =>
    render(<Pagination__Link id={id} title={title} />);
  {
    const $ = createPagination__Link();
    assert({
      given: 'no arguments',
      should: 'render the pagination link component',
      expected: 1,
      actual: $('.pagination__link').length,
    });
  }
  {
    const textToSearch = 'Arrow Left';
    const $ = createPagination__Link({ id: 'LeftArrow', title: 'Arrow Left' });
    const contains = match($.html().trim());
    assert({
      given: 'a left arrow link type',
      should: 'render the left arrow link',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const textToSearch = 'Arrow Right';
    const $ = createPagination__Link({
      id: 'RightArrow',
      title: 'Arrow Right',
    });
    const contains = match($.html().trim());
    assert({
      given: 'a right arrow link type',
      should: 'render the right arrow link',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const textToSearch = '1';
    const $ = createPagination__Link({
      id: '1',
    });
    const contains = match($.html().trim());
    assert({
      given: 'a number link type',
      should: 'render the number link',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
