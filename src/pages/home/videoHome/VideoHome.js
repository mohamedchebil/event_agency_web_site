import React from 'react'
import './videoHome.css'
import videoHome from '../../../assets/video/home/videoHome.mp4'


const VideoHome = () => {
    return(
        <div className='video-home-container'>
            <video className='video-home' autoPlay muted>
                <source src={videoHome} type="video/mp4"/>
            </video>
        </div>
    );
} 

export default VideoHome