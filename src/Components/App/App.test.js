import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { retrieveGames } from '../../fetchcalls';


jest.mock('../../fetchcalls.js')


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    retrieveGames.mockImplementation(() => {
        return Promise.resolve([{
          title: "Smouha - Wadi Degla",
          embed: "url"
      },
      {
          title: "foster - barcelona",
          embed: "url"
      },
      ]);
    });
});
  it('should match the App snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke retrieveGames after componentDidMount triggers', () => {
    wrapper = shallow(<App />);
    expect(retrieveGames).toHaveBeenCalled();
  });
})
