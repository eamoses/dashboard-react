import React, {Component} from 'react';
import {
    NavLink,
    Route,
    Switch
} from 'react-router-dom';
import menu from './Menu.css';
import Home from '../Home/Home'
import Greeting from '../Home/Greeting/Greeting'

class Menu extends Component {
    componentWillUnmount () {
        console.log('About UNMOUNT');
    }
    render() {
        return (
            <div>
                <div className="leftside-menu menu" id="menu">
                    <Greeting
                        nameVal={this.props.nameVal}
                        setNameState={this.props.setNameState}
                        greetingToggle={this.props.greetingToggle}
                        toggleName={this.props.toggleName}
                    />
                    <NavLink className="item" exact to="/" activeStyle={{ menu }}>home</NavLink>
                    <NavLink className="item" exact to="/settings" activeStyle={{ menu }}>settings</NavLink>
                    <NavLink className="item" exact to="/about" activeStyle={{ menu }}>about</NavLink>
                    <NavLink className="item" exact to="/contact" activeStyle={{ menu }}>contact</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => 
                            <Home {...props}
                                calendarHref={this.props.calendarHref}
                                addHref={this.props.addHref}
                            />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Menu;