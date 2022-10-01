import React , {useState,useEffect}from 'react'
import {Pagination} from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {getPage} from '../redux/action/MovieAction'

const Paginate = () => {

  const[pageCount,setPageCount]=useState(0)

 
 
  const dispatch=useDispatch();
  const pages = useSelector((state)=>state.pageCount)

  useEffect(()=>{
    setPageCount(pages)
  },[])

 

  const getPageMovie = async (page) => {
    {
    
         
       
          
          dispatch(getPage(page)); 
      }
      }







  const handlePageClick = (data) => {
    
    getPageMovie(data.selected + 1)
}
 
  return (
      <ReactPaginate
        breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}



      />

  )
}

export default Paginate
