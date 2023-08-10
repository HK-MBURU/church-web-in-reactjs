import React from "react";
import Sidebar from "../components/Videos/sidebar/Sidebar";
import RecomendedVideos from "../components/Videos/recomendedVideos/RecomendedVideos";
import SearchPage from "./SearchPage";


function Search() {
  return (
    <div className="app__page">
      <Sidebar />
      <SearchPage />
    </div>
  );
}

export default Search;
