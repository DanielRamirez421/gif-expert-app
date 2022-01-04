import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeInUp">
            <div className='card--image'>
                <img src={ url } alt={ title } />
            </div>
            <p><i>{ title }</i></p>
        </div>
    )
}
