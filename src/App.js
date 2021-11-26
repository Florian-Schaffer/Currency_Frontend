import React, { useState } from 'react';
import './App.css';
import Home from "./components/home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";
import user from "./components/user";
import admin from "./components/admin";
import Login from "./components/login";
import loggedIn from "./components/loggedin";
//import "bootstrap/dist/css/bootstrap/.min.css";
import NoMatch from "./components/NoMatch";
import facade from "./apiFacade";

function App({ facade }) {
  const [LoggedIn, setLoggedIn] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out");

    };

    const login = (user, pass) => {
      facade.login(user, pass, setLoggedIn, setErrorMessage);
    };

    return (
      <div>
        <Header facade = {facade} />
        <Routes>
          <Route exact path ="/" element={<Home
          /*loggedIn={loggedIn}
            errorMessage={errorMessage}
            login={login}
            logout ={logout} 
            setLoggedIn = {setLoggedIn}
            setErrorMessage = {setErrorMessage}*/
            />} />


          <Route exact path = "/user" element ={user} />

          <Route exact path="/admin" element={admin}/>

          <Route path ="*" element={<NoMatch/>}/>


        </Routes>
      </div>
    );  
}

export default App;