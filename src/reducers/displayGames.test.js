import { displayGames } from '../reducers/displayGames';

describe('displayGames', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = displayGames(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with games', () => {
    // Setup
    const mockGames = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'FILTER_GAMES',
      displayGames: mockGames,
    };

    const newState = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
  ];

    const result = displayGames(initialState, action);

    expect(result).toEqual(newState);
  });
});