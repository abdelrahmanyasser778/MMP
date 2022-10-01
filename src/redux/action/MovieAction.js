import { ALLMOVIES ,MovieApi} from '../types/MoviesTypes';
import axios from "axios";



export const getALLMovies =  () =>{

    return async(dispatch)=>{

        const res = await  axios.get(MovieApi)
        
        dispatch({type:ALLMOVIES,data:res.data.results, pages:res.data.total_pages})
    }

    
}


export const getMovieSearch =  (word) =>{

    return async(dispatch)=>{

        const res = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e50d7922938b907ad4782520e91cb399&query=${word}&language=en`)
        
        dispatch({type:ALLMOVIES,data:res.data.results, pages:res.data.total_pages})
    }

    
}


export const getPage =  (page) =>{

    return async(dispatch)=>{

        const res = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e50d7922938b907ad4782520e91cb399&language=en&page=${page}`)
        
        dispatch({type:ALLMOVIES,data:res.data.results, pages:res.data.total_pages})
    }

    
}