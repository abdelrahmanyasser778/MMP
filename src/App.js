import { Container } from "react-bootstrap";
import MoviesList from "./Components/MoviesList";
import NavBar from "./Components/NavBar";
import axios from "axios";
import MovieDetails from "./Components/MovieDetails";
import { useEffect, useState } from "react";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {getALLMovies} from './redux/action/MovieAction'
import Footer from "./Components/Footer";

function App() {


 
  







  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList  />}/> 
          <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
        </BrowserRouter>
       
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
