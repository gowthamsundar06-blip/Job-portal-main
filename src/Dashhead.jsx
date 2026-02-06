import React from 'react'
import './Dashhead.css'
import searchicon from "./assets/searchicon.png";
import Msg from "./assets/Msg.png";
import notification from "./assets/notification.png";

import profilehead from "./assets/profilehead.png";

function Dashhead() {
  return (
    <div className='dashhead'>
    <div className='jobportal'>job portal</div>
    
    <div className='search'>
    <img className="searchicon" src={searchicon} alt="search icon" />
    <input  className="input" type="text" placeholder='Search for jobs and applicants' />
    </div>
    <div className='icon'>
        
        <img className="Msg" src={Msg} alt="Message" />
        <img className="notification" src={notification} alt="notification" />
        <img className="profilehead" src={profilehead} alt="profilehead" />
        
    </div>
    
    
    </div>
  )
}

export default Dashhead