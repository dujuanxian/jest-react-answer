import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Title from '../Title';

afterEach(cleanup);

it('Title组件渲染内容为Hello World', () => {
  const { getByTestId } = render(<Title />);

  expect(getByTestId('title')).toHaveTextContent(/^Hello World$/);
});
