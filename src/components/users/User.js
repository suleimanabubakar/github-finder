import React, { Component } from 'react'

class User extends Component {
     componentDidMount(){
        //  calling the getUser function this.props.match... used to capture the parameter passed after the url
         this.props.getUser(this.props.match.params.login)
     }


    render() {
        const {name,avatar_url,location,bio,blog,login,following,followers,public_repos,public_gists} = this.props.user;
        const {loading} = this.props
        return (
            <div>
               {name}
            </div>
        )
    }
}

export default User