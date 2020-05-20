import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
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

  
export default HighLightContainer

