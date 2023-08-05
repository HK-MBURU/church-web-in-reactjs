import React from 'react'
import './video.css'
import hk from './hk.svg'
import { Avatar } from '@mui/material'

function Video({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='video'>
        <img src={image} alt="" />
        <div className="video__info">
            <Avatar className='video__avatar'
            alt={channel}
            src={channelImage}/>

        </div>
        <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
        </div>
    </div>
  )
}

export default Video