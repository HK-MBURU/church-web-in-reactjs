import React from "react";
import Sidebar from "./components/Videos/sidebar/Sidebar";
import RecomendedVideos from "./components/Videos/recomendedVideos/RecomendedVideos";


function Homepage() {
  return (
    <div className="app__page">
      <Sidebar />
      <RecomendedVideos />
    </div>
  );
}

export default Homepage;
