import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const HighLightContainer = ({ games }) => {
    return (
        <div className= 'game-container'>
            {games.map(game => {
            return (
                <HighlightCard
                key={game.competition.id}
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
export const mapStateToProps = state => ({
    games: state.games,
    displayGames: state.displayGames
  })
  
export default connect(mapStateToProps)(HighLightContainer)

HighLightContainer.propTypes = {
    games: PropTypes.array.isRequired,
    displayGames: PropTypes.array.isRequired,
}