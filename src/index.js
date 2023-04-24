import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { VideoDataContext, VideoDataProvider } from './context/DataContext';
export {VideoDataContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoDataProvider>
      <Router>
      <App />
    </Router>
    </VideoDataProvider>
  </React.StrictMode>
);



reportWebVitals();
