import React from 'react';
import './App.css';
import { SiYoutubeshorts } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { LiaYoutubeSquare } from "react-icons/lia";
import { MdSubscriptions } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

function SideNav(){
  return(
    <div className='sidenav'>
      
      <a id='menu-icon' href='#'><CiMenuBurger /></a>
      <a href='#'><GoHomeFill /></a>
      <a href='#'><SiYoutubeshorts /></a>
      <a href='#'><MdSubscriptions /></a>
      <a href='#'><LiaYoutubeSquare /></a>
    </div>
  )
}

export default SideNav;