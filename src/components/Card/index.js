import './Card.css';
// import  Mobile  from '../../assets/images/Mobile.jsx';

function Card(props) {

    const {title, imgSrc, description, buttonValue, onclick} = props;
    return (
        <span className="card">
            <h1>{title}</h1>
            {props.children}
            <p>{description}</p>
            <button onClick={onclick}>{buttonValue}</button>
        </span>
    );
}

export default Card;
