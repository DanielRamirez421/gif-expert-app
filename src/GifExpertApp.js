import React, { useState } from 'react';

export default function GifExpertApp() {
    
    // const categories = ['OnePunch', 'SamuariX', 'DragonBall']
    const [categories, setCategories] = useState(['OnePunch', 'SamuariX', 'DragonBall'])
    const handleAdd = () => {

        // setCategories( [ ...categories, 'new Element' ] )
        setCategories( cats => [ ...cats, 'new Element' ] )
        
    }
    
    return (
      <div>
        <h2> GifExpertApp </h2>
        <hr />

        <button onClick={ handleAdd } >AddElement</button>

        <ol>
            { 
                categories.map( 
                    ( category ) => <li key={ category }>{ category }</li>
                ) 
            }
        </ol>

      </div>
    )
  }
  