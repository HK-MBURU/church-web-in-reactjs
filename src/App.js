import {  BrowserRouter, Route,  Router,  Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Videos/Header";
import RecomendedVideos from "./components/Videos/recomendedVideos/RecomendedVideos";
import Sidebar from "./components/Videos/sidebar/Sidebar";
import Homepage from "./Homepage";
import Search from "./search/Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/search/:serchTerm" element={<Search/> }/>
        <Route path="/" element={<Homepage/>}/>       
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
