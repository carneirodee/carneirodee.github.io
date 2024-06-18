import './SectionAbout.css';
import Section  from '../..';
function SectionAbout(props) {


    return (
        <Section>
        <div id="about">
            {props.children}
        </div>
        </Section>
    );
}

export default SectionAbout;
