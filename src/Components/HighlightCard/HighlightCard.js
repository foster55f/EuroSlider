import React from 'react';
import { addFavoriteGames} from '../../actions';
import { removeGames } from '../../actions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';


const HighlightCard = ({title, embed, path}) => {
    const games = useSelector(state => state.games);
    const dispatch = useDispatch();

    const pickFavoriteVideos = (id) => {
        const favorite = games.find(game => {
            return game.title === id
        })
        dispatch(addFavoriteGames(favorite))
    }

    const removeFavoriteVideos = (id) => {
        const videoToRemove = games.find(game => {
            return game.title === id
        })
        dispatch(removeGames(videoToRemove))
    }
        return (
            <article className='game-card'>
                <h1 className='title-font'>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: `${embed}` }} /> 
                {path !== '/yourfavorites' && (
                    <button className='share-button' id={title} onClick={event => pickFavoriteVideos(event.target.id)}>Add Favorite</button>
                )}
                {path === '/yourfavorites' && (
                    <button className='share-button' id={title} onClick={event => removeFavoriteVideos(event.target.id)}>Remove Favorite</button>
                )}
            </article>
        )
    }


export default HighlightCard

HighlightCard.propTypes = {
    user: PropTypes.object.isRequired,
    addFavoriteGames: PropTypes.func,
    addUserFavoriteGames: PropTypes.func,
    removeGames: PropTypes.func,
    removeUserGames: PropTypes.func
}
