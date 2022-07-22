import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Pages
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import Home from "./pages/Home";

// Components
import Navbar from './components/Navbar';
function App() {
  return (
      <Router>
       <Navbar/>
        <div className="max-w-screen-md mx-auto pt-20">
          
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/articlelist' element={<ArticleList/>}/>
              {/* URL Parameter >> :name*/}
              <Route path='/article/:name' element={<Article/>}/>
            </Routes>
        </div>
        
      </Router>
      
    
  );
}

export default App;
