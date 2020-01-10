import { combineReducers } from 'redux';
import { games } from './games';
import { displayGames } from './displayGames';
import { favoriteGames } from './favoriteGames';

const rootReducer = combineReducers({
    games, displayGames, favoriteGames
})

export default rootReducer