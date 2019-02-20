import React from 'react';
import HomePage from './home/HomePage';
import {shallow} from 'enzyme';

// sample test
describe('Test HomePage', () => {
  it('should render header', () => {
    const component = shallow(<HomePage/>);
    expect(component.find("h1").text()).toEqual("Home Page");
  });
});
