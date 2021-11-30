import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from '../Register'
import Welcome from '../Welcome'
import Login from '../Login'
import Home from '../Home'
class Main extends Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/login" component={Login}/>
                <Route path="/register"component={Register}/>
                <Route path="/home" component={Home}/>
            </Switch>
        )
    }
}

export default Main;