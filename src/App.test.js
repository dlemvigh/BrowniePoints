import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('matches snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
})

it('handle select', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state("selected")).toEqual({});

  wrapper.instance().handleSelect("someName");
  expect(wrapper.state("selected")).toEqual({ someName: true});
})

it('add score', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state("users").Daniel.score).toBe(0);

  const instance = wrapper.instance();
  instance.handleAddScore(10);
  expect(wrapper.state("users").Daniel.score).toBe(0);

  instance.handleSelect("Daniel");
  instance.handleAddScore(20);
  expect(wrapper.state("users").Daniel.score).toBe(20);
})