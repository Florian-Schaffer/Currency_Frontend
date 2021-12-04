import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink,
    Prompt, useNavigate
} from "react-router-dom";
import loggedIn from "./loggedin";
import authUtility from "../authorizationUtility";

 const Header = ({loggedIn, getUserRoles, setCurrentRoles, onLogout})=>{
     const navigate = useNavigate();

     const onClick= () => {
         onLogout()
         setCurrentRoles([])
         navigate('/')
     }

    return (
        <div>
            <ul className="header">
                <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                {authUtility.handleAccess('user', getUserRoles) && <li><NavLink activeClassName='active' to='/user'>User</NavLink></li>}
                <li><NavLink activeClassName='active' to='/admin'>Admin</NavLink></li>
            </ul>
        </div>
    )
}


export default Header;