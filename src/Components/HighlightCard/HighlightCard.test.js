import React from 'react';
import { shallow } from 'enzyme';
import { HighlightCard, mapStateToProps, mapDispatchToProps } from './HighlightCard';
import { addFavoriteGames, addUserFavoriteGames, removeGames, removeUserGames } from '../../actions';


describe('HighlightCard', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    wrapper = shallow(<HighlightCard />);
    expect(wrapper).toMatchSnapshot();
  })


  describe('mapsStateToProps', () => {
    it('should return user info and games from the store', () => {
        const mockState = {
            user: {},
            games: [],
            favoriteGames: [],
            userLog: false,
        };
        const expected = {
            user: {},
            games: [],
            favoriteGames: [],
            userLog: false,
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
    });
});

describe('mapDispatchToProps', () => {
    it('calls dispatch with an addFavoriteGames action when addFavoriteGames is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addFavoriteGames(['barcelona']);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.addFavoriteGames(['barcelona']);

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
  
    it('calls dispatch with an addFavoriteGames action when addFavoriteGames is called',
      () => {
          const mockDispatch = jest.fn();
          const actionToDispatch = addUserFavoriteGames(['barcelona']);
          const mappedProps = mapDispatchToProps(mockDispatch);

          mappedProps.addUserFavoriteGames(['barcelona']);

          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
          });
    
    it('calls dispatch with an removeGames action when removeGames is called',
          () => {
              const mockDispatch = jest.fn();
              const actionToDispatch = removeGames(['barcelona']);
              const mappedProps = mapDispatchToProps(mockDispatch);
    
              mappedProps.removeGames(['barcelona']);
    
              expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        });
    it('calls dispatch with an removeUserGames action when removeUserGames is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = removeUserGames(['barcelona']);
            const mappedProps = mapDispatchToProps(mockDispatch);
  
            mappedProps.removeUserGames(['barcelona']);
  
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
 
  });  
})