import { useState } from "react"
import { useEffect } from "react/cjs/react.development";

import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [gifs, setGifs] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category ).then( imgs => 
            setGifs({
                data: imgs,
                loading: false
            })
        )
    }, [ category ])

    return gifs;

}
