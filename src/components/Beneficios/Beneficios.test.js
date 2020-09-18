import React from 'react';
import { render } from '@testing-library/react';
import Beneficios from './Beneficios';

test('renders Beneficios', () => {
  const { getByText } = render(<Beneficios />);
  const divElement = getByText(/Beneficios works!/i);
  expect(divElement).toBeInTheDocument();
});
