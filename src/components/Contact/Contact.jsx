import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import { githubButtons } from '../../mock/data';

const Contact = () => {
  const { contact,footer } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <section id="contact" style={{paddingBottom:'0px',marginTop:'100px'}}>
      <Container>
      <div >
        <div >
          <Title title="Contact" />
        </div>
           {/* <br/> */}
        <div >
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div style={{color:'white'}} className="contact-wrapper" >
            <p className="contact-wrapper__text">
              {cta || 'I prefer letters, but this works too'}
            </p>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
        </div>
      </div>
      </Container>

      <br/>
      <br/>

      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i style={{color:'white'}} className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        </Container>
        <br /><br />
        
        <hr style={{width:"90%",color:'white',border:"1px solid white",display:'block',marginLeft:'auto',marginRight:'auto'}} />
        <div style={{textAlign:"left"}}>
        <p style={{color:"white",fontSize:"15px",marginLeft:"5%",marginBottom:"4%"}}>Designed + Developed by Tejaswani Vantigodi</p>
        </div>

        {/* <p className="footer__text">
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p> */}

        {/* {isEnabled && <GithubButtons />} */}
      
    </section>
  );
};

export default Contact;
