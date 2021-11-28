import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink,
    Prompt
} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <ul className="header">
                <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="selected" to="/user">User</NavLink></li>
                <li><NavLink activeClassName="selected" to="/admin">Admin</NavLink></li>
                <li><NavLink activeClassName="selected" to="/currency">Currency Converter</NavLink></li>
            </ul>
        </div>
    );
}