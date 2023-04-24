import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css'
import { VideoDataContext } from '../../context/DataContext';

const Card = (Video) => {
  const { handleLike, handleWatchLater, likedItem, watchLater } = useContext(VideoDataContext)
  const { id, title, thumbnail} = Video;

  const checkItem = (id,data) => data.find(item=> item.id === id)

  return (
    <div className='card-container'>
      <img src={thumbnail} alt={title} />
      <div className='item-details'>
        <p>{title}</p>
        <NavLink to={`/${id}`}>Watch here</NavLink>
        <div className='btn-container'>
            <button disabled={checkItem(id,likedItem)} onClick={()=>{handleLike(id)}}>{checkItem(id,likedItem) ? 'Liked' : 'Like'}</button>
            <button disabled={checkItem(id,watchLater)} onClick={()=>{handleWatchLater(id)}}>{checkItem(id,watchLater) ? 'Watched' : 'Watch'}</button>
        </div>
      </div>
    </div>
  )
}

export default Card
