import { Avatar } from "@mui/material";
import React from "react";
import  './channelRow.css'
import { CheckCircleOutlineOutlined, Verified } from "@mui/icons-material";

function ChanelRow({
  image,
  channel,
  noOfVideos,
  description,
  verified,
  subs,
}) {
  return  <div className="channelRow">
    <Avatar className="channelRow__logo" alt={channel} src={image}/>
    <div className="channelRow__text">
        <h4>{channel} <span>{verified && <Verified/>}</span> </h4>
        <p>{subs} subscribers . {noOfVideos} videos</p>
        <p>{description}</p>
    </div>
  </div>;
}

export default ChanelRow;
