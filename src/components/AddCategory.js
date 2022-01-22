import React, { Fragment, useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputState, setInputState] = useState('')

    const handleInputChange = (e) => {
        setInputState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( inputState.trim().length > 2 ) {
            setCategories( cats => [ inputState, ...cats ] );
            setInputState( '' )
        }
    }

    return (
        <Fragment>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputState }
                    onChange={ handleInputChange }/>
            </form>
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
