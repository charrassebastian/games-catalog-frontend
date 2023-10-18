import { useState } from 'react';
import { Login } from '../Login/Login';
import Popup from '../Popup/popup'

export function Navbar({isLoggedIn}) {
    const [isOpen, setIsOpen] = useState(isLoggedIn);

    const closePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Juegos Serios</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                {!isLoggedIn ? <a className="nav-link" onClick={() => setIsOpen(true)}>Log in</a> : <a>Logout</a>}
                                <Popup isOpen={!isOpen}>
                                    <div className='loginPopUp'>
                                        <div className='closeLoginPopUp' onClick={closePopup}>X</div>
                                        <Login />
                                    </div>                                    
                                </Popup>                                
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}