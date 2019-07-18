import React from 'react';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import moment from "moment";
import {Link} from "react-router-dom";


const PostDetail = (props) => {
    const {post} = props;

    if (post) {

        return (
            <div className='container'>
                <article>
                    <Link to={'/posts'} className='badge'>Back to Posts List</Link>
                    <h5 className='debug-center'>{post.title}</h5>
                    <p>{post.content}</p>
                    <hr></hr>
                    <p className='float-right'><small>Posted by: {post.authorFirstName} {post.authorLastName} {moment(post.createdAt.toDate()).calendar()}</small></p>
                </article>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps)=>{
   const id = ownProps.match.params.id;
   const posts =state.firestore.data.posts;
   const post = posts? posts[id] : null;

   return {post: post};
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostDetail);
