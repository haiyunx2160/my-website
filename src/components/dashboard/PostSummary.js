import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import {deletePost} from "../../actions/postActions";
import {connect} from "react-redux";



class PostSummary extends React.Component{
 state = {isSignedIn :!!this.props.auth.isEmpty}
    handleDelete =(id)=>{
        this.props.deletePost(id);
    };



    hidden = {
        display: 'none'
    };


    render() {

        console.log(this.state);
        const {post} = this.props;
        return (
            <div id='postSummary' className='card mt-2' key={post.id}>
                <div className='card-body'>
                    <Link to={'/posts/'+post.id}>
                        <span className='card-title'>{post.title}</span>
                    </Link>
                    <p>posted by {post.authorFirstName} {post.authorLastName}</p>
                    <small>{moment(post.createdAt.toDate()).calendar()}</small>
                    <button style={this.state.isSignedIn?this.hidden:null} onClick={()=>this.handleDelete(post.id)} className='btn-sm btn-danger float-right'>Delete</button>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps ={
    deletePost
};

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostSummary);
