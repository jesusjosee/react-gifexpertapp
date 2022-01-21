/* 
    FUNCION QUE REZALIZA LA PETICION A LA API

*/

// esta funcion al ser asyn, ahora regresa una promesa que resuelve la coleccion de las imagenes,
// directamente no regresa los gifs, se tiene que llamar mediante una promesa donde se vaya a utilizar

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=U3294zLS1NpErf5sj7QrLnnzW1qRQohn`
    const resp = await fetch(url);
    const {data} = await resp.json()
    
    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    })
    
    return gifs
    
}