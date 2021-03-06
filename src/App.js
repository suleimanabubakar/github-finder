import axios from 'axios';
import React,{useState, Fragment} from 'react';
import './App.css';
import Alert from './components/layout/Alert';
import  Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User';

import GithubState from './context/github/GithubState'


const  App = () => {


  const [users,setUsers] = useState([])
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])
  const [loading,setLoading] = useState(false)
  const [alert,setAlert] = useState(null)


  // async componentDidMount(){

  //   this.setState({loading:true});
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({loading:false,users:res.data})
    
  // }


   const searchUsers =  async text => {
    setLoading(true)
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items)
    setLoading(false)
   }

   const getUser = async username => {
    setLoading(true)
    
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUser(res.data)
    setLoading(false)
   }

   
   const getRepos = async username => {
    setLoading(true)
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setRepos(res.data)
    setLoading(false)
   }

  const  showAlert =(msg,type) => {
      setAlert({msg:msg,type:type})
      setTimeout(() => {
        setAlert(null)
      }, 5000);
   }


   const clearUsers = () => {
     setUsers('')
     setLoading(false)
  }





  return (
    <GithubState>
    <Router>
    <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/" render={props=>(
             <Fragment>
              <Search searchUser={searchUsers} clearUser={clearUsers} setAlert={showAlert} showClear={users.length > 0 ? true : false} />
              <Users loading={loading} users={users} />
             </Fragment>
            )}>
            </Route>
            <Route path="/about" component={About} ></Route>
            <Route exact path="/user/:login" render={props=>(
              <User getRepos={getRepos} repos={repos}  {...props} getUser={getUser} user={user} loading={loading} />
            )}></Route>
          </Switch>
          
          </div>
    </div>
    </Router>
    </GithubState>
  );
  }


export default App;
