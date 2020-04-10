export const games = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_GAMES':
            return [...state, ...action.games]
        default:
            return state
    }
}


