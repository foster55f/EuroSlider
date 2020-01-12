import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { retrieveGames } from '../../fetchcalls';
import { addGames } from '../../actions';

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

  describe('mapsStateToProps', () => {
    it('should return only movies and loading properties from the store', () => {
        const mockState = {
            games: [],
            displayGames: [],
        };
        const expected = {
            games: [],
            displayGames: []
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
    });
});

describe('mapDispatchToProps', () => {
    it('calls dispatch with an addMovies action when addMovies is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addGames([{ sample: 'game' }]);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.addGames([{ sample: 'game' }]);

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });  
})
