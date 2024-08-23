import React from 'react';
import ReactPlayer from 'react-player'
import "./mainVideo.scss"

const MainVideo: React.FC = () => {
    return (
        <div className="video-container">
            <ReactPlayer
                url='https://www.youtube.com/watch?v=_OKAwz2MsJs'
                playing={true}
                controls={false}
                loop={true}
                volume={0}
                height="100%"
                width="100%"
            />
        </div>
    );
};

export default MainVideo;