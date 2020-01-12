import React from 'react';
import { shallow } from 'enzyme';
import { UserFavoriteContainer, mapStateToProps } from './UserFavoriteContainer';


describe('UserFavoriteContainer', () => {
    let wrapper;
    
    it('should match the snapshot with all data passed in correctly', () => {
        
    wrapper = shallow(<UserFavoriteContainer
            userFavoriteGames={[]}
        />);
    
        expect(wrapper).toMatchSnapshot();
    });

describe('mapsStateToProps', () => {
    it('should return only movies and loading properties from the store', () => {
        const mockState = {
            games: [],
            displayGames: [],
            favoriteGames: [],
            userFavoriteGames: []
        };
        const expected = {
            games: [],
            displayGames: [],
            favoriteGames: [],
            userFavoriteGames: []
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
        });
    });
})