import { useNavigate } from 'react-router-dom';
import './searchboxcomponent.scss';
import { useEffect, useState } from 'react';


function SearchBoxComponent(props) {
    const { searchHandle, getSearchBoxHandle, setTypedSearched} = props;
    const [valueInput, setValueInput] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setValueInput(setTypedSearched);
    }, []);
    
    const goToHome = () => {
        navigate('/');
    }

    const setSearch = (event) => {
        setValueInput(event.target.value)
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
                    <input className="input-search" 
                        value={valueInput}
                        placeholder='Nunca dejes de buscar'
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