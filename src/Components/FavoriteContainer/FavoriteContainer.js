import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { connect } from 'react-redux';
import { favoriteGames } from '../../reducers/favoriteGames';


export const FavoriteContainer = ({ games, displayGames, favoriteGames }) => {
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
    games: state.games,
    displayGames: state.displayGames,
    favoriteGames: state.favoriteGames
  })
  
  export default connect(mapStateToProps)(FavoriteContainer)