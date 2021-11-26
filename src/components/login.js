import {usestate} from "react";

export default function Login({ facade, setLoggedIn, setErrorMessage })

{
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const doLogin = (evt) =>
    {
        evt.preventDefault();
        facade.login(loginCredentials.username, loginCredentials.password, setLoggedIn, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <h2>Log In</h2>
            <form onChange={onChange} >
                <input placeholder="Username" id="username" />
                <input placeholder="Password" id="password" />
                <button onClick={doLogin}>Log In</button>
            </form>
        </div>
    )
}