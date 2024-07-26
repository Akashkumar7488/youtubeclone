import React from 'react'
import './VideoRow.css'
import A15 from './images/A15.webp'

const VideoRow = ({views, subs, description, timestamp, channel, title, image}) => {
  return (
    <div className='videoRow'>
      <img src={A15} alt="A1" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className='videoRow_headline'>
            {channel} * <span className='videoRow_subsNumber'>{subs}</span> Subscribers {views} * {timestamp}
        </p>
        <p className='videoRow_description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow;
