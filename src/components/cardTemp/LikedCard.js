import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { VideoDataContext } from '../../context/DataContext';
import './Card.css'

const LikedCard = ({thumbnail, title, id}) => {

    const {handleWatchLater, watchLater } = useContext(VideoDataContext);

    const checkItem = (id) => watchLater.find(item=> item.id === id)

  return (
   <div className='card-container'>
      <img src={thumbnail} alt={title} />
      <div className='item-details'>
        <p>{title}</p>
        <NavLink to={`/${id}`}>Watch here</NavLink>
        <div className='btn-container'>
            <button disabled={checkItem(id)} onClick={()=>{handleWatchLater(id)}}>{checkItem(id) ? 'In-watched list' : 'Watch'}</button>
        </div>
      </div>
    </div>
  )
}

export default LikedCard
