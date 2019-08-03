import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Logo from './components/logo/logo.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import './App.css';

const particlesOptions={
  particles: {
    number: {
      value: 120,
      density:{
        enable: true,
        value_area: 1000
      }
    } 
},
"interactivity": {
  "detect_on": "window",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "repulse"
    }
  }
 }
}

class App extends Component{
  constructor(){
    super();

    this.state = {

    }
  }
  
  render(){
    return(
      <div className='App'>
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Logo className=''/>
        <ImageLinkForm/>
      </div>
    )
  }
}

export default App;
