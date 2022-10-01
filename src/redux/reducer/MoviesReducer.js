import { ALLMOVIES } from '../types/MoviesTypes';

const initialValue={movies:[],pageCount:0}
export const MoviesReducer=(state =initialValue,action)=>{
        switch (action.type) {
            case ALLMOVIES:
                return {
                  movies : action.data ,  pageCount :action.pages
                }
            default:
                return state;
        }
}