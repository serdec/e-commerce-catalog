import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import Container from './container';

describe('container', async (assert) => {
  const createContainer = ({ children } = {}) =>
    render(<Container>{children}</Container>);
  {
    const $ = createContainer();
    assert({
      given: 'no arguments',
      should: 'render the container component',
      expected: 1,
      actual: $('.container').length,
    });
  }
  {
    const children = <h1>Some text</h1>;
    const $ = createContainer({ children });
    const contains = match($.html().trim());
    const textToSearch = 'Some text';
    assert({
      given: 'some children',
      should: 'render the container children',
      expected: textToSearch,
      actual: contains(textToSearch),
    });
  }
});
