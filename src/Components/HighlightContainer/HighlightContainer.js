import React from 'react'
import HighlightCard from '../HighlightCard/HighlightCard'

const HighLightContainer = ({ games }) => {
    return (
        <div className= 'game-container'>
        {games.map(game => {
            return (
            <HighlightCard
                key={game.id}
                id={game.id}
            />
            )
        })}
        </div>
    )
}

export default HighLightContainer