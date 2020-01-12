import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';


const UserFavoriteContainer = ({ games, displayGames, favoriteGames, userFavoriteGames }) => {
    return (
        <div className= 'game-container'>
            {userFavoriteGames.map(game => {
            return (
                
                <HighlightCard
                key={game.competition.id}
                id={game.competition.id} 
                title={game.title}
                image={game.thumbnail}
                url={game.url}
                embed={game.videos[0].embed}
                />
            )
        })}
        </div>
    )
}
export const mapStateToProps = state => ({
    games: state.games,
    displayGames: state.displayGames,
    favoriteGames: state.favoriteGames,
    userFavoriteGames: state.userFavoriteGames
  })
  
  export default connect(mapStateToProps)(UserFavoriteContainer)