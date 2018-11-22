import React from 'react';
import { shallow } from 'enzyme';
import Action from './Action';

it('matches snapshot, positive score', () => {  
  const wrapper = shallow(<Action name="Do dishes" score={10} />);
  expect(wrapper).toMatchSnapshot();
})

it('matches snapshot, negative score', () => {  
  const wrapper = shallow(<Action name="Amusement park" score={-200} />);
  expect(wrapper).toMatchSnapshot();
})

it('triggers callback', () => {
  const score = 1;
  const name = "test";
  const callback = jest.fn();
  const wrapper = shallow(<Action onAddScore={callback} score={score} name={name} />);

  expect(callback.mock.calls.length).toBe(0);

  const button = wrapper.find("button");
  button.simulate("click");

  expect(callback.mock.calls.length).toBe(1);
  expect(callback.mock.calls[0]).toEqual([score, name]);
})