import React from 'react'
import './searchpage.css'
import { TuneOutlined } from '@material-ui/icons';
import ChannelRow from './ChannelRow';
import A155 from './images/A155.jpg'
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchpage'>
      <div className="searchPage_filter">
        <TuneOutlined/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
      image={A155}
      channel='Love Babbar'
      verified
      subs='50k'
      noofvideos={400}
      description='your code was smooth and easy to understand'
      />
      <hr/>
      <VideoRow 
      views='1M'
     subs='600K' 
     description='Awesome' 
     timestamp='59 secons ago' 
     channel='Love Babbar' 
     title='Lets learn complete SQL ' 
     image=''
      />
    </div>
  )
}

export default SearchPage;
