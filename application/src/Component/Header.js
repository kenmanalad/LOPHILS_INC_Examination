import React from 'react';
import '../static/Header.css';

function Header(){
    return(
        <div className='header'>
            <div className='left'>
                <h2>News Articles</h2>
                <input type='checkbox' className='upper-checkbox' id='upper-checkbox'/>
                <button className='publish'>Publish</button>
                <button className='delete'>Delete</button>
            </div>
            <div className='right'>
                <input type='search' className='search' id='search' placeholder='Search....'/>
            </div>
        </div>
    )
}
export default Header;