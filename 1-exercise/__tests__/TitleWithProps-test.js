import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import TitleWithProps from '../TitleWithProps';

afterEach(cleanup);

test('TitleWithProps组件渲染内容', () => {
  // TODO 1: 给出正确的assertion，测试Title组件渲染内容

  const { getByTestId } = render(<TitleWithProps name="New World" />);
  expect(getByTestId('title')).toHaveTextContent('Hello New World');
});
