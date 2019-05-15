import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import TitleWithState from '../TitleWithState';

afterEach(cleanup);

test('TitleWithState组件渲染内容', () => {
  // TODO 2: 给出正确的assertion，测试Title组件渲染内容

  const { getByTestId } = render(<TitleWithState />);
  expect(getByTestId('title')).toHaveTextContent('Hello Silent World');
});
