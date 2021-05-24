import React  from 'react'
import PropTypes from 'prop-types';

const UserItem = props => {
  
        const {login,avatar_url,html_url} = props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url}  className="rounded-img" style={{width:'60px'}} />
                <h3>{login.toLowerCase()}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
    
}


UserItem.prototype = {
    user:PropTypes.object.isRequired,
}



export default UserItem