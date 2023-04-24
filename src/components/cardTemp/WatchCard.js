import React from 'react';
import { NavLink } from 'react-router-dom';
// import { VideoDataContext } from '../../context/DataContext';
import './Card.css'

const WatchCard = ({thumbnail, title, id}) => {

    // const {handleWatchLater} = useContext(VideoDataContext);
  
    return (
        <div className='card-container'>
        <img src={thumbnail} alt={title} />
        <div className='item-details'>
            <p>{title}</p>
            <NavLink to={`/${id}`}>Watch here</NavLink>
            
        </div>
        </div>
  )
}

export default WatchCard
