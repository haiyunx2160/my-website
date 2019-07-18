import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from '../actions/authActions';
import {FaBath, FaUserCircle} from "react-icons/fa";


const Header = (props) => {

    const {auth} = props;
    const profile = props.profile;
const isSignedIn = !!auth.uid;
    const hidden = {
        display: 'none'
    };

    return (
        <div id='header'>
            <nav className="navbar navbar-expand-md sticky-top">

                <Link to='/' className="navbar-brand border-b">Home</Link>
                <button className='navbar-toggler bg-warning'
                        data-toggle='collapse'
                        data-target='#collapse_target1'>
                    <span className='navbar-toggler-icon' style={{color: 'black'}}><FaBath/></span>
                </button>
                <div className="collapse navbar-collapse" id="collapse_target1">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to='/portfolio' className="nav-link border-b">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/posts' className="nav-link border-b">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/create' className="nav-link border-b" style={isSignedIn ? null : hidden}>New
                                Post</Link>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" style={{marginLeft: '40%'}} id="nav2">
                    <ul className='nav navbar-nav navbar-right'>
                        <li style={isSignedIn ? null : hidden}>
                            <h3><FaUserCircle/>{profile.initials}</h3>
                        </li>
                        <li className="nav-item" style={isSignedIn ? hidden : null}>
                            <Link to='/signin' className="nav-link border-b">Sign in</Link>
                        </li>
                        <li className="nav-item" style={isSignedIn ? hidden : null}>
                            <Link to='/signup' className="nav-link border-b">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <a href='#' onClick={props.signOut} style={isSignedIn ? null : hidden}
                               className="nav-link border-b">Sign out</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link border-b">Contact me</Link>
                        </li>
                    </ul>
                </div>


            </nav>
        </div>

    )

};

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);



