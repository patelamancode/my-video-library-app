import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import { VideoDataContext } from '../context/DataContext';
import '../components/cardTemp/Card.css'

const IndividualVideoPage = () => {
    const {videoId} = useParams();
    const {videoData} = useContext(VideoDataContext)

    const video = videoData.filter((item) => item.id === +videoId)
    


  return (
    <div>
      {video.map(item =>
      <div className='card-container' key={item.id}>
        <img src={item.thumbnail} alt={item.title} />
        <div className='item-details'>
        <p>{item.title}</p>
        <NavLink to={item.url}>Watch</NavLink>
        <p><b>description :</b>{item.description}</p>
        <p><b>Duration :</b>{item.duration}</p>
        <div className='btn-container'>
            <button>Like</button>
            <button>Watch later</button>
        </div>
      </div>
      </div>
      )}
    </div>
  )
}

export default IndividualVideoPage
