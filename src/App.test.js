import React from 'react';
import { shallow } from 'enzyme';
import { App, AppContainer, defaultUsers } from './App';

it('matches snapshot', () => {
  const wrapper = shallow(<App users={defaultUsers} selected={{}} />);
  expect(wrapper).toMatchSnapshot();
})

it('handle select', () => {
  const wrapper = shallow(<AppContainer />);
  expect(wrapper.state("selected")).toEqual({});

  wrapper.instance().handleSelect("someName");
  expect(wrapper.state("selected")).toEqual({ someName: true});
})

it('add score', () => {
  const wrapper = shallow(<AppContainer />);
  expect(wrapper.state("users").Daniel.score).toBe(0);

  const instance = wrapper.instance();
  instance.handleAddScore(10);
  expect(wrapper.state("users").Daniel.score).toBe(0);

  instance.handleSelect("Daniel");
  instance.handleAddScore(20);
  expect(wrapper.state("users").Daniel.score).toBe(20);

  const log = JSON.parse(localStorage.log);
  expect(log["Daniel"]).toHaveLength(1);
})