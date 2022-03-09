

import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';





export const useFecthGifs = (category) => {


    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(img => 
            setTimeout(() => {
                console.log(img);
                setstate({
                    data: img,
                    loading: false
                });
            }, 3000)
            

        )
      
    
    }, [category])

    


    return state;
  





}
