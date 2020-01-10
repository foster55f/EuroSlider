import { combineReducers } from 'redux';
import { games } from './games';
import { displayGames } from './displayGames';


const rootReducer = combineReducers({
    games, displayGames
})

export default rootReducer