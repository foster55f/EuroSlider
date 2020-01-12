import { user } from '../reducers/user';

describe('user', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {};

    // Execution
    const result = user(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with user info', () => {
    // Setup
    const mockUser = {name:'foster'}

    const initialState = mockUser;
    const action = {
      type: 'ADD_USER',
      user: mockUser,
    };

    const newState = mockUser;

    const result = user(initialState, action);

    expect(result).toEqual(newState);
  });
});