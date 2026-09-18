import { render, screen } from '@testing-library/react';
import React from 'react';
import { Editor } from '../src';

test('Editor renders', () => {
  render(<Editor />);
  expect(screen.getByText('低代码编辑器')).toBeTruthy();
});
