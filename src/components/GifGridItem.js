import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className='card'>
            <div className='card--image'>
                <img src={ url } alt={ title } />
            </div>
            <p><i>{ title }</i></p>
        </div>
    )
}
