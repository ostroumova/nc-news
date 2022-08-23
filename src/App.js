import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState} from 'react';



function App() {
  const [topics, setTopics] = useState([])
  
  return (
    <BrowserRouter>
    <div>
    <Header />
    <Nav topics={topics} setTopics={setTopics}/>
    <Routes>
      <Route path="/" element={<Articles />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/articles/:topic" element={<Articles />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
