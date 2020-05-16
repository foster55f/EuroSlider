import * as actions from '../actions';


describe('actions', () => {
    it('should have a type of ADD_GAMES', () => {
        // Setup
        const games = [];
        const expectedAction = {
            type: 'ADD_GAMES',
            games: []
        };

        // Execution
        const result = actions.addGames(games);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it(' should have a type of FILTER_GAMES', () => {
        const displayGames = [];
        const expectedAction = {
            type: 'FILTER_GAMES',
            displayGames:[]
        }

        const result = actions.filterGames(displayGames)

        expect(result).toEqual(expectedAction);
    })

    it('should have a type of FAVORITE_GAMES', () => {
        const favoriteGames = [];
        const expectedAction = {
            type: 'FAVORITE_GAMES',
            favoriteGames:[]
        }

        const result = actions.addFavoriteGames(favoriteGames)

        expect(result).toEqual(expectedAction);
    }),

    it('should have a type of REMOVE_GAMES', () => {
        // Setup
        const favoriteGames = ['barcelona'];
        const expectedAction = {
            type: 'REMOVE_GAMES',
            favoriteGames:['barcelona']
        }

        // Execution
        const result = actions.removeGames(favoriteGames);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_USER', () => {
        // Setup
        const user = {name:'foster'};
        const expectedAction = {
            type: 'ADD_USER',
            user:{name:'foster'}
        }

        // Execution
        const result = actions.addUser(user);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of LOGIN', () => {
        // Setup
        const userLog = true;
        const expectedAction = {
            type: 'LOGIN',
            userLog:true
        }

        // Execution
        const result = actions.userLogIn(userLog);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of LOGOUT', () => {
        // Setup
        const userLog = false;
        const expectedAction = {
            type: 'LOGOUT',
            userLog:false
        }

        // Execution
        const result = actions.userLogOut(userLog);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of USER_FAVORITE_GAMES', () => {
        // Setup
        const userFavoriteGames = ['barcelona'];
        const expectedAction = {
            type: 'USER_FAVORITE_GAMES',
            userFavoriteGames:['barcelona']
        }

        // Execution
        const result = actions.addUserFavoriteGames(userFavoriteGames);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of REMOVE_USER_GAMES', () => {
        // Setup
        const userFavoriteGames = [];
        const expectedAction = {
            type: 'REMOVE_USER_GAMES',
            userFavoriteGames:[]
        }

        // Execution
        const result = actions.removeUserGames(userFavoriteGames);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})