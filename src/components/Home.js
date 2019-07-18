import React from 'react';
import {FaReact} from "react-icons/fa";

class Home extends React.Component {


    state = {color1: 0, color2: 0, color3: 0, intervalId: 0};

    getNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    changeColor = () => {
        this.setState({
            color1: this.getNumber(0, 225),
            color2: this.getNumber(0, 225),
            color3: this.getNumber(0, 225),
        });
    };


    componentDidMount() {
        let intervalId = setInterval(()=>{
                this.changeColor();
                this.setState({intervalId: intervalId})
        }
            ,500
        );
    }

    componentWillUnmount() {
       clearInterval(this.state.intervalId)
    }
colors = ()=>{
   return  {color: `rgb(
                    ${this.state.color1}, 
                    ${this.state.color2}, 
                    ${this.state.color3})`
};}

    render() {
        return (
            <div id='wrap'>
                <div className='container'>
                    <h1 style={{
                         marginTop: '3%', color: 'white'
                    }}>Welcome to My Website!<FaReact style={this.colors()}/> </h1>
                </div>
            </div>
        )
    }
}

export default Home;

