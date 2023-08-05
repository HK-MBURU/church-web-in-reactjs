import './App.css';
import Header from './components/Videos/Header';
import RecomendedVideos from './components/Videos/recomendedVideos/RecomendedVideos';
import Sidebar from './components/Videos/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      
      <Header/>
      <div className="app__page">
         <Sidebar/>
      <RecomendedVideos/>
      </div>
     
    </div>
  );
}

export default App;
