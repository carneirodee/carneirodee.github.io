import './MobileCard.css';
// import  Mobile  from '../../assets/images/Mobile.jsx';

function MobileCard(props) {

    const { title, imgSrc, description, buttonValue, onclick, visibility } = props;
    return (
        <>
            {
                visibility &&
                    <span className="mobile-card">
                        < h1 > {title}</h1 >
                        {props.children}
                        < p > {description}</p >
                        <button onClick={onclick}>{buttonValue}</button>
                    </span >
            }
        </>
    );
}

export default MobileCard;
