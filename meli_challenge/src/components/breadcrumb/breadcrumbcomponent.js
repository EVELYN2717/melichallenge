import './breadcrumbcomponent.scss';


function BreadCrumbComponent(props) {
    
    const { breadCrumbProps, typeSearchBox } = props;
    const LIMIT_CATEGORIES = 4;

    return (
        <div className='ctn-crumbs'>
            {breadCrumbProps.length <= LIMIT_CATEGORIES && breadCrumbProps.map((crumbs, idx) => (
                    <div className='crumbs'>{crumbs === 'Categories Not Found' ? typeSearchBox : crumbs }<div className={`arrow ${idx === breadCrumbProps.length-1 ? 'none': ''}`}>&gt;</div></div> 
                )
            )
            }
            {breadCrumbProps.length > LIMIT_CATEGORIES && 
                    <div className='crumbs'>{typeSearchBox}</div>
            }
        </div>
    );
}

export default BreadCrumbComponent;