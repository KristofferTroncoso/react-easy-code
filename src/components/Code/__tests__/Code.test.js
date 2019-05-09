import React from 'react';
import {Code} from '../Code';
import Renderer from 'react-test-renderer';

test('normal render', () => {
  const wrapper = Renderer.create(<Code render={`let i = 3`} />);
  expect(wrapper).toMatchSnapshot();
});

test('inline render', () => {
  const wrapper = Renderer.create(<Code inline render={`let i = 3`} />);
  expect(wrapper).toMatchSnapshot();
});

test('dark theme', () => {
  const wrapper = Renderer.create(<Code theme="dark" render={`let i = 3`} />);
  expect(wrapper).toMatchSnapshot();
});