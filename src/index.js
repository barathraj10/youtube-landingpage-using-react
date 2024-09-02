import SideNav from "./sidenav";
import Header from "./header";
import Content from "./content";
import React from 'react';
import ReactDOM from 'react-dom';

function Final(){
  return(
    <div>
      <Header/>
      <SideNav/>
      <Content/>
    </div>
  )
}

ReactDOM.render(<Final/>,document.getElementById('root'));