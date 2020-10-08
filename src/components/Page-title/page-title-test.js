import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import PageTitle from './page-title';

describe('page-title', async (assert) => {
  const createPageTitle = ({ content = '' } = {}) =>
    render(<PageTitle content={content} />);

  {
    const $ = createPageTitle();

    assert({
      given: 'no argument',
      should: 'render the page-title',
      expected: 1,
      actual: $('.page-title').length,
    });
  }
  {
    const textToSearch = 'Some Text';
    const $ = createPageTitle({ content: textToSearch });
    const contains = match($.html().trim());
    assert({
      given: 'no arguments',
      should: 'render the footer component',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
