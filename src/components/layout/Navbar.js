import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar  = (props) => {
        return (
            <nav className="bg-primary navbar">
                <h1>
                <i class={props.icon}></i>
                   &nbsp; {props.title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
}

// // give the format for the props passed
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}


export default Navbar