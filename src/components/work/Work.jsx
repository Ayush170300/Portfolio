import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import "./new.css";

import p1 from "./Pictures/1.jpg";
import p2 from "./Theuppereastside/1.png"

const Work = () => {
  // const { projects } = useContext(PortfolioContext);

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
    <section style={{paddingTop:"-30px"}} id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Work" />
          <div style={{display:'flex'}}>
      
            <div style={{height:'400px',width:'auto'}}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={600}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={'#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                        <div class="workImage">
                        <div class="content">
                          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img src={p1} />
                            <div class="content-details fadeIn-bottom">
                              <h3 style={{fontWeight:'bold',fontSize:'25px'}} class="content-title">FlameOn</h3>
                              <p class="content-text">Web Development.</p>
                            </div>
                          </a>
                        </div>
                          </div>
     
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
            </div>

            <div>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={'#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                        <div class="workImage">
                        <div class="content">
                          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
                            <div class="content-overlay"></div>
                            <img src={p2} style={{height:'292px',width:'auto'}} />
                            <div class="content-details fadeIn-bottom">
                              <h3 style={{fontWeight:'bold',fontSize:'25px'}} class="content-title">The UpperEast Side</h3>
                              <p class="content-text">Web Development.</p>
                            </div>
                          </a>
                        </div>
                          </div>
     
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
            </div>
            
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
