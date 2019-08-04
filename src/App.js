import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation.component';
import Logo from './components/logo/logo.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import Rank from './components/rank/rank.component';
import Register from './components/register/register.component';
import FaceRecognition from './components/face-recognition/face-recognition.component';
import './App.css';

const app = new Clarifai.App({

  apiKey: '5c8d2dbf5629416d959c347d068e5271'
});

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
      input: '',
      imageUrl: '',
      box: {

      }
    }
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    
    return{
  
      leftCol: clarifaiFace.left_col*width,
      topRow: clarifaiFace.top_row*height,
      rightCol: width-(clarifaiFace.right_col*width),
      bottomRow: height-(clarifaiFace.bottom_row*height)
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) 
      .catch(err => console.log(err))
  }

  
  render(){
    const { imageUrl, box, } = this.state;
    return(
      <div className='App'>
        <Particles 
          className='particles'
          params={particlesOptions}
        />
        <Navigation/>
        <Logo className=''/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    )
  }
}

export default App;
