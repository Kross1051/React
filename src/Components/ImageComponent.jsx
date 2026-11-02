import React from 'react'
import Cat from '../assets/Cat.jpg'

const ImageComponent = () => {
    return (
        <div className='image-container'>
            <h2>My Game</h2>
            <img src={Cat} alt="cat" />
        </div>
    );
};

export default ImageComponent;