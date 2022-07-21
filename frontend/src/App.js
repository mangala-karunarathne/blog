import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
// import { Link } from "react-router-dom";

//Pages
import Home from "./pages/Home";

function App() {
  return (
      <Router>
       <Navbar/>
        <div className="max-w-screen-md mx-auto pt-20">
          
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/article' element={<Article/>}/>
              <Route path='/articlelist' element={<ArticleList/>}/>
            </Routes>
        </div>
        
      </Router>
      
    
  );
}

export default App;
