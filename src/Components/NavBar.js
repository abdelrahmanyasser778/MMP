import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import logo from '../images/logo.png'
import {useDispatch,useSelector} from 'react-redux'
import 'font-awesome/css/font-awesome.min.css';
import {getALLMovies ,getMovieSearch} from '../redux/action/MovieAction'

const NavBar = () => {

    const dispatch=useDispatch();
    
    const searchMovies = async (word) => {
        {
            
            if(word===""){
                dispatch(getALLMovies());
            }else{
        
                dispatch(getMovieSearch(word))
                
            }
            
        }
        }    
        
    
    const onSearch = (word)=>{
        searchMovies(word)
    }

  



  return (
    <div className='nav-style w-100'>

    <Container>
        <Row className='pt-2'>
            <Col xs="2" lg="1">
            <a href='/'>

                <img className='logo' src={logo}/>
            </a>
            </Col>

            <Col xs="10" lg="11" className="d-flex align-items-center">
                    <div className='search w-100'>
                        <i className='fa fa-search'></i>
                        <input onChange={(e)=>onSearch(e.target.value)} type="text" className='form-control' placeholder='Search..'/>
                    </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default NavBar
