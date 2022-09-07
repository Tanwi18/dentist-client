import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto ">
              <Link to="/home" style={{textDecorationLine:'none'}}>
              <li class="nav-item">
                <a class="nav-link mx-3" aria-current="page" href="#">Home</a>
              </li>
              </Link>
              {/* <li class="nav-item">
                <a class="nav-link mx-3" href="#">About</a>
              </li> */}
              <Link to="/appointment" style={{textDecorationLine:'none'}}>
                <li class="nav-item">
                  <a class="nav-link mx-3" href="#">Appointment</a>
                </li>
              </Link>
              <Link to="/dashboard/appointment" style={{textDecorationLine:'none'}}>
                <li class="nav-item">
                  <a class="nav-link mx-3" href="#">Dashboard</a>
                </li>
              </Link>
                 
              <li class="nav-item " >
                <a class="nav-link mx-3 " href="#reviews">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3 text-white" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3 text-white" href="#contact">Contact us</a>
              </li>
              <Link to="/login">
              <li class="nav-item">
               <button className='btn btn-primary pl-3'>Login</button>
               {/* {
                 loggedInUser?<button className='btn btn-primary pl-3'>Login</button>:<button className='btn btn-primary pl-3'>Login</button>;
               } */}
              </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;