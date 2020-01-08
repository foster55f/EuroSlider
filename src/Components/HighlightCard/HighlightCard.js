import React from 'react';

const HighlightCard = ({title}) => {
    return (
        <article className='game-card'>
            <h2>{title.toUpperCase()}</h2>
            {/* <div className='game-img' style={{ backgroundImage: `url(${poster})` }} /> */}
      </article>
    )
}

export default HighlightCard