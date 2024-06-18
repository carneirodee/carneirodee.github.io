import Container from '../Container';
import Content from '../Content';
import ScrollProgressDots from '../ScrollProgressDots';
import {
    SectionAbout,
    SectionContact,
    SectionExperience,
    SectionHome,
    SectionProjects,
    SectionServices
} from '../Section/Sections';
import './ScrollSnapPage.css';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

function ScrollSnapPage() {

    const [isHome, setIsHome] = useState(false);
    // const [isAbout, setIsAbout] = useState(false);
    const [isServices, setIsServices] = useState(false);
    // const [isProjects, setIsProjects] = useState(false);
    // const [isExperience, setIsExperience] = useState(false);
    const [isContact, setIsContact] = useState(false);

    return (

        <Container>
            <ScrollProgressDots
                isHome={isHome}
                // isAbout={isAbout}
                isServices={isServices}
                // isProjects={isProjects}
                // isExperience={isExperience}
                isContact={isContact}
            />
            <Content>
                <VisibilitySensor onChange={(isVisible) => { setIsHome(isVisible) }}>
                    <SectionHome />
                </VisibilitySensor>
                {/* <VisibilitySensor onChange={(isVisible) => { setIsAbout(isVisible) }}>
                    <SectionAbout> <h1> About </h1></SectionAbout>
                </VisibilitySensor> */}
                <VisibilitySensor onChange={(isVisible) => { setIsServices(isVisible) }}>
                    <SectionServices></SectionServices>
                </VisibilitySensor>
                {/* <VisibilitySensor onChange={(isVisible) => { setIsProjects(isVisible) }}>
                    <SectionProjects> <h1> Projects </h1></SectionProjects>
                </VisibilitySensor> */}
                {/* <VisibilitySensor onChange={(isVisible) => { setIsExperience(isVisible) }}>
                    <SectionExperience> <h1> Experience </h1></SectionExperience>
                </VisibilitySensor> */}
                <VisibilitySensor onChange={(isVisible) => { setIsContact(isVisible) }}>
                    <SectionContact> <h1> Contact </h1></SectionContact>
                </VisibilitySensor>
            </Content>
        </Container>
    );
}

export default ScrollSnapPage;