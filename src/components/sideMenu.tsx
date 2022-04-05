import React from 'react'
// import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import logo from "../../src/logo.png";

export default function SideMenu() {
  return (<>
    <div className="sideBar">
      <div className="sideBarHeader">
        <img src={logo} alt="Company Logo" />
      </div>
      <hr />
         <div className="sideBarContent">
        <ul>
          <li className='items'>
            <i className="fa fa-home" aria-hidden="true"></i>
            <a href="/">Overview</a>
          </li>
          <li className='items'>
            <i className="fa fa-sitemap" aria-hidden="true"></i>
            <a href="/">Organizations</a>
            <i className="fa fa-chevron-up upIcon" aria-hidden="true"></i>
          </li>
          <li className='items'>
            <i className="fa fa-users" aria-hidden="true"></i>
            <a href="/">Groups</a>
          </li>
          <li className='items'>
            <i className="fa fa-flask" aria-hidden="true"></i>
            <a href="/">Labs</a>
            <i className="fa fa-chevron-up upIcon" aria-hidden="true"></i>
          </li>
          <li className='items'>
            <i className="fa fa-sign-in" aria-hidden="true"></i>
            <a href="/">Tests</a>
          </li>
          <li className='items'>
            <i className="fa fa-flask" aria-hidden="true"></i>
            <a href="/">Cards</a>
            <i className="fa fa-chevron-up upIcon" aria-hidden="true"></i>
          </li>
          <li className='items items2'>
            <a href="/">Abbott</a>
          </li>
          <li className='items items2'>
            <a href="/">Accula</a>
          </li>
                    <li className='items items2'>
            <a href="/">CareStart</a>
          </li>
                    <li className='items items2 '>
            <a href="/">Capheld</a>
          </li> 
                    <li className='items items2'>
            <a href="/">Cue</a>
          </li>
                    <li className='items items2'>
            <a href="/">Quidel</a>
          </li>
                    <li className='items items2'>
            <a href="/">Visby</a>
          </li>
                    <li className='items items2'>
            <i className="fa fa-sign-in" aria-hidden="true"></i>
            <a href="/">Exports</a>
          </li>
        </ul>
      </div>
      <div className="sideBarFooter">
        <ul>
          <li className="items">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
            <a href="/">Support</a>
          </li>
          <li className="items">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <a href="/">Log Out</a>
          </li>
        </ul>
      </div>

  </div>
    </>
  )
}
