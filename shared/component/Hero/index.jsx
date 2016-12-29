//************************
// Modules
//************************

import React, { Component } from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

//************************
// Component
//************************


//************************
// Style
//************************

import {
  hero,
  hero__layer
} from './hero.less'

//*************************
// Assets
//*************************


const Hero = ({})=>{
  return (
    <div className={hero}>
      <div className={hero__layer}>
        <h1>Connect All
Travelers and Locals</h1>
        <h5>sonder is new traveler network service</h5>
      </div>
      <Video autoPlay loop muted
        poster=""
        onCanPlayThrough={() => {}}
      >
        <source src="./assets/video/video.mp4" type="video/mp4" />
      </Video>
    </div>
  )
};

export default Hero
