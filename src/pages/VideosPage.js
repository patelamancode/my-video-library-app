import React, { useContext } from 'react';
import { VideoDataContext } from '../context/DataContext';
import Card from '../components/cardTemp/Card';

const VideosPage = () => {

  const {videoData} = useContext(VideoDataContext);

  const styles = {
        margin:'20px 30px',
        display:'flex',
        justifyContent:'space-evenly'
    }

  return (
    <div>
      <h1>All Videos</h1>
      <div style={styles}>
        {videoData.map(item => 
          <Card {...item} key={item.id}/>
        )}
      </div>
    </div>
  )
}

export default VideosPage
