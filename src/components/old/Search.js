import React, { Component } from 'react'


class Search extends Component {

    state = {
        text: ''
    };

    onchange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onsubmit = e => {
        e.preventDefault()
        if (this.state.text ===  ''){
            this.props.setAlert('Please enter text','light')
        }else{
            this.props.searchUser(this.state.text);
            this.setState({text: ''});
        }
     
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit} >
                    <input type="text" onChange={this.onchange} name="text" placeholder="Search Users"  value={this.state.value} />
                    <input type="submit" value="Search"   className="btn btn-dark btn-block" />
                </form>
                {this.props.showClear == true && (
                <button className="btn btn-light btn-block" onClick={this.props.clearUser} >Clear </button> 
                )}
            </div>
        )
    }
}


export default Search