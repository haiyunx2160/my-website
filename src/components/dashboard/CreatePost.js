import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../../actions/postActions";
import {Redirect} from 'react-router-dom';

class CreatePost extends React.Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.history.push('/posts');
    };

    render() {
        const {auth} =this.props;
        if (!auth.uid) return <Redirect to='/signin' />;
        return <div className='create-post'>
            <h5>New Post</h5>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input onChange={this.handleChange}
                           className='form-control'
                           id='title'
                           required
                           type="text"/>
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <textarea onChange={this.handleChange}
                              className='form-control'
                              id='content'
                              rows='10'
                              required
                    />
                </div>
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {auth: state.firebase.auth}
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
