import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginate from './Paginate'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import {getALLMovies} from '../redux/action/MovieAction'

const MoviesList = ({DataPage ,pageCount}) => {
  const[movies,setMovies]=useState([])
 
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getALLMovies()); 
  },[])

  const dataOfMovies = useSelector((state)=>state.movies);


    useEffect(()=>{
      setMovies(dataOfMovies)
    },[dataOfMovies])


  return (
    <Row className='mt-3' >

        {movies.length >=1 ? (movies.map((movie)=>{
            return (<CardMovie key={movie.id} movie={movie}/>)
        })) : <h2 className='text-center p-5'>لايوجد بيانات</h2>}


        {movies.length >= 1 ? (<Paginate DataPage={DataPage} pageCount={pageCount}/>):  null}
          
    </Row>
  )
}

export default MoviesList
