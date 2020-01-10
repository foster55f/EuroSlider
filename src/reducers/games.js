export const games = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GAMES':
            return [...state, ...action.games]
        // case 'FILTER_GAMES':
        //     console.log(action)
        //     return [...action.displayGames]   
        default:
            return state
    }
}


