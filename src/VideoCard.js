import React from 'react'
import './VideoCard.css'
import Avatar  from '@material-ui/core/Avatar';


const VideoCard = ({image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className='videoCard'>
      <img className='videoCard_thumbnail rounded' src={image} alt="p1" />
      <div className="videoCard_info">
       <Avatar className='videoCard_avatar mr-2' alt={channel} src={channelImage}/>
       <div className="videoCard_text">
        <h4 className='font-bold'>{title}</h4>
        <p>{channel}</p>
        <p>
            {views} * {timestamp} 
        </p>
       </div>

      </div>
    </div>
  )
}

export default VideoCard;
