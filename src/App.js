import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import LikedVideoPage from './pages/LikedVideoPage';
import WatchLaterPage from './pages/WatchLaterPage';
import IndividualVideoPage from './pages/IndividualVideoPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={< HomePage />}/>
        <Route path='/videos' element={< VideosPage />}/>
        <Route path='/likedvideos' element={< LikedVideoPage />}/>
        <Route path='/watchlater' element={< WatchLaterPage />}/>
        <Route path='/:videoId' element={< IndividualVideoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
