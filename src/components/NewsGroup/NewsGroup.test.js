import React from 'react';
import { render } from '@testing-library/react';

import NewsGroup from './NewsGroup';

describe("NewsGroup", () => {
  test("renders NewsGroup component", () => {
    render(<NewsGroup />);
  });
});