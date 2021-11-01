import React, { useEffect } from 'react'
import "./project.css"
import ayush from "./Ayush.jpeg"
import Aos from 'aos'
import "aos/dist/aos.css"

export default () => {

	useEffect(()=>{
		Aos.init({duration:2000});
	},[])

	return (
		<div>
	
	<section class="case-study">
	<div class="title" data-aos="fade-up" >Goodreads</div>
        <div class="subtitle" data-aos="fade-up" >
          A modernized and easy-to-use website for book lovers!
        </div>
        <div class="thumbnail" data-aos="zoom-in" ><img src={ayush} style={{width:'auto',height:'600px'}} /></div>


   {/* <div class="hero" >
        <div class="about" > */}

           <div class="about-title"  data-aos="fade-up">Project Vision</div>
          <div class="description" data-aos="fade-up">
            I have been using Goodreads for five years. I have realized that the current website is not user-friendly. Its target audience is young readers, but the current UI is not enjoyable or appealing to them. So, it's time for Goodreads to acknowledge user expectations.
          </div>

	  <div class="about-title"  data-aos="fade-up">Project Vision</div>
          <div class="description" data-aos="fade-up">
            I have been using Goodreads for five years. I have realized that the current website is not user-friendly. Its target audience is young readers, but the current UI is not enjoyable or appealing to them. So, it's time for Goodreads to acknowledge user expectations.
          </div>




	</section>
	</div>
	)
}
