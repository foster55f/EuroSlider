import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';


const HighLightContainer = ({ games }) => {
    console.log(games)
    return (
        <div className= 'game-container'>
        {games.map(game => {
            return (
            <HighlightCard
                key={game.id}
                title={game.title}
            />
            )
        })}
        </div>
    )
}
export const mapStateToProps = state => ({
    games: state.games
  })
  
  export default connect(mapStateToProps)(HighLightContainer)