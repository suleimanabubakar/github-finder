import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

const User = ({user,match,loading,repos,getRepos,getUser}) => {

    useEffect(() => {
        getUser(match.params.login)
        getRepos(match.params.login)

        // prevent warning appearing from react
        // eslint-disable-next-line

    },[]) //add [] to prevent the looping created

   


 
        const {name,avatar_url,html_url,company,location,bio,blog,login,following,followers,public_repos,public_gists,hirable} = user
        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to="/"><button className="btn btn-light">Back To Search</button></Link>
                Hirable: {''}
                {hirable ? (<i className="fas fa-check text-success" ></i>) : (<i className="fas fa-times-circle text-danger" ></i>)}

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{width:'150px'}} alt="" />
                        <p>{name}</p>
                    </div> 
                 
                    <div> 
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            {bio}
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark">Visit Github</a>

                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <h5>{login}</h5>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {location && (
                                <Fragment>
                                    <h5>{location}</h5>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <h5>{company}</h5>
                                </Fragment>
                            )}
                        </li>
                    </ul>

                </div>
                </div>

                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-dark">Public Repos: {public_repos}</div>
                    <div className="badge badge-light">Public Gists: {public_gists}</div>
                </div>

               <ul>
               <Repos repos={repos} />
               </ul>

            </Fragment>
        )
    }


export default User