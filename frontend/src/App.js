import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
//Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/articlelist' element={<ArticleList/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
