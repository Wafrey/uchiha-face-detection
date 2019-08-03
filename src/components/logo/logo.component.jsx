import React from 'react';
import Tilt from 'react-tilt';
import uchihaLogo from './uchihaLogo.png';

const Logo = () => (
    <div className='ml5 mt0 pt0'>
        <Tilt className='Tilt br2 shadow-2 ba b--white br-100 bw1' options={{ max: 65 , scale: 1.5}} style={{height: 240, width: 200}}>
            <div className='Tilt-inner pa3'>
                <img style={{paddingTop: '5px', width: '250px', height: '200px'}} alt='logo' src={uchihaLogo}></img>
            </div>
        </Tilt>
    </div>
)

export default Logo;