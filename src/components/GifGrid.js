import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import {getGifs}  from '../helpers/gefGifs'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]); // manejar las imagenes

    useEffect( () => {
        getGifs(category).then( gifs => setImages(gifs) )

    }, [category])

    /* Empieza la peticion */
    // const getGifs = async () => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=U3294zLS1NpErf5sj7QrLnnzW1qRQohn`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json()
        
    //     const gifs = data.map( img => {
    //         return {
    //             id : img.id,
    //             title : img.title,
    //             url : img.images.downsized_medium.url
    //         }
    //     })
        
    //     console.log(gifs);
    //     setImages(gifs);
        
    // }
    /* termina la peticion */

    
  
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <div className='card-grid '>
                
                    {
                        images.map( (img) =>(
                            <GifGridItem 
                                key = {img.id}
                                img = { img }
                            
                            />
                        ))
                    }
            </div>
        </>
  );
};

export default GifGrid;
