import React from 'react';
import { addFavoriteGames} from '../../actions';
import { removeGames } from '../../actions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './HighlightCard.css';
import ReactStars from 'react-rating-stars-component'




const HighlightCard = ({title, embed, path, isFavorited}) => {
    const games = useSelector(state => state.games);
    const dispatch = useDispatch();

    const ratingChanged = () => {
        if (!isFavorited) {
            const favorite = games.find(game => {
                return game.title === title
            })
            dispatch(addFavoriteGames(favorite))
        }
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
                {!isFavorited && (
                    <ReactStars
                    count={1}
                    half={false}
                    onChange={ratingChanged}
                    size={30}
                    color2={'#ffd700'} />
                )}
                {isFavorited && (
                    <button className='share-button' id={title} onClick={event => removeFavoriteVideos(event.target.id)}>Remove from Favorites</button>
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
