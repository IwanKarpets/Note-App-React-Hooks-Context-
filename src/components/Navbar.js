import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
            <ul className="navbar-nav">
                <li className="nav-item">
                     <NavLink 
                     className="nav-link"
                     to="/"
                     exact
                     >Home</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink 
                     className="nav-link"
                     to="/about"
                     exact
                     >About</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Home
