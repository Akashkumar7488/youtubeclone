import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import { Avatar } from '@material-ui/core'
import y1 from './images/y1.png'
import p1 from './images/p1.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [inputSearch, setInputSearch] = useState('');


  return (
    <div className='header' >
        <div className="header_left ml-5 flex gap-4 cursor-pointer">
      <MenuIcon />
      <Link to='/'>
      <img
      className='header_logo  ' src={y1} alt="youtube" />
      </Link>
      </div>
      <div className="header_input rounded-full">
      <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder='  Search here ' className='' />
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className='header_inputButton'/>
      </Link>
      
       </div>
      {/* <div className="header_voice">
      <KeyboardVoiceIcon/>
      </div> */}
      <div className="header_icons">
      <VideoCallIcon className='header_icon'/>
      <AppsIcon className='header_icon'/>
      <NotificationsIcon className='header_icon'/>
      <Avatar alt='Akash' src={p1}/>
      </div>
    </div>
  )
}

export default Header;
