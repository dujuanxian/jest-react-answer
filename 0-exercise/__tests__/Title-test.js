import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Title from '../Title';

afterEach(cleanup);

test('Title组件渲染内容为Hello World', () => {
  // TODO 0: 这里只是给学生演示一个最简单的React组件测试

  const { getByTestId } = render(<Title />);
  expect(getByTestId('title')).toHaveTextContent(/^Hello World$/);
});
