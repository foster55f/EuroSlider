import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';


const FavoriteContainer = ({ path }) => {
    const favoriteGames = useSelector(state => state.favoriteGames);
    return (
        <div className= 'game-container'>
            {favoriteGames.map((game, i) => {
            return (
                <HighlightCard
                key={i}
                id={game.competition.id} 
                title={game.title}
                image={game.thumbnail}
                url={game.url}
                embed={game.videos[0].embed} 
                path={path}    
            />
            )
        })}
        </div>
    )
}

export default FavoriteContainer

FavoriteContainer.propTypes = {
    favoriteGames: PropTypes.array.isRequired,
}