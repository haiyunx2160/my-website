import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {signUp} from "../../actions/authActions";

class SignUp extends React.Component {
    state = {
        email:'',
        password: '',
        firstName:'',
        lastName:''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] :e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    render() {
        const {auth, authError} = this.props;

        if(auth.uid) return <Redirect to={'/'} />;

        return <div className='signin-container'>
            <div className='singin-form'>
                <h5>Sign Up</h5>
                <form onSubmit={this.handleSubmit}>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange} className='form-control' id='email' type="email"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input onChange={this.handleChange} className='form-control' id='password' type="password"/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstName'>First Name</label>
                        <input onChange={this.handleChange} className='form-control' id='firstName' type="text" required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input onChange={this.handleChange} className='form-control' id='lastName' type="text" required/>
                    </div>
                    <button className='btn btn-info signin-btn'>Sign Up</button>
                    <div>
                        {authError?<small>{authError}</small>:null}
                    </div>
                </form>
            </div>
        </div>
    }
}

const mapStateToProps =(state)=>{
   return  {
       auth:state.firebase.auth,
       authError: state.auth.authError
   }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        signUp: (newUser)=>dispatch(signUp(newUser))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
