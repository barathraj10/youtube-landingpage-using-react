import React from 'react';
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddFill } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Header(){
    return(
        <div className='header'>
            <div className='col-3 logo'>
                <h1><span><FaYoutube /></span>YouTube</h1>
            </div>
            <div className='col-8 search'>
                <input type='text' placeholder='Search'></input><button><CiSearch /></button>
            </div>
            <div className='col-1 util'>
                <a href='#'><RiVideoAddFill /></a>
                <a href='#'><CiBellOn /></a>
                <a href='#'><FaUserCircle /></a>
            </div>
        </div>
    )
}
export default Header;