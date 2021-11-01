import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" style={{backgroundColor:"black"}}>
      <Container lg={16}>
      <Col>
        <Row>
         {/* <div style={{position:"block"}}> */}
        <Title title="About Me" />
        {/* </div> */}
        </Row>
        {/* <br/> */}
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={600} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={600} delay={600} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                {"Who?"}
                <br/>
              { "Hi, I'm Tejaswini,"}
               <br/>
              {"This is my story."}
              <br/><br/>
                  {paragraphOne ||"I am a 4th year undergrad student studying at Acharya Institute of technology, IN. Currently hailing from Bengaluru. Since forever have been painting strokes on canvases. I envision the UI world not very different from Da Vinci's eyes."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "I have a design driven mind. Unlike a lot of people who have always known their path, I recently paved my way into UI after a lot of research during my university program. I am motivated to catch up and learn as much as I can in the process. Now that I have had my fair amount of learning, I can confidently say this is what I love doing."}
                </p>
                <p className="about-wrapper__info-text">
                  {'If you think I cant surprise you more, I am a Junior under officer, National cadet corps(NCC), ministry of Defence. So when I say I bring discipline and drive to my work, I quote it.'}
                </p>

                <p className="about-wrapper__info-text">
                  {"To get on my good side, Cavin's and muffins will do the trick.If I am MIA, you will probably find me in a cozy corner eyeing on a mythological novel, juggling with stamps and coins or living my Picasso life."}
                </p>

                <p className="about-wrapper__info-text">
                  {"I hope I can be a part of the designing community and contribute my part in making the world a better place.."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        </Col>
      </Container>
    </section>
  );
};

export default About;
