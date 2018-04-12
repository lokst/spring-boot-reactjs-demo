import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('text is hidden when button is not clicked', () => {
  const wrapper = mount(<App/>);
  expect(wrapper.find('.secret').length).toBe(0);
});

it('displays text when button is clicked', () => {
  const wrapper = mount(<App/>);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('.secret').length).toBe(1);
});
