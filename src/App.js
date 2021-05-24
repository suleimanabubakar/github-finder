import axios from 'axios';
import React,{Component} from 'react';
import './App.css';
import  Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';


class  App extends Component {

  state = {
    users: [],
    loading: false
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

  render(){
    const {loading,users} = this.state
  return (
    <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
          <Search searchUser={this.searchUsers}/>
          <Users loading={loading} users={users} />
          </div>
    </div>
 
  );
  }
}

export default App;
