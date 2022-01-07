export const getGifs = async ( category ) => {

    try {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=uAWx13KxJSQzCrjZzxwbiKUiVUogTKmV`;
        const response = await fetch(url);
        const { data } = await response.json();
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images.original.url,
        }));

        return gifs;

    } catch (error) {
        console.error(error);
    }

};
