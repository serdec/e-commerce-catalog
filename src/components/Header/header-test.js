import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Header from './header';

describe('header', async (assert) => {
  const createHeader = ({ children } = {}) =>
    render(<Header>{children}</Header>);
  {
    const $ = createHeader();
    {
      assert({
        given: 'no argument',
        should: 'render the header',
        expected: 1,
        actual: $('.header').length,
      });
    }
  }
  {
    const children = <h1>Some Text</h1>;
    const $ = createHeader({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some Text';
    assert({
      given: 'some children',
      should: 'render the header s children',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
