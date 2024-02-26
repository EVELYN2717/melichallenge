import './productdetail.scss';
import SearchBoxComponent from '../../components/searchBox/searchboxcomponent';
import CardDetailComponent from '../../components/carddetail/carddetailcomponent';
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbComponent from '../../components/breadcrumb/breadcrumbcomponent';
import getSearch from '../../services/searchservice';
import { useEffect, useState } from 'react';
import getItemById from '../../services/itemservices';


function ProductDetailPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const [typedSearch, setTypedSearch] = useState([]);

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
        <div class="ctn-main">
            <div class="ctn-header">
            <SearchBoxComponent searchHandle={searchHandle} getSearchBoxHandle={getSearchBoxHandle} setTypedSearched={location.state.typed}/>
            </div>
            <div class="ctn-body">
                <BreadCrumbComponent breadCrumbProps={location.state.breadCrumbProps} typeSearchBox={location.state.typed}/>
                <CardDetailComponent serviceDetail={location.state}/>
            </div>
        </div> 
    );
}

export default ProductDetailPage;
