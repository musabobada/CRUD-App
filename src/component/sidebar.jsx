import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ClassIcon from '@mui/icons-material/Class';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import Email from './email';


import "../scss/sidebar.scss"

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='top'>
                    <AutoStoriesIcon />Unlimited Learning
                </div>
                <div className='center'>
                    <ul>
                        <li>
                            <NavLink to='/dashboard' >
                                <DashboardIcon className='icon' /><span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/subjectTable" >
                                <MenuBookIcon /><span>Subjects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lessonTable" >
                                <LocalLibraryIcon /><span>Lessons</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/roomTable" >
                                <ClassIcon /><span>rooms</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sessionTable" >
                                <ClassIcon /><span>Sessions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/volunteerTable" >
                                <PersonIcon className='icon' /><span>Volunteers</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/studentTable" >
                                <PeopleIcon /><span>Student</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar" >
                                <CalendarMonthIcon /><span>Calendar</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <ul>
                        <li>
                            <NavLink to='/profile'>
                                <AccountBoxIcon />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>
                                <LogoutIcon />
                            </NavLink>
                        </li>
                        {/* <li>
                            <div className="msg">
                                <Email
                                    sendMail={this.sendMail}
                                />
                            </div >
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;

{/* <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Sidebar</span>
    </a>
    <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                    <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                    Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                    Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                    Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link text-white">
                    <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                    Customers
                </a>
            </li>
        </ul>
        <hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div> */}