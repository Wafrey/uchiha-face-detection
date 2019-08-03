import React from 'react';
import './face-recognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => (
    <div className='center ma'>
        <div className='absolute mt3'>
                <img id='inputimage' alt='' src={imageUrl} style={{width: '500px', height: 'auto'}}></img>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                </div>
            </div>
    </div>
)

export default FaceRecognition;