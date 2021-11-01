import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import "../work/new.css"
import teja from "./teja.jpeg";
import nn from "./nn.jpeg";
import p1 from "./ThriftSpirit/1.png"
const Brain = () => {
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
    <section  id="projects" >
      <Container>
        <div className="project-wrapper">
          <Title title="Brain Storming" />
          <br/>
          <Row md={2}>
      
            <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
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
                            <img style={{height:'auto'}} src={p1} />
                            <div class="content-details fadeIn-bottom">
                              <h3 style={{fontWeight:'bold',fontSize:'25px'}} class="content-title">Taste Buds</h3>
                              <p style={{fontSize:'22px'}} class="content-text">UI</p>
                            </div>
                          </a>
                        </div>
                          </div>
     
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
            </Col>

            <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
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
                            <img style={{height:'auto'}} src={p1} />
                            <div class="content-details fadeIn-bottom">
                              <h3 style={{fontWeight:'bold',fontSize:'25px'}} class="content-title">ThriftSpirit</h3>
                              <p style={{fontSize:'22px'}} class="content-text">UI</p>
                            </div>
                          </a>
                        </div>
                          </div>
     
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
            </Col>
            
            
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Brain;