import React from 'react';

const VideoTitle = ({video}) =>{
    if(!video){
        return (<div style={{position: 'absolute ',left: '40%',margin : '40px auto'}}>
                     <div className="spinner-border text-warning" role="status" style={{width : 400,height :400}}>
                        <span className="sr-only">Loading...</span>
                        
                    </div>
                    <p className="text-center mt-4">Loading</p>
             </div>)
    }
    return (
        <div className="card" style={{borderRadius: '10px ' }} >
            <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" style={{borderRadius: '10px'}} src={`https://www.youtube.com/embed/${video.id.videoId}`}/></div>
            <div className="card-body">
                 <h5  className="text-center card-title">{video.snippet.title}</h5>
            </div>
        </div>
        )
};

export default VideoTitle;