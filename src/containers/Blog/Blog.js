import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';


import asyncComponentLazyloading from '../../HOC/asyncComponentLazyloading';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import './Blog.css';

const AsyncNewPost =asyncComponentLazyloading(()=>{
    return import('./NewPost/NewPost');
});
// import post from '../../components/Post/Post';

class Blog extends Component {
    
  

    

    render () {
        
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/post/">Home</NavLink></li>
                            <li><NavLink to={{
                                
                                    pathname:'/New-post/',
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <Route path="/" exact exact render={()=><h1>Home</h1>}/>
                <Route path="/" render={()=><h1>Home 2</h1>}/> */}
                <Switch>
                <Route path="/New-post"  component={AsyncNewPost}/>
                <Route path="/post"  component={Posts}/>
                <Redirect from="/" to="/post"/>
                </Switch>
               
            </div>
        );
    }
}

export default Blog;