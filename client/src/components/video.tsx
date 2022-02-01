import React from 'react';

const Video = () => {
    return (
        <div>
            <iframe
                width="640" height="360" src="https://www.youtube.com/embed/ALUKDkOxVPo"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <iframe
                width="640" height="360" src="https://www.youtube.com/embed/lWA2pjMjpBs"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <iframe
                width="640" height="360" src="https://www.youtube.com/embed/U0CGsw6h60k"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <iframe
                width="640" height="360" src="https://www.youtube.com/embed/6JnGBs88sL0"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
        </div>
    );
};

export default Video;