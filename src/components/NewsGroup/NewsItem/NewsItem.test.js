import React from 'react';
import { render } from '@testing-library/react';

import NewsItem from './NewsItem';

describe("NewsItem", () => {
  test("renders NewsItem component", () => {
    render(<NewsItem />);
  });
});