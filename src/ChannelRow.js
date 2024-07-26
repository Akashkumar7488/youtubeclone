import React from 'react'
import { Avatar } from '@material-ui/core';
import './channelRow.css'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline'

const ChannelRow = ({image, channel, subs, verified, noofvideos, description}) => {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow_logo' alt={channel}  src={image}/>
      <div className="channelRow_text">
        <h4 className='font-bold'>{channel} {verified  && <VerifiedIcon/> }</h4>
        <p className='font-medium'>
            {subs} subscribers * {noofvideos} videos
        </p>
        <p className='font-medium'>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow;
