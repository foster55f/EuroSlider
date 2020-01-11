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

export const addUser = user => ({
    type: 'ADD_USER',
    user
})

export const userLogIn = userLog => ({
    type: 'LOGIN',
    userLog
})

export const userLogOut = userLog => ({
    type: 'LOGOUT',
    userLog
})

export const addUserFavoriteGames = userFavoriteGames => ({
    type: 'USER_FAVORITE_GAMES',
    userFavoriteGames
})


