import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoTitle from './VideoTitle'
import VideoList from './VideoList'
class App extends React.Component {
state = {
    videos : [],
    onVidClick : null
}
componentDidMount(){
    this.onForm('programming')
}

onForm = async term =>{
const KEY = "AIzaSyBmdBLljDmTE69ZW4ccXmF8MHHS2MvM9-M";

   const res = await axios.get("https://www.googleapis.com/youtube/v3/search",{
    
    params : {
        part : 'snippet',
        maxResults :5,
        key : KEY,
        q:term
    }
    });
    this.setState({
        videos : res.data.items,
        onVidClick :res.data.items[0]
        
    
    })
};
onVidClick = vid =>{
    this.setState({onVidClick : vid})
};
    render(){
        return (
            <div className="container mt-4">
                <SearchBar onForm={this.onForm} />
                <div className="row">
                    <div className="col-md-8">
                      <VideoTitle video={this.state.onVidClick} />
                    </div>
                    <div className="col-md-4">
                        <VideoList videos={this.state.videos} onVidClick={this.onVidClick}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;