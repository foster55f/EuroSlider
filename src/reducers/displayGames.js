export const displayGames = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_GAMES':
            return [...action.displayGames] 
        case 'FILTER_GAMES':
            return [...action.displayGames, ] 
        default:
            return state
     }
}