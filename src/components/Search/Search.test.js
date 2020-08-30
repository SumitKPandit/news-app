import React from 'react';
import { render } from '@testing-library/react';

import Search from './Search';

describe("Search", () => {
  test("renders Search component", () => {
    render(<Search />);
  });
});