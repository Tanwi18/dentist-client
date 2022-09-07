
import './App.css';
import Home from './components/Home/Home';
import React, { useContext, createContext, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

// import {
//    BrowserRouter as Router,
//   Switch,
//   Route,
//    Link,
//    Redirect,
//    useHistory,
//   useLocation
//  } from "react-router-dom";
// import { Nav, PrivateRoute } from '_components';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext({});
function App(props) {
const [loggedInUser, setLoggedInUser]=useState({});

  return (
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <BrowserRouter>
      <Route  path="/" element={<Home />}>
        <Route path='/home' element={<Home />} />
        </Route>
        <Route path="/appointment" element={<Appointment></Appointment>}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        {/* <PrivateRoute path="/dashboard/appointment" element={<Dashboard></Dashboard>}>
        </PrivateRoute> */}
        <Route path="/addDoctor" element={<AddDoctor></AddDoctor>}>
        </Route>
         {/* <PrivateRoute path="/protected">
              <Dashboard></Dashboard>
            </PrivateRoute>  */}
  </BrowserRouter>
</UserContext.Provider>


  // <Router>
  //   <div>
  //     <Switch>
  //       <Route path="/public">
          
  //       </Route>
  //       <Route path="/login">
          
  //       </Route>
  //       <PrivateRoute path="/protected">
          
  //       </PrivateRoute>
  //     </Switch>
  //   </div>
  // </Router>
  );
}

export default App;
