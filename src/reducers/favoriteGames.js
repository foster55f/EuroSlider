export const favoriteGames = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_GAMES':
            return [...state, action.favoriteGames]
        case 'REMOVE_GAMES':
            let newState = [...state];
            newState.splice(newState.indexOf(action.favoriteGames), 1 );
            return newState;
        default:
            return state
    }
}