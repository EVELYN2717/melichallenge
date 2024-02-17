import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBoxPage from './pages/searchboxpage';
import ResultSearchPage from './pages/resultsearch/resultsearch';
import ProductDetailPage from './pages/productdetail/productdetail';

const App = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/');
  // }

  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path='/' element = { <SearchBoxPage/> }></Route>
        <Route path='/itemssearch' element = { <ResultSearchPage/> }></Route>
        <Route path='/itemsid' element = { <ProductDetailPage/> }></Route>
      </Routes>
    </div>
  );
}



export default App;
