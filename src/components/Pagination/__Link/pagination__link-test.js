import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Pagination__Link from './pagination__link';

describe('pagination__link', async (assert) => {
  const createPagination__Link = ({
    label = '',
    link = '',
    current = false,
  } = {}) =>
    render(<Pagination__Link label={label} link={link} current={current} />);
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
    const textToSearch = '1';
    const label = '1';
    const $ = createPagination__Link({
      label,
      link: `/page/${label}`,
    });
    const contains = match($.html().trim());
    assert({
      given: 'a number link type',
      should: 'render the number link',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
  {
    const textToSearch = 'pagination__link--current';
    const label = '1';
    const $ = createPagination__Link({
      label,
      link: `/page/${label}`,
      current: true,
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
