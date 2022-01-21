import React, { useState } from 'react';
import PropTypes from 'prop-types';
;


export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState(''); // ''

    //Capturamos el valor del input y lo modificamos
    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevenir que el navegador se recarge

        // validacion para que solo se agregen valores mayores a 2 caracteres,y evitar valores vacios
        if (inputValue.trim().length > 2 ){
            setCategories(cats => [ inputValue, ...cats ])  // añadir los valores del input al listado
            setinputValue('')                               // volver al vacio el input
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
        </form>
  );
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

