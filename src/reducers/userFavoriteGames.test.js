import { userFavoriteGames } from '../reducers/userFavoriteGames';

describe('userFavoriteGames', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = userFavoriteGames(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with a favorite games', () => {
    // Setup
    const mockGames = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'USER_FAVORITE_GAMES',
      games: mockGames,
    };

    const newState = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}, undefined
  
  ];

    const result = userFavoriteGames(initialState, action);

    expect(result).toEqual(newState);
  });

  it('should return state with removed games', () => {
    const mockGames = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'REMOVE_USER_GAMES',
      games: mockGames,
    };

    const newState = [
      {
        team:'barcelona vs ajax'
      },
    ];

    const result = userFavoriteGames(initialState, action);

    expect(result).toEqual(newState);
  });
});