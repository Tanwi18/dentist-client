import React from 'react';
import './Sidebar.css';
import { faPeopleGroup, faGear, faCalendarCheck, faFileMedical, faGripHorizontal,faSignOut,faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className='pt-3'>
            <ul>
            <li >
                  <Link to="/" style={{textDecorationLine:'none'}} className="text-white">
                  {/* <FontAwesomeIcon icon={faGear} className="icon"></FontAwesomeIcon> */}
                   <h3><span>Home</span> </h3>
                  </Link>
                </li>
                <li >
                  <Link to="/dashboard/appointment" style={{textDecorationLine:'none'}} className="text-white">
                  <div >
                   <FontAwesomeIcon icon={faGripHorizontal} className="icon"></FontAwesomeIcon>
                    <span>Dashboard</span>
                   </div>
                  </Link>
                </li>
                <li>
                    <Link to="/appointment" style={{textDecorationLine:'none'}} className="text-white">
                    <FontAwesomeIcon icon={faCalendarCheck} className="icon"></FontAwesomeIcon>
                    <span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patients" style={{textDecorationLine:'none'}} className="text-white">
                    <FontAwesomeIcon icon={faPeopleGroup} className="icon"></FontAwesomeIcon>
                    <span>Patients</span></Link>
                </li>
                <li >
                    <FontAwesomeIcon icon={faFileMedical} className="icon" ></FontAwesomeIcon>
                    <span>Prescriptions</span>
                </li>
                <li>
                    <Link to="/addDoctor" style={{textDecorationLine:'none'}} className="text-white">
                    <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
                    <span>Add Doctor</span> 
                    </Link>
                </li>
                <li >
                  <Link to="/doctor/setting" style={{textDecorationLine:'none'}} className="text-white">
                  <FontAwesomeIcon icon={faGear} className="icon"></FontAwesomeIcon>
                   <span>Settings</span> 
                  </Link>
                </li>
               
            </ul>
           </div>
           <li className=' d-flex logout'>
                    <FontAwesomeIcon icon={faSignOut} className="icon"></FontAwesomeIcon>
                    <span>Log Out</span>
                </li>
                
        </div>
    );
};

export default Sidebar;