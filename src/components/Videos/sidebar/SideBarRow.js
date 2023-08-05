import React from 'react'
import './sideBarRow.css'
import { Home } from '@mui/icons-material'

function SideBarRow({selected,Icon, title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"} `}>
        <Icon className={"sidebarRow__icon"} />
         <h2 className='sidebarRow__title'>{title} </h2></div>
  )
}

export default SideBarRow