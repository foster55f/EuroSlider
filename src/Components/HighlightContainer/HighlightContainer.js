import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';



export const HighLightContainer = () => {
    const { games, favoriteGames } = useSelector(state => state);
    return (
        <div className= 'game-container'>
            {games.map((game, i) => {
            return (
                <HighlightCard
                key={i}
                id={game.competition.id} 
                title={game.title}
                image={game.thumbnail}
                url={game.url}
                embed={game.videos[0].embed}  
                isFavorited = {favoriteGames.includes(game)}    
            />
            )
        })}
        </div>
    )
}
export const mapStateToProps = state => ({
    games: state.games,
    displayGames: state.displayGames
  })
  
export default HighLightContainer

HighLightContainer.propTypes = {
    games: PropTypes.array.isRequired,
    displayGames: PropTypes.array.isRequired,
}