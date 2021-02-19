import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({videos , onVidClick}) =>{
    const video =  videos.map(video =>{
       return <VideoCard video={video} key={video.id.videoId} onVidClick={onVidClick} />
    })
    return (
        <div>
            {video}
        </div>
    )
};

export default VideoList;