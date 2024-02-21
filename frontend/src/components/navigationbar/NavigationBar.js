import './NavigationBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaUsersSlash } from "react-icons/fa";
function NavigationBar(){
	
	const activeLink = {
		fontSize:"1.1rem",
		color:"#BEADFA"
	}
	const inactiveLink = {
		size:"1.5rem",
		color : "black"
	}
	
	return(
		<div>
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/addemployee">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0pOtPr2pJaVh8IQydnFsLga5rXrwvkceEljQyflf8w&s"></img>
    </NavLink>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fonts">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/employees" style={({isActive})=>
          isActive ? activeLink : inactiveLink}>
          <FaUsers className='icons'/>
          Employees</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/removedemployees" style={({isActive})=>
          isActive ? activeLink : inactiveLink}>
          <FaUsersSlash className='icons'/>
          RemovedEmployees</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
		</div>
		
	);
}
export default NavigationBar;