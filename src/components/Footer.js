import React from 'react';
import {FaGithub} from 'react-icons/fa';


const Footer = () => {

    /*const style = {
        position: 'absolute',
        bottom: '0',
        color: 'white',
        backgroundColor: '#292826',
        width: '100%'
    };*/

    return (
        <div className="footer"
        >
            <div className="footer_contents">
                <div className="footer-copyright text-center py-3">© 2019 Copyright By Aaron Xiao With:
                    <a href="https://reactjs.org/"> React</a>
                    <a href="https://github.com/haiyunx2160/portfolio" className="btn-warning btn ml-5">
                        <FaGithub/> To Github</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
