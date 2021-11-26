import React, { useEffect, useState } from "react";
import LogIn from "./login";

function Home({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
    return (
        <div>
            <h1>Home</h1>
            {!loggedIn ? (
                <LogIn facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
            ) : (
                <div>
                    <p><button onClick={logout}>Log Out</button></p>
                    <p>Role: {facade.getUserRoles()}</p>
                </div>
            )}
        </div>
    );
}
export default Home;