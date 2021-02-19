import React from 'react';

class SearchBar extends React.Component{
state ={
    term : ''
}
onFormSubmit =(e)=>{
    e.preventDefault();
    this.props.onForm(this.state.term)
};
onInputChange = (e)=>{
    this.setState({term : e.target.value})
}
    render(){
        return(
            <div >
                <h1 className="display-4 text-center my-4 text-secondary">Welcome To Youtube Browser</h1>
                <form className="form-group" onSubmit={this.onFormSubmit} >
                    <input type="text" value={this.state.term} className="form-control" placeholder="type something to search about" onChange={this.onInputChange}/>
                </form>
      
            </div>
        )
    }
}

export default SearchBar;