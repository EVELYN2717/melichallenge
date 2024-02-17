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
    const [categoriesFromSearch, setCategoriesFromSearch] = useState();
    const [loadContent, setLoadContent] = useState(false);
    const [typedSearch, setTypedSearch] = useState([]);
    
    useEffect(() => {
        getSearch(location.state.itemById.item.category_id).then((res) => { 
            setCategoriesFromSearch(res.data.categories) 
            setLoadContent(true);
        });
    }, []);

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
        (loadContent && <div class="ctn-main">
        <div class="ctn-header">
        <SearchBoxComponent searchHandle={searchHandle} getSearchBoxHandle={getSearchBoxHandle}/>
        </div>
        <div class="ctn-body">
            <BreadCrumbComponent breadCrumbProps={categoriesFromSearch} typeSearchBox={location.state.typed}/>
            <CardDetailComponent serviceDetail={location.state}/>
        </div>
    </div> )
        
    );
}

export default ProductDetailPage;
