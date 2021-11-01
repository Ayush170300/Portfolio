import { Container,Row,Col } from 'react-bootstrap'
import Tilt from "react-tilt"
import React,{useEffect} from 'react'
// import Footer from '../components/Footer.jsx'
// import NavBar from '../components/Navbar.jsx'

import Aos from 'aos'
import "aos/dist/aos.css"
import "./ui.css"
import ui1 from "../images/tXUI1.jpeg"
import ui2 from "../images/tXUI2.jpeg"

const TejaXUI= () => {

	useEffect(()=>{
		Aos.init({duration:1000});
	},[]);

	return (
		<div >
		<Container fluid style={{marginBottom:'100px'}}>
			<div style={{fontFamily:'Akronim',fontSize:'55px',marginTop:'35px',textAlign:'center',marginBottom:'35px'}}>
			Teja <span style={{fontSize:'40px'}}>X</span> UI
			</div>

		<div style={{display:'flex',margin:'auto',width:'29%'}} >
		
		<div >
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
                          <div data-tilt className="thumbnail rounded"  >
                            <img alt="tXUI" src={ui1} style={{height:'300px',width:'auto'}} />
                          </div>
                        </Tilt>
		</div>
		
		<div style={{marginLeft:'10px'}}>
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
                            <img alt="tXUI" src={ui2} style={{height:'300px',width:'auto'}} />
                          </div>
                        </Tilt>
		</div>
		
		{/* <Col md={4} >
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
                            <img alt="tXUI" src={ui3} style={{height:'400px',width:'auto'}} />
                          </div>
                        </Tilt>	
		</Col> */}
	</div>
	<br/>
	<br/>

	       <div style={{paddingLeft:'200px',paddingRight:'200px',marginTop:'35px'}} >
		<p style={{fontSize:'25px',fontWeight:'bold'}}>❝Did the soul work to identify my next stop and took it.❞</p>
		<br />
		<p >
		When we lose the magic of visualizing beauty through the mundanity of our lives, I discovered myself enthralled in the art of design making. I could only make reasons to symbolize things around me with my artistic skills. The world can only look random if you are incapable of looking at it without an artistic feel. I found myself living through the randomness around me and giving it a form that beholds the vision of the viewer. I kept learning, growing, and most importantly bringing my vision into life with a sense of responsibility and artistry.	
		</p>
		<br/>
		<p >
		Computer languages are expressions that could bring life. I found this statement valid when I could express my vision using necessary computer tools. The randomness of most people's observations could be rationalized by me using my technical skills with an artistic touch through my interfaces and designs.
		</p>
		<br/>
		<p >
		I was introduced to UI/UX a few years ago during my undergrad, which got me thinking  about how my eye for colors, typography  can be put to good technical use. I was into the field, did more research and kick started my journey off into the world of UI. My knowledge of art, HTML, CSS, JS, React helps me build products which I can see through an artistic and a functional perspective.
I enrolled myself in various summer trainings offered on coursera by California Institute of Arts, brushing up my skills to form a base for my higher studies.
		</p>
		<p >
		I am adamant, disciplined and dedicated to the field and aims to develop beautiful apps, will provide insights and incorporate feedback into product design.
		</p>
    <br/>
		<p style={{fontSize:'20px',fontWeight:'bold',marginTop:'10px'}}>
		As I quote ❝This is what I love doing❞, this will drive me to the best giving my all in, to the field.
		</p>
		</div>
		</Container>

		</div>
	)
}

export default TejaXUI;