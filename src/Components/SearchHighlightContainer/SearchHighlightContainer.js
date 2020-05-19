import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard';
import { useSelector} from 'react-redux';


export const SearchHighlightContainer = () => {
    const { displayGames, favoriteGames } = useSelector(state => state);
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
                embed={game.videos[0].embed} 
                isFavorited = {favoriteGames.includes(game)}      
            />
            )
        })}
        </div>
    )
}

export default SearchHighlightContainer