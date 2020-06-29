import React, { Component } from 'react';
import Axios from 'axios';
import Post from '../../../components/Post/Post'; 
import FullPost from '../FullPost/FullPost';

import {Route} from 'react-router-dom';

export default class Posts extends Component {
    state={
        posts:[],
        selectedPostId:null
    }
    postSelectedHandler =(id)=>{
        this.setState({
            selectedPostId:id
        })
        this.props.history.push('/post/'+id);
    }
    componentDidMount(){
        console.log(this.props);
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data.slice(0,4);
            const updatedpost = posts.map(post=>{
                return {
                    ...post,
                    author:"saurabh"
                }
            })
            this.setState({
                posts:updatedpost
            }); 
        })
    }
    render() {
       
        const posts = this.state.posts.map(post=>{
            return (
            //<Link to={'/' + post.id} key={post.id}>
                <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}/
             >
          
            )
        })
        return (
            <div>

                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id" } component={FullPost}/>
            </div>
        )
    }
}
