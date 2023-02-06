import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        Unlimited Education
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addvolunteer">Sign as Volunteer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addstudent">Sign as Student</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/studentTable">Student Table</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/classes">Classes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addsubject">Add Subject</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/subjectTable">Subject Table</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
