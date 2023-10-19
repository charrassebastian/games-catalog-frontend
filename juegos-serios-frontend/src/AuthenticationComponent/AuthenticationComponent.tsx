import { useState } from 'react'
import { Login } from '../Login/Login'
import { baseUrl } from '../constants/url'
import axios from 'axios'

export const AuthenticationComponent = () => {
    const [isLoginOpened, setIsLoginOpened] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))

    const showLoginError = () => {
        // using a custom popup could improve this
        alert("An error occurred when trying to log in")
        console.log("An error occurred when trying to log in")
    }

    const handleLoginClose = () => {
        setIsLoginOpened(false);
    }

    const handleOpenLogin = () => {
        setIsLoginOpened(true);
    }

    const handleLoginSubmit = async (username: string, password: string) => {
        try {
            const { data } = await axios.post(baseUrl + 'login', { username, password })
            if (data?.token?.length) {
                localStorage.setItem('token', data.token)
                setIsLoginOpened(false)
                // to prevent issues, reload the page
                window.location.reload()
            } else {
                showLoginError();
            }
        } catch {
            showLoginError();
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        // to prevent issues, reload the page
        window.location.reload()
    }

    return (
        <>
            <div className="position-relavite">
                {isLoggedIn ? <button className="btn btn-light log-btn position-absolute m-3 top-0 end-0" onClick={handleLogout}>Logout</button> : <button className="btn btn-light log-btn position-absolute m-3 top-0 end-0" onClick={handleOpenLogin}>Login</button>}
            </div>

            {isLoginOpened
                ? <Login handleClose={handleLoginClose} handleLogin={handleLoginSubmit} />
                : null}
        </>
    )
}