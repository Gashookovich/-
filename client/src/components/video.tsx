import React from 'react';
import './video.css';
// @ts-ignore
import pdfFile1 from '../manual/homework1.pdf';

const Video = () => {
    return (
        <div className={'block-video'}>
            <div className={'block-video_container'}>
                <h2 className={'block-video_container-head'}>Занятие №1</h2>
                <iframe
                    width="640" height="360" src="https://www.youtube.com/embed/ALUKDkOxVPo"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                <a className={'block-video_container-footer'} href={pdfFile1} download>скачать методичку к занятию №1</a>
            </div>
            <div className={'block-video_container'}>
                <h2 className={'block-video_container-head'}>Занятие №2</h2>
                <iframe
                    width="640" height="360" src="https://www.youtube.com/embed/lWA2pjMjpBs"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                <a className={'block-video_container-footer'} href={pdfFile1} download>скачать методичку к занятию №2</a>
            </div>
            <div className={'block-video_container'}>
                <h2 className={'block-video_container-head'}>Занятие №3</h2>
                <iframe
                    width="640" height="360" src="https://www.youtube.com/embed/U0CGsw6h60k"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                <a className={'block-video_container-footer'} href={pdfFile1} download>скачать методичку к занятию №3</a>
            </div>

        </div>
    );
};

export default Video;