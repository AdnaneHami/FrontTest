import React  from 'react';
import {Link} from 'react-router-dom';
import Post from './Post';
import './Post.css';
 
class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.getSearchTerm = this.getSearchTerm.bind(this);
      }

    getSearchTerm(){
        this.props.searchKeyword(this.myRef.current.value);
        //console.log(this.myRef.current.value);
    }  

    showPosts = () => {
        const posts = this.props.posts;
        if (posts.length === 0) return null;        
        return (
            <div classname="post_list_item"><React.Fragment>
                {Object.keys(posts).slice(0,16).map(post =>(
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />
 
                ) )}
            </React.Fragment></div>
        )
    }
 
    render() { 
        return ( 
                <div classname="post_list">
                 <div class="container">
                   <div class="center">  
                    <input type="text" placeholder="search posts"  className="prompt" 
                    ref={this.myRef}
                    value ={this.props.term} 
                    onChange={this.getSearchTerm}  
                    />
                    <button ><Link to={'/create'}>add new post</Link></button>
                  </div>  
                 </div>      
                    {this.showPosts() }
                </div>
 
 
         );
    }
}
 
export default Listing;

