import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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

  const projectsC = (project,i) => {
    const { title, info, info2, url, repo, img, id } = project;
    if(i%2==0){
      return(
        <Row key={id}>
              <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image" style={{height:"600px",width:"400px"}}>
                      <a
                        href={url || '#!'}
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
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img}  />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>

                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div style={{marginTop:'200px'}} className="project-wrapper__text">
                      <h3 style={{color:'white',textAlign:"center"}} className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p style={{color:'white',textAlign:"left"}}>
                        {info|| ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a> */}

                      {/* {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )} */}
                    </div>
                  </Fade>
                </Col>
                
              </Row>
      )
    } else {
      return(
        <Row key={id}>
        <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div style={{marginTop:'110px'}} className="project-wrapper__text">
                      <h3 style={{color:'white',textAlign:"center"}} className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p style={{color:'white',textAlign:"center"}}>
                          {"“Innocence tinctures all the things with the brightest hues”"}
                          <br/>
                          {"-EDWARD COUNSEL"}<br/>
                          </p>
                          <p style={{textAlign:"left"}}>{"It’s the  innocence of children what makes them fearless."}<br/>
                          {"“He asked her to play with a toy down there ,Seven years later she gets to know that it wasn’t just a thing to play with.”"}<br/>
                          {"The first casualty of war is innocence."}</p>
                        
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {/* <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a> */}

                      {/* {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )} */}
                    </div>
                  </Fade>
                </Col>
              <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image" style={{height:"500px",width:"400px"}}>
                      <a
                        href={url || '#!'}
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
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                
                
              </Row>
      )
    }
  }

  return (
    <section id="projects">
      <Container>
        <div  className="project-wrapper" style={{color:"white"}}>
        
          <Title title="Happy Thoughts" />
          {projects.map((project,i) => {
           

             return (projectsC(project,i))
            
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
