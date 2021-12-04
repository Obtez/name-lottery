import React from 'react';
import { screen, render } from '@testing-library/react';
import NameLottery from './NameLottery';

test('should render page', () => {
  render(<NameLottery />);
  expect(screen.getByText('Random Name')).toBeInTheDocument();
});
