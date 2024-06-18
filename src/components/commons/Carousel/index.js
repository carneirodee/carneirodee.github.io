import './Carousel.css';
import ReactCardCarousel from "react-card-carousel";

function Carousel(props) {

    return (
        <div class="carousel">
            <ReactCardCarousel >
              {props.children}
            </ReactCardCarousel>
        </div>
    );
}
export default Carousel;
