import React, {useReducer} from 'react'
import {axios} from 'axios'  
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {SEARCH_USER,SET_ALERT,SET_LOADING,REMOVE_ALERT,GET_REPOS,GET_USER} from '../types'

const GithubState  = props => {
    const initialState =    {
        users: [],
        user: {},
        repos: [],
        loading:false,
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState)

    // search user

    // get user

    // get repos

    // clear users

    // set loading

    return <GithubContext.Provider 
    
    value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
    }}
    
    >

          

            {props.children}

         </GithubContext.Provider>

}

export default GithubState