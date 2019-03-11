import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onSelect }) => {
    const { title, thumbnails } = video.snippet;
    return (
        <div className="video-item item" onClick={() => { onSelect(video) }}>
            <img width="100%" className="ui image" src={thumbnails.medium.url} alt={title} />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
