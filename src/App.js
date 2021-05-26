import axios from 'axios';
import React,{Component, Fragment} from 'react';
import './App.css';
import Alert from './components/layout/Alert';
import  Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User';


class  App extends Component {

  state = {
    users: [],
    user: {},
    repos:[],
    loading: false,
    alert: null
  }

  // async componentDidMount(){

  //   this.setState({loading:true});
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({loading:false,users:res.data})
    
  // }


   searchUsers =  async text => {
    this.setState({loading:true});
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({loading:false,users:res.data.items})
   }

   getUser = async username => {
    this.setState({loading:true});
    
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({loading:false,user:res.data})
   }

   
   getRepos = async username => {
    this.setState({loading:true});
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({loading:false,repos:res.data})
   }

   setAlert =(msg,type) => {
      this.setState({alert:{msg:msg,type:type}})
      setTimeout(() => {
        this.setState({alert:null})
      }, 5000);
   }


   clearUsers = () => this.setState({users:[],loading:false})



  render(){
    const {loading,users,user,repos} = this.state
  return (
    <Router>
    <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path="/" render={props=>(
             <Fragment>
              <Search searchUser={this.searchUsers} clearUser={this.clearUsers} setAlert={this.setAlert} showClear={users.length > 0 ? true : false} />
              <Users loading={loading} users={users} />
             </Fragment>
            )}>
            </Route>
            <Route path="/about" component={About} ></Route>
            <Route exact path="/user/:login" render={props=>(
              <User getRepos={this.getRepos} repos={repos}  {...props} getUser={this.getUser} user={user} loading={this.loading} />
            )}></Route>
          </Switch>
          
          </div>
    </div>
    </Router>
 
  );
  }
}

export default App;
