import React from 'react';

const HighlightCard = ({ title, image }) => {
    console.log(image)
    return (
        <article className='game-card'>
            <h2>{title.toUpperCase()}</h2>
            <div className='game-img' style={{backgroundImage: `url(${image})`}} />
            {/* <img src= 'https://img.youtube.com/vi/g_jvl9jIaAo/maxresdefault.jpg'/> */}

      </article>
    )
}

export default HighlightCard