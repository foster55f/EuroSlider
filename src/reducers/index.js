import { combineReducers } from 'redux';
import { games } from './games';
import { displayGames } from './displayGames';
import { favoriteGames } from './favoriteGames';
import { userFavoriteGames } from './userFavoriteGames';
import { user } from './user';
import { userLog } from './loggedIn';



const rootReducer = combineReducers({
    games, displayGames, favoriteGames, user, userLog, userFavoriteGames
})

export default rootReducer