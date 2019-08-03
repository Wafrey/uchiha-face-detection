import React from 'react';
import './image-link-form.styles.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
    <div>
        <p className='f3 white'>
        {'Sasuke Sharingan will detect faces in your pictures.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-30 grow f3 link ph3 pv2 dib white bg-red'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
)

export default ImageLinkForm;
