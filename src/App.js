import React, { Component } from 'react';
import Logo from './components/logo/logo.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
  }
  
  render(){
    return(
      <div>
        <Logo/>
      </div>
    )
  }
}

export default App;
