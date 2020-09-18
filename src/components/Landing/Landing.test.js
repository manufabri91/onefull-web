import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

test('renders Landing', () => {
  const { getByText } = render(<Landing />);
  const divElement = getByText(/Landing works!/i);
  expect(divElement).toBeInTheDocument();
});
