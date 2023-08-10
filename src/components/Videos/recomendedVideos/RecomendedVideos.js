import React from "react";
import "./recomendedVideos.css";
import Video from "./Video";
import hk from "./hk.svg";

function RecomendedVideos() {
  return (
    <div className="recomendedVideos">
      <h2>Recomended Videos</h2>
      <div className="recomendedVideos__videos">
        <Video
          title="Become a Web Developer in 10 minutes"
          views="2.3m views"
          timestamp="3 days ago"
          channelImage={hk}
          channel="HK MBURU"
          image={hk}
        />

        <Video
          title="Become a Web Developer in 10 minutes"
          views="2.3m views"
          timestamp="3 days ago"
          channelImage={hk}
          channel="HK MBURU"
          image={hk}
        />

        <Video
          title="Become a Web Developer in 10 minutes"
          views="2.3m views"
          timestamp="3 days ago"
          channelImage={hk}
          channel="HK MBURU"
          image={hk}
        />

        <Video
          title="Become a Web Developer in 10 minutes"
          views="2.3m views"
          timestamp="3 days ago"
          channelImage={hk}
          channel="HK MBURU"
          image={hk}
        />
        <Video
            title="Become a Web Developer in 10 minutes"
            views="2.3m views"
            timestamp="3 days ago"
            channelImage={hk}
            channel="HK MBURU"
            image={hk}
            />
      </div>
    </div>
  );
}

export default RecomendedVideos;
