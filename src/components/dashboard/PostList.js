import React from 'react';
import PostSummary from "./PostSummary";




class PostList extends React.Component{

    render() {
        const {posts} = this.props;
        return (
            <div className='container mt-5' >

                {posts && posts.map(post=>{
                    return (
                        <div>
                            <PostSummary post={post} key={post.id} />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default PostList;
