import React from 'react';
import { render } from '@testing-library/react';
import Planes from './Planes';

test('renders Planes', () => {
  const { getByText } = render(<Planes />);
  const divElement = getByText(/Planes works!/i);
  expect(divElement).toBeInTheDocument();
});
