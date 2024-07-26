import React from 'react'
import './recommendedvideos.css';
import VideoCard from './VideoCard';
import A2 from './images/A2.webp'
import A22 from './images/A22.jpg'
import A6 from './images/A6.webp'
import A66 from './images/A66.jpg'
import A7 from './images/A7.webp'
import A77 from './images/A77.jpg'
import A8 from './images/A8.webp'
import A88 from './images/A88.jpg'
import A9 from './images/A9.webp'
import A99 from './images/A99.jpg'
import A10 from './images/A10.webp'
import A1010 from './images/A1010.jpg'
import A5 from './images/A5.webp'
import a55 from './images/a55.jpg'
import A11 from './images/A11.webp'
import A1111 from './images/A1111.jpg'
import A12 from './images/A12.webp'
import A13 from './images/A13.webp'
import A15 from './images/A15.webp'
import A155 from './images/A155.jpg'
import A16 from './images/A16.webp'
import A166 from './images/A166.jpg'





const RecommendedVideos = () => {
  return (
    <div className='recommendedvideos'>
      <h2>Recommended</h2>
      <div className="recommended_videos">
        <VideoCard
        title='Become a web Developer in 10 minutes ! 2023-2024'
        views='2M Views'
        channel='Hitesh Chaudary'
        timestamp='2 days ago'
        channelImage={A22}
        image={A2}
        />
        <VideoCard
        title='Complete Placement Preparation  Full Stack Web Development'
        views='3M Views'
        channel='Apna College'
        timestamp='12 days ago'
        channelImage={A66}
        image={A6}
        />
        <VideoCard
        title='Power of Python In Artificial Intelligence, Web-Development, Data-science!'
        views='10M Views'
        channel='Yash Coding'
        timestamp='10 days ago'
        channelImage={A77}
        image={A7}
        />
        <VideoCard
        title='My Complete Placement Journey | Rejections, Interview Experience, Learning'
        views='1k Views'
        channel='Aparna'
        timestamp='1 month ago'
        channelImage={A88}
        image={A8}
        />
        <VideoCard
        title='Atif Aslam: Pehli Dafa Song (Video) | Ileana D’Cruz | Latest Hindi Song 2017 | T-Series'
        views='2.5M Views'
        channel='T-Series'
        timestamp='1 years ago'
        channelImage={A99}
        image={A9}
        />
        <VideoCard
        title='Sajni (Lyrical Video): Arijit Singh, Ram Sampath | Laapataa Ladies | Aamir Khan Productions'
        views='270M Views'
        channel='T-Series'
        timestamp='3 months ago'
        channelImage={A1010}
        image={A10}
        />
        <VideoCard
        title='Morning Energy Yoga | 20 Minutes | All levels'
        views='14M Views'
        channel='Aashta'
        timestamp='11 months ago'
        channelImage={a55}
        image={A5}
        />
         <VideoCard
        title='Indian Tax System Explained | All you need to know | Easiest explanation Ever | Aaditya Iyengar CFA'
        views='5M Views'
        channel='Yogesh channel'
        timestamp='Just now'
        channelImage={A1111}
        image={A11}
        />
        <VideoCard
        title='How to Improve English Speaking for Interviews ? 5 Easy Tips'
        views='5M Views'
        channel='Apna College'
        timestamp='Just now'
        channelImage={A66}
        image={A12}
        />
        <VideoCard
        title='Into the fold: Advanced layouts | Wix Studio'
        views='2M Views'
        channel='Apna College'
        timestamp='Just now'
        channelImage={A66}
        image={A13}
        />
        <VideoCard
        title='Lecture 9: Complete SQL in 1 VIDEO'
        views='563k Views'
        channel='Love Babbar'
        timestamp='4 months ago'
        channelImage={A155}
        image={A15}
        />
        <VideoCard
        title='🚀 TypeScript Crash Course: Master the Essentials in One Video! Ignite Your Web Dev Journey Today! '
        views='5k Views'
        channel='Shreyans Coding'
        timestamp='8 months ago'
        channelImage={A166}
        image={A16}
        />
      </div>
    </div>
  )
}

export default RecommendedVideos;
