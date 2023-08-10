import React from "react";
import "./searchPage.css";
import { TuneOutlined } from "@mui/icons-material";
import ChanelRow from "./ChanelRow";
import hk from "./hk.jpg";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChanelRow
        image={hk}
        channel="HK MBURU CODE"
        verified
        noOfVideos={29}
        description="Coding master in Kenya"
        subs="600K"
      />
      <hr />
      <VideoRow
        title="Become a Web Developer in 10 minutes"
        views="2.3m views"
        timestamp="3 days ago"
        channelImage={hk}
        channel="HK MBURU"
        image={hk}
        description="Trending video right now"
        subs="600K"
      />

      <VideoRow
        title="Become a Web Developer in 10 minutes"
        views="2.3m views"
        timestamp="3 days ago"
        channelImage={hk}
        channel="HK MBURU"
        image={hk}
        description="Trending video right now"
        subs="600K"
      />

      <VideoRow
        title="Become a Web Developer in 10 minutes"
        views="2.3m views"
        timestamp="3 days ago"
        channelImage={hk}
        channel="HK MBURU"
        image={hk}
        description="Trending video right now"
        subs="600K"
      />

      <VideoRow
        title="Become a Web Developer in 10 minutes"
        views="2.3m views"
        timestamp="3 days ago"
        channelImage={hk}
        channel="HK MBURU"
        image={hk}
        description="Trending video right now"
        subs="600K"
      />

      <VideoRow
        title="Become a Web Developer in 10 minutes"
        views="2.3m views"
        timestamp="3 days ago"
        channelImage={hk}
        channel="HK MBURU"
        image={hk}
        description="Trending video right now"  
        subs="600K"
      />
    </div>
  );
}

export default SearchPage;
