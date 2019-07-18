import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {signIn} from '../../actions/authActions'


class SignIn extends React.Component {
    state = {
        email:'',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
       this.props.signIn(this.state)
    };

    render() {
        const {auth} = this.props;
        const {authError} = this.props;

        if(auth.uid) return <Redirect to={'/'} />;
        return <div className='signin-container'>
            <div className='singin-form'>
                <h5>Sign In</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               id='email'
                               required
                               type="email" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               id='password'
                               required
                               type="password"/>
                    </div>
                    <button className='btn btn-info signin-btn'>Login</button>
                    <div>
                        {authError? <small>{authError}</small>:null}
                    </div>
                </form>
            </div>

        </div>
    }
}

const mapStateToProps = (state)=>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps =(dispatch)=>{
    return {
        signIn:(creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
