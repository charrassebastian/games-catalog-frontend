import { useState } from 'react'
import Popup from '../Popup/popup';
import { Login } from '../Login/Login';

export const AuthenticationComponent = () => {
    const isLoggedIn = false;
    const [isLoginOpened, setIsLoginOpened] = useState(false)

    const handleLoginClose = () => {
        setIsLoginOpened(false);
    }

    const handleOpenLogin = () => {
        setIsLoginOpened(true);
    }

    const handleLoginSubmit= () => {
        setIsLoginOpened(false);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <>
            <div className="position-relavite">
                { isLoggedIn ? <button className="btn btn-light log-btn position-absolute m-3 top-0 end-0" onClick={handleLogout}>Logout</button> : <button className="btn btn-light log-btn position-absolute m-3 top-0 end-0" onClick={handleOpenLogin}>Login</button>}
            </div>

            { isLoginOpened
            ?   <Login handleClose={handleLoginClose} handleLogin={handleLoginSubmit} />
            :    null}
            {/* <Popup isOpen={isLoginOpened}>
                <Login handleClose={handleLoginClose} handleLogin={handleLoginSubmit} />
            </Popup> */}
        </>
    )
}