import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Portfolios from "./Portfolios";
import Contact from "./Contact";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Dashboard from "./dashboard/Dashboard";
import PostDetail from "./dashboard/PostDetail";
import CreatePost from "./dashboard/CreatePost";
import '../css/main.css';


class App extends React.Component{

    render() {
        return (<div>
            <BrowserRouter>
            <Header/>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/portfolio' component={Portfolios}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/signin' component={SignIn}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/posts' component={Dashboard}/>
                    <Route exact path='/create' component={CreatePost}/>
                    <Route exact path='/posts/:id' component={PostDetail}/>
                </Switch>
            </div>
            <Footer/>
            </BrowserRouter>
        </div>)
    }

}

export default App;
