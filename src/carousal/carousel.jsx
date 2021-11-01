import React from 'react'
import { Carousel } from '3d-react-carousal'
import teja from "../images/teja.jpeg"
import nn from "../images/nn.jpeg"
import nm from "../images/ne.jpeg"


const Icarousel = () => {

  let slides = [
    <div class="content">
      <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
        <div class="content-overlay"></div>
        <img style={{height:'475px',width:'auto'}} src={teja} />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">This is a title</h3>
          <p class="content-text">This is a short description</p>
        </div>
      </a>
    </div>,
    <div class="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div class="content-overlay"></div>
      <img style={{height:'475px',width:'auto'}} src={nm} />
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    </a>
  </div>,
  <div class="content">
  <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
    <div class="content-overlay"></div>
    <img style={{height:'475px',width:'auto'}} src={nn} />
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">This is a title</h3>
      <p class="content-text">This is a short description</p>
    </div>
  </a>
</div>,
<div class="content">
  <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
    <div class="content-overlay"></div>
    <img style={{height:'475px',width:'auto'}} src={nn} />
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">This is a title</h3>
      <p class="content-text">This is a short description</p>
    </div>
  </a>
</div>,<div class="content">
  <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
    <div class="content-overlay"></div>
    <img style={{height:'475px',width:'auto'}} src={nn} />
    <div class="content-details fadeIn-bottom">
      <h3 class="content-title">This is a title</h3>
      <p class="content-text">This is a short description</p>
    </div>
  </a>
</div>,
  ];
  
	return (
    <Carousel slides={slides} />
	)
}

export default Icarousel
