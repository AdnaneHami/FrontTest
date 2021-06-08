import React, { useRef} from 'react';
 
class EditPost extends React.Component {
    titleRef = React.createRef();
    contentRef = React.createRef();
 
    editPost = (e) => {
        e.preventDefault();
        const post = {
            title: this.titleRef.current.value,
            body: this.props.post.body,
            id: this.props.post.id 
        }
        this.props.editPost(post);
    }
 
    loadForm = () => {
        if (!this.props.post) return null;
        const {title} = this.props.post;
 
        return (    
            <form onSubmit={this.editPost} className="col-md-10">
                <legend className="text-center">Edit Post</legend>
 
                <div className="form-group">
                    <label>Title for the Post:</label>
                    <input type="text" ref={this.titleRef} className="form-control" defaultValue={title} />
                </div>
                <button type="submit" className="btn btn-primary" >Save changes</button>
            </form>
        );
    }
 
 
    render() {
        return ( 
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>            
         );
    }
}
 
export default EditPost;