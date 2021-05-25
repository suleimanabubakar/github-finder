import React  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = props => {
  
        const {login,avatar_url,html_url} = props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url}  className="rounded-img" style={{width:'60px'}} />
                <h3>{login.toLowerCase()}</h3>
                <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
    
}


UserItem.prototype = {
    user:PropTypes.object.isRequired,
}



export default UserItem