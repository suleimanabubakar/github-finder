import React, { useState } from 'react'


const Search = (props) => {

    const [text,setText] = useState()

    onchange = (e) => {
        setText(e.target.value)
    }

    const   onsubmit = e => {
        e.preventDefault()
        if (text ===  ''){
            props.setAlert('Please enter text','light')
        }else{
            props.searchUser(text);
           setText('')
        }
     
        
    }

  
        return (
            <div>
                <form onSubmit={onsubmit} >
                    <input type="text" onChange={onchange} name="text" placeholder="Search Users"  value={text} />
                    <input type="submit" value="Search"   className="btn btn-dark btn-block" />
                </form>
                {props.showClear === true && (
                <button className="btn btn-light btn-block" onClick={props.clearUser} >Clear </button> 
                )}
            </div>
        )
    }



export default Search