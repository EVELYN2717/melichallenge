import { useNavigate } from 'react-router-dom';
import './searchboxcomponent.scss';


function SearchBoxComponent(props) {
    const { searchHandle, getSearchBoxHandle} = props;
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    }

    const setSearch = (event) => {
        searchHandle(event.target.value);
    }

    const getSearchBox = () => {
        getSearchBoxHandle();
    }
 
    return (
        <div className="search-box">
           <div className="ctn-search-box">
                <div className='logo-meli' onClick={() => {goToHome()}}></div>
                <div className="header-search-box">
                    <input className="input-search" placeholder='Nunca dejes de buscar'
                        onChange={(e) => {setSearch(e)}} 
                        onKeyDown={(event) => {if (event.key === "Enter")  getSearchBox()}}>
                    </input>
                </div>
                <div className='logo-search' onClick={() => getSearchBox()}></div>
           </div>            
        </div>
    );
}

export default SearchBoxComponent;