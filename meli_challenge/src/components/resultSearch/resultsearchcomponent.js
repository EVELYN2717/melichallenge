import './resultsearchcomponent.scss';


function ResultSearchComponent(props) {
    const {serviceData, getDetailProdHandle} = props;

    const getDetailProd = (id) => {
        getDetailProdHandle(id);
    }

    return (

        <div className='page-results'>
            { serviceData.items.map((data) => (
                <div className='card-product'>
                    <div className='img-product'>
                        <img src={data.picture} onClick={() => getDetailProd(data.id)}></img>
                    </div>
                    <div className='data-product'>
                        <div className='price'>
                            <div className='value-price'>
                                <p>$ {data.price.amount}</p>
                            </div>
                            <div className='logo-shipping'></div>
                        </div>
                        <div className='title-product' onClick={() => getDetailProd(data.id)}>
                            <p> {data.title} </p>
                        </div> 
                    </div>
                <div className='location'>
                    <p>Capital Federal</p>
                </div>
            </div>
            ))}
        </div>       
    )          
}


export default ResultSearchComponent;