import React from 'react'
import './sidebar.css'
import SideBarRow from './SideBarRow'
import { ExpandMoreOutlined, History, Home, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, WatchLater, Whatshot } from '@mui/icons-material'

function Sidebar() {
  return (
    <div className='sidebar'>     
        
        <SideBarRow selected Icon={Home} title="Home"/>
        <SideBarRow  Icon={Whatshot} title="Trending"/>
        <SideBarRow  Icon={Subscriptions} title="Subscriptions"/>
        <hr />
        <SideBarRow  Icon={VideoLibrary} title="VideoLibrary"/>
        <SideBarRow  Icon={History} title="History"/>
        <SideBarRow  Icon={OndemandVideo} title="OndemandVideo"/>
        <SideBarRow  Icon={WatchLater} title="WatchLater"/>
        <SideBarRow  Icon={ThumbUpAltOutlined} title="ThumbUpAltOutlined"/>
        <SideBarRow  Icon={ExpandMoreOutlined} title="ExpandMoreOutlined"/>
        <hr />
        
        
    </div>
  )
}

export default Sidebar
