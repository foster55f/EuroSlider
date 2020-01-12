export const favoriteGames = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_GAMES':
            return [...state, action.favoriteGames]
        case 'REMOVE_GAMES':
                state.splice(state.indexOf(action.favoriteGames), 1 );
            return [...state]
        default:
            return state
    }
}