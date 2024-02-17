import { useState } from 'react';
import SearchBoxComponent from '../../src/components/searchBox/searchboxcomponent';
import getSearch from '../services/searchservice';
import { useNavigate } from "react-router-dom";
import getItemById from '../services/itemservices';

function SearchBoxPage() {
    const [typedSearch, setTypedSearch] = useState([]);
    const navigate = useNavigate();

    const searchHandle = (typed) => {
        setTypedSearch(typed)
    }

    const getSearchBoxHandle = () => {
        if (typedSearch.substring(0, 3) === 'MLA') {
            getItemById(typedSearch).then((res) => {
                navigate('/itemsid', {state: {itemById:res.data, typed: typedSearch}});
            });    
        } else {
            getSearch(typedSearch).then((res) => { 
                navigate('/itemssearch', {state: {itemById:res.data, typed: typedSearch}});
            });
        }
    }

    return (
        <div>
            <SearchBoxComponent searchHandle={searchHandle} getSearchBoxHandle={getSearchBoxHandle} />
        </div>
       
    );
}

export default SearchBoxPage;