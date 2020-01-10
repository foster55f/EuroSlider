import React from 'react';


const HighlightCard = ({ title, embed, id }) => {
    return (
        <article className='game-card'>
            <h1>{title.toUpperCase()}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: `${embed}` }} />   */}
            <button>Favorite</button>
            {/* <div className='game-img' style={{ backgroundImage: `url(${image})` }} /> */}
      </article>
    )
}

export default HighlightCard