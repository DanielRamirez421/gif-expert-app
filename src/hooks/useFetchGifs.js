import { useState, useEffect } from "react"

import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [ gifs, setGifs ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category ).then( imgs => {
            setTimeout(() => {
                
                setGifs({
                    data: imgs,
                    loading: false
                })
            }, 50);

        })
    }, [ category ])

    return gifs;

}
