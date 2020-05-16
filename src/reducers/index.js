import { combineReducers } from 'redux';
import { games } from './games';
import { displayGames } from './displayGames';
import { favoriteGames } from './favoriteGames';
import { user } from './user';
import { userLog } from './loggedIn';



const rootReducer = combineReducers({
    games, displayGames, favoriteGames, user, userLog
})

export default rootReducer