export const favoriteGames = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_GAMES':
            return [...state, action.favoriteGames]
        default:
            return state
    }
}