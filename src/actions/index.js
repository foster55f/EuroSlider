export const addGames = games => ({
    type: 'ADD_GAMES',
    games
})

export const filterGames = displayGames => ({
    type: 'FILTER_GAMES',
    displayGames
})

export const addFavoriteGames = favoriteGames => ({
    type: 'FAVORITE_GAMES',
    favoriteGames
})

