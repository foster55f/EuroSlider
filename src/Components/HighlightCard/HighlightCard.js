import React from 'react';


const HighlightCard = ({ title, embed, id }) => {
    return (
        <article className='game-card'>
            <h1>{title.toUpperCase()}</h1>
            <h1>{id}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: `${embed}` }} />   */}
            <button className='share-button' id={title} onClick={(event) => { console.log(event.target.id); }}>Share With Friends</button>
        </article>
    )
}

export default HighlightCard