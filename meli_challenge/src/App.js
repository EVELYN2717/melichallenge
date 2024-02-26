import './App.css';
import { Route, Routes } from 'react-router-dom';
import SearchBoxPage from './pages/searchboxpage';
import ResultSearchPage from './pages/resultsearch/resultsearch';
import ProductDetailPage from './pages/productdetail/productdetail';
import ErrorPage from './pages/errorDefaultPage/errorPage.js';

const App = () => {

  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path='/' element = { <SearchBoxPage/> }></Route>
        <Route path='/itemssearch' element = { <ResultSearchPage/> }></Route>
        <Route path='/itemsid' element = { <ProductDetailPage/> }></Route>
        <Route path='/error' element = { <ErrorPage/> }></Route>
      </Routes>
    </div>
  );
}



export default App;
