import { games } from '../reducers/games';

describe('games', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = games(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with a favorite games', () => {
    // Setup
    const mockGames = [{team:'barcelona vs ajax'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'ADD_GAMES',
      games: mockGames,
    };

    const newState = [{team:'barcelona vs ajax'}, {team:'barcelona vs ajax'}
  
  ];

    const result = games(initialState, action);

    expect(result).toEqual(newState);
  });
});