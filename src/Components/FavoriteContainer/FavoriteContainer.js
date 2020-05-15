import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';


const FavoriteContainer = () => {
    const favoriteGames = useSelector(state => state.favoriteGames);
    console.log(favoriteGames)
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
                embed ={game.videos[0].embed}     
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