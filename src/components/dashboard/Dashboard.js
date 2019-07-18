import React from 'react';
import PostList from "./PostList";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";


class Dashboard extends React.Component {
    render() {
        const {posts} = this.props;
        return (
            <div>
                <div className='row  '>
                    <div className='col-9 '><PostList posts={posts}/></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {posts: state.firestore.ordered.posts}
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts', orderBy:['createdAt','desc']}
    ])
)(Dashboard);
