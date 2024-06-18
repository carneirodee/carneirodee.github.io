import Section from '../../..';
import './SectionServices.css';
import Typewriter from 'typewriter-effect';
import Card from '../../../Card';
import Mobile from '../../../../assets/images/Mobile.jsx';
import Web from '../../../../assets/images/Web.jsx';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Games from '../../../../assets/images/Games';
import { useSwipeable } from 'react-swipeable';

function Swipeable(props) {

    const { onSlide } = props;

    const handlers = useSwipeable({
        onSwipedLeft: () => onSlide('left'),
        onSwipedRight: () => onSlide('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <>
            {isMobile ?
                <div id="container" {...handlers}>
                    {props.children}
                </div> :
                <div>
                    {props.children}
                </div>}
        </>
    );
}

export default Swipeable;
