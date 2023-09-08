import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Chris Hudak</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current={location.pathname === '/'}>Home</Link>                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Projects">Projects</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
