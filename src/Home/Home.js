import React, {Component} from 'react';
import './Home.css';
import Music from './Music/Music';
import TodaysDate from './TodaysDate/TodaysDate'
import Todo from './Todo/Todo';
import Time from './Time/Time';
import Weather from './Weather/Weather';

class Home extends Component {
    componentWillUnmount () {
        console.log('About UNMOUNT');
    }
    render() {
        let lsName;
        if (localStorage.names) {
            lsName = localStorage.getItem('names').replace(/"/g,"");
        }
        return (
            <div className="main-grid">
                <div className="block one">
                    <Time />
                    <p>{lsName}</p>
                </div>
  
                <div className="block two">
                    <Music />
                </div>
  
                <div className="block three">
                    <Weather />
                </div>
  
                <div className="block four">
                    <TodaysDate 
                        calendarHref={this.props.calendarHref}
                        addHref={this.props.addHref}
                    />
                </div>
  
                <div className="block five">
                    <Todo />
                </div>
            </div>
        )
    }
}

export default Home;