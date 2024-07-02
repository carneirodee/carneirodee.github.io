import Container from '../Container';
import Content from '../Content';
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
            <Content>
                    <SectionHome />
                    <SectionServices/>
                    {/* <SectionProjects> <h1> Projects </h1></SectionProjects>
                    <SectionExperience> <h1> Experience </h1></SectionExperience> */}
                    <SectionContact/>
            </Content>
        </Container>
    );
}

export default ScrollSnapPage;