import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteContainer, mapStateToProps } from './FavoriteContainer';

describe('FavoriteContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FavoriteContainer
        favoriteGames={[
          
      ]}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

  describe('mapsStateToProps', () => {
    it('should return only games and favorite games from the store', () => {
        const mockState = {
            games: [],
            displayGames: [],
            favoriteGames: [],
        };
        const expected = {
            games: [],
            displayGames: [],
            favoriteGames: [],
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
        });
    });
 