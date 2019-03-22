import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link id="logo" to="/"> Home </Link></li>
                <li><Link id="favs" to="/favorites"> <i className="fa fa-heart"></i></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;