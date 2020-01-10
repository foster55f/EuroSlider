export const displayGames = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_GAMES':
            console.log(action)
            return [...action.displayGames] 
        default:
            return state
     }
}