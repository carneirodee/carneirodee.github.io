import './SectionHome.css';
import Section from '../..';
import Video from '../../../../assets/videos/video_1.mp4'
import Typewriter from 'typewriter-effect';


function SectionHome() {

  const goTo = () => {
    return document.location = '#contact'
  }
  return (
    <Section>
      <div id="home" className="section-home">

        <div className="home-content">
          {/* <Typewriter
            options={{
              strings: ['deecarneiro\'s portfolio'],
              autoStart: true,
              loop: true,
            }}
          /> */}
          <div className="box">
            <h1 title="FULLSTACK" className="_404 first">FULLSTACK</h1>
            <h1 title="DEVELOPER" className="_404">DEVELOPER</h1>
          </div>
          <div className="box right">
            Hi I am Dee! A fullstack developer passionate with coding and make weird things come true...
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionHome;
