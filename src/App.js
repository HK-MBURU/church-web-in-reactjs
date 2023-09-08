import {  BrowserRouter, Route,  Router,  Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Videos/Header";
import RecomendedVideos from "./components/Videos/recomendedVideos/RecomendedVideos";
import Sidebar from "./components/Videos/sidebar/Sidebar";
import Homepage from "./Homepage";
import Search from "./search/Search";
import Signup from "./components/signup/Signup";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      {/* <Header/> */}
      
      <Routes>  
      {/* <Route path="/search/:serchTerm" element={<Header/> }/> */}
        
        <Route path="/search/:serchTerm" element={<Search/> }/>
        <Route path="/" element={<Homepage/>}/>  
        <Route path="/signup" element={<Signup/>}/>     
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
