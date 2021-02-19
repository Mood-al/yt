import React from 'react';


const VideoCard = ({video ,onVidClick}) =>{
    return (
        
        <div className="mt-4  " style={{ cursor : 'pointer' ,border: '1px solid #345622' ,borderRadius: '10px'}} onClick={()=> onVidClick(video)} >
            <img  className="d-block" style={{width : '100%',borderRadius: '10px'}} src={video.snippet.thumbnails.medium.url}/>
            <p className=" d-block ">{video.snippet.title}</p>
            
        </div>
    )
};

export default VideoCard;