import React, { Component } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Chart from './chart';
import "../scss/dashboard.scss"
import Profile from './show/profile';
import VolunteerTable from './show/volunteerTable';
import Sidebar from './sidebar';
import Adminbar from "./adminbar";
import Example from './eemail';


// console.log(this.props.volunteers)
class Dashboard extends Component {
    state = {}
    render() {
        return (
            < div className='main' >
                {/* {console.log(this.props.volunteers)} */}
                <Sidebar />
                <div className='content'>
                    <Adminbar />
                    <hr />
                    <div className="center">
                        <Chart
                            volunteers={this.props.volunteers}
                        />
                    </div>
                    <div className="bottom">
                        <Example/>
                    </div>
                </div>
            </div >
        );
    }
}

export default Dashboard;