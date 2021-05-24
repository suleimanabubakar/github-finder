import React from 'react'
import PropTypes from 'prop-types'


const Navbar  = (props) => {
        return (
            <nav className="bg-primary navbar">
                <h1>
                <i class={props.icon}></i>
                   &nbsp; {props.title}
                </h1>
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