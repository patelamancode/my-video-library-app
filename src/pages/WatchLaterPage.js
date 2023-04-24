import React, { useContext } from 'react'
import WatchCard from '../components/cardTemp/WatchCard';
import { VideoDataContext } from '../context/DataContext'


const WatchLaterPage = () => {

  const { watchLater} = useContext(VideoDataContext);

  return (
    <div>
      <h1>Watch Later</h1>
      <div style={{display:'flex', marginBottom:'30px'}}>
        {watchLater.length > 0  ? watchLater.map(item=><WatchCard {...item} />) : <p>Sorry no item found</p>}
      </div>
    </div>
  )
}

export default WatchLaterPage
