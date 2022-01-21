import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid';



const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['One Punch']);
    
    // modificar el estado de categories con setCategories
    // const handleAdd = () => {
    //     //setCategories( cats => ['HunterXHunter', ...cats]) //1 forma de mofidicar un array(haciendo una copia)
    //     setCategories(['HunterXhunter', ...categories]) //2° forma 
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return ( 
                            <GifGrid 
                                key={category}
                                category={category }
                            />)
                    })
                }
            </ol>
        </>
  );
};


export default GifExpertApp;
