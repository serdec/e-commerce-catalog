import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Footer__Sidenote from './footer__sidenote';

describe('footer__sidenote', async (assert) => {
  const createFooter__Sidenote = ({ content = '' } = {}) =>
    render(<Footer__Sidenote content={content} />);
  {
    const $ = createFooter__Sidenote();
    assert({
      given: 'no arguments',
      should: 'render the footer sidenote component',
      expected: 1,
      actual: $('.footer__sidenote').length,
    });
  }
  {
    const textToSearch = 'Some content';
    const $ = createFooter__Sidenote({ content: textToSearch });
    const contains = match($.html().trim());
    assert({
      given: 'no arguments',
      should: 'render the footer sidenote component',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
