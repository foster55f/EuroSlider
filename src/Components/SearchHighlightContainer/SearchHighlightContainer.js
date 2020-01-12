import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';
import { games } from '../../reducers/games';


const SearchHighlightContainer = ({ games, displayGames }) => {
    return (
        <div className= 'game-container'>
            {displayGames.map(game => {
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
  
  export default connect(mapStateToProps)(SearchHighlightContainer)