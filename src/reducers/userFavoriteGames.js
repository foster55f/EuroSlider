export const userFavoriteGames = (state = [], action) => {
    switch (action.type) {
        case 'USER_FAVORITE_GAMES':
            return [...state, action.userFavoriteGames]
        default:
            return state
    }
}