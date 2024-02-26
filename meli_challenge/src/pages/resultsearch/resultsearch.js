import './resultsearch.scss';

import ResultSearchComponent from "../../components/resultSearch/resultsearchcomponent";
import SearchBoxComponent from "../../components/searchBox/searchboxcomponent";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import getItemById from "../../services/itemservices";
import BreadCrumbComponent from "../../components/breadcrumb/breadcrumbcomponent";
import getSearch from '../../services/searchservice';
import { useState } from 'react';

function ResultSearchPage() {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [typedSearch, setTypedSearch] = useState([]);
    
    const getDetailProdHandle = (idProduct) => {   
        getItemById(idProduct).then((res) => {
            navigate('/itemsid', {state: {itemById: res.data, 
                typed: location.state.typed,
                breadCrumbProps: location.state.itemById.categories}})
        })  
    }

    const searchHandle = (typed) => {
        setTypedSearch(typed)
    }

    const getSearchBoxHandle = () => {
        const typed = typedSearch.length === 0 ? location.state.typed : typedSearch;
        if (typed.substring(0, 3) === 'MLA') {
            getItemById(typed).then((res) => {
                navigate('/itemsid', {state: {itemById:res.data, typed: typed}});
            });    
        } else {
            getSearch(typed).then((res) => { 
                navigate('/itemssearch', {state: {itemById:res.data, typed: typed}});
            });
        }
    }

    return (
        <div class="ctn-main">
            <div class="ctn-header">
                <SearchBoxComponent searchHandle={searchHandle} getSearchBoxHandle={getSearchBoxHandle} setTypedSearched={location.state.typed}/>
            </div>
            <div class="ctn-body">
                <BreadCrumbComponent breadCrumbProps={location.state.itemById.categories} typeSearchBox={location.state.typed}/>
                <ResultSearchComponent serviceData={location.state.itemById} getDetailProdHandle={getDetailProdHandle}/>
            </div>

        </div> 
    );
}

export default ResultSearchPage;
