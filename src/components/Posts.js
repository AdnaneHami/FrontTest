import React   from 'react';
import Listing from './Listing';
import './Post.css';
import './Router.js';
 
class Posts extends React.Component {
    state = {  };
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchResults : []   
        };
        this.searchHandler = this.searchHandler.bind(this);
      }
    searchHandler (searchTerm){
        this.setState({searchTerm :{searchTerm}});
        //console.log(searchTerm);
        if (searchTerm !== '') {
            const newPost = this.props.posts.filter((post)=>{
                return Object.values(post).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            this.setState({searchResults : newPost});
        } else {
            return this.setState({searchResults : this.props.posts});
        }
        
    }  

    render() { 
        return ( 
            <form className="col-md-10">
                {/* <legend className="text-center">Post Listing Page</legend> */}
                <Listing 
                    posts={this.state.searchTerm.length <1 ? this.props.posts : this.state.searchResults} 
                    term={this.searchTerm}
                    searchKeyword={this.searchHandler}
                    deletePost={this.props.deletePost} 
                />
            </form>
         );
    }
}
 
export default Posts;