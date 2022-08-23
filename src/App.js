import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter } from "react-router-dom";
//import { useState} from 'react';
//import {fetchArticles} from './api'


function App() {


  return (
    <BrowserRouter>
    <div>
    <Header />
    <Nav />
    <Articles />
    </div>
    </BrowserRouter>
  )
}

export default App;
