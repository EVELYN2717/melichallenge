import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBoxPage from './pages/searchboxpage';
import { useNavigate } from 'react-router-dom';
import ResultSearchComponent from './pages/resultsearch';
import ProductDetailComponent from './pages/productdetail';

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
        <Route path='/itemssearch' element = { <ResultSearchComponent/> }></Route>
        <Route path='/itemsid' element = { <ProductDetailComponent/> }></Route>
      </Routes>
    </div>
  );
}



export default App;
