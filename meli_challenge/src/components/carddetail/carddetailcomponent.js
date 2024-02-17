import './carddetailcomponent.scss';

function CardDetailComponent(props) {
    const {serviceDetail} = props;


    return (
        <div className="page-detail">
                <div className='card-product'>
                    <div className='card-detail-product'>
                        <div className='img-product'>
                            <img src={serviceDetail.itemById.item.picture}></img>
                        </div>
                        <div className='purchase-data'>
                            <div className='condition'>
                                <p>{serviceDetail.itemById.item.condition} - {serviceDetail.itemById.item.sold_quantity} vendidos</p>
                            </div>
                            <div className='title'>
                                <p>{serviceDetail.itemById.item.title}</p>
                            </div>
                            <div className='price'>
                                <p> ${serviceDetail.itemById.item.price.amount}</p>
                            </div>
                            <div className='button-purchase'>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className='description-product'>
                        <div className='title-desc'>
                            <p>Descripción del producto</p>
                        </div>
                        <div className='text-desc'>
                            <p>{serviceDetail.itemById.item.description}\</p>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export default CardDetailComponent;