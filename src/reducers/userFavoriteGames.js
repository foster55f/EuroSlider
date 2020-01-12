export const userFavoriteGames = (state = [], action) => {
    switch (action.type) {
        case 'USER_FAVORITE_GAMES':
            return [...state, action.userFavoriteGames]
        case  'REMOVE_USER_GAMES':
            state.splice(state.indexOf(action.favoriteGames), 1 );
            return [...state] 
        default:
            return state
    }
}