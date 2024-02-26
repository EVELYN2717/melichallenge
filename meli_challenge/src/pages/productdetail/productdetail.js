import './productdetail.scss';
import SearchBoxComponent from '../../components/searchBox/searchboxcomponent';
import CardDetailComponent from '../../components/carddetail/carddetailcomponent';
import { useLocation, useNavigate } from "react-router-dom";
import BreadCrumbComponent from '../../components/breadcrumb/breadcrumbcomponent';
import getSearch from '../../services/searchservice';
import { useState, useEffect } from 'react';
import getItemById from '../../services/itemservices';

function ProductDetailPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const [typedSearch, setTypedSearch] = useState([]);
    const [categoriesFromSearch, setCategoriesFromSearch] = useState();
    const [loadContent, setLoadContent] = useState(false);

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
        (loadContent && <div class="ctn-main">
            <div class="ctn-header">
            <SearchBoxComponent searchHandle={searchHandle} getSearchBoxHandle={getSearchBoxHandle} setTypedSearched={location.state.typed}/>
            </div>
            <div class="ctn-body">
                <BreadCrumbComponent breadCrumbProps={location.state.breadCrumbProps == undefined ? categoriesFromSearch : location.state.breadCrumbProps} typeSearchBox={location.state.typed}/>
                <CardDetailComponent serviceDetail={location.state}/>
            </div>
        </div> 
        )
    );
}

export default ProductDetailPage;
