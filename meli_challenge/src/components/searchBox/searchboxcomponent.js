import './searchboxcomponent.scss'

function SearchBoxComponent() {

    return (
        <div className="search-box">
           <div className="ctn-search-box">
                    <div className='logo-meli'></div>
                <div className="header-search-box">
                    <input className="input-search" placeholder='Nunca dejes de buscar'></input>
                </div>
                <div className='logo-search'></div>
           </div>            
        </div>
    );
}

export default SearchBoxComponent;