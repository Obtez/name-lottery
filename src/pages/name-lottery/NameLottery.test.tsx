import React from 'react';
import { screen, render } from '@testing-library/react';
import { getRandomName } from './nameLotteryHelper';
import NameLottery from './NameLottery';

test('should render page', () => {
  render(<NameLottery />);
  expect(screen.getByText('Name Lottery')).toBeInTheDocument();
});
