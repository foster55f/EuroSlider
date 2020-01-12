import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';


export const FavoriteContainer = ({ favoriteGames }) => {
    return (
        <div className= 'game-container'>
            {favoriteGames.map(game => {
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
    favoriteGames: state.favoriteGames
  })
  
  export default connect(mapStateToProps)(FavoriteContainer)