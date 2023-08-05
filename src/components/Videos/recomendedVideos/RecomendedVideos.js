import React from 'react'
import './recomendedVideos.css'
import Video from './Video'


function RecomendedVideos() {
  return (
    <div className='recomendedVideos'>
        <h2>Recomended Videos</h2>
        <div className="recomendedVideos__videos">
            <Video/>
        </div>
    </div>
  )
}

export default RecomendedVideos