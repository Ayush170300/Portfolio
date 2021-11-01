import React, { useContext, useState, useEffect } from 'react';
import { Container,Row,Col  } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">

      <Container>
      <Col>
      <Row>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <h1 className="hero-title" style={{color:"white",marginLeft:"30px"}}>
            {/* {title || 'Hey there,'} */}
            <span className="text-color-main">{'Tejaswini L Vantigodi' || 'Your Name'}</span>
            <br />
            {subtitle || "Bringing user interfaces to life."}
            <br />
            {" Well! Hop on,"}
            <br/>
            {"It's an artistic ride."}
          </h1>
        </Fade>
        </Row>
        <Row>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={700} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero" style={{marginLeft:"30px"}}>
              <a href="/TejaXUI" smooth duration={1000}>              
                {cta || 'Teja X UI'}
              </a>
            </span>
          </p>
        </Fade>
        </Row>
        </Col>
      </Container>
    </section>
  );
};

export default Header;
