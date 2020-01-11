export const user = (state = {}, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_USER":
            return { ...action.user }
        default:
            return state
    }
}