import React, { useContext } from 'react'
import { VideoDataContext } from '../context/DataContext';
import LikedCard from '../components/cardTemp/LikedCard';

const LikedVideoPage = () => {
 
  const { likedItem } = useContext(VideoDataContext);


  return (
    <div>
      <h1>Liked Videos</h1>
      <div style={{display:'flex', marginBottom:'30px'}}>
        {likedItem.length > 0  ? likedItem.map(item=><LikedCard {...item} />) : <p>Sorry no liked item found</p>}
      </div>
    </div>
  )
}

export default LikedVideoPage
