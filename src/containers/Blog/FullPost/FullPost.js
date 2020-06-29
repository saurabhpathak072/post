import React, { Component } from 'react';
import Axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }
    componentDidMount(){
        console.log("Full post",this.props);
       this.loadupdate();
        
    }
    componentDidUpdate(){
        this.loadupdate();
    }
    loadupdate =()=>{
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
                Axios.get(`https://jsonplaceholder.typicode.com/posts/`+this.props.match.params.id)
                .then(response=>{
                this.setState({loadedPost:response.data})
                console.log(response.data)
                })
            }
        }
    }

    deletePostHandler = ()=>{
        Axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
        .then(response=>{
            console.log(response)
        })
    }
    render () {
        
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
             post = <p style={{textAlign:'center'}}>Loading.....</p>; 
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                         className="Delete"
                         onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;