import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import Nav from './components/Nav';
import SingleArticle from './components/SingleArticle';
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
      <Route path="/articles/topics/:topic" element={<Articles />} />
      <Route path="/articles/:article_id" element={<SingleArticle />}/>
    </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App;
