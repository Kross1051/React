import React from 'react';
import Video from '../assets/Video.mp4';


const VideoComponent = () => {
    return (
        <div className="video-container">
            <h2 className="video-title">Video</h2>
            <video className="video-element" controls muted autoPlay loop>
            <source src={Video} type = {Video.mp4}/>
            </video>
        </div>
    )
}
export default VideoComponent;