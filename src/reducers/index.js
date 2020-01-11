import { combineReducers } from 'redux';
import { games } from './games';
import { displayGames } from './displayGames';
import { favoriteGames } from './favoriteGames';
import { user } from './user';


const rootReducer = combineReducers({
    games, displayGames, favoriteGames, user
})

export default rootReducer