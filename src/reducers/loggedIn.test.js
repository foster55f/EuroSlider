import { userLog } from '../reducers/loggedIn';

describe('loggedIn', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = false;

    // Execution
    const result = userLog(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with loggedIn', () => {
    // Setup
    const mockLogin = false

    const initialState = mockLogin;
    const action = {
      type: 'LOGIN',
      userLog: mockLogin,
    };

    const newState = true;

    const result = userLog(initialState, action);

    expect(result).toEqual(newState);
  });
});