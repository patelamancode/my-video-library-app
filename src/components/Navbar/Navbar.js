import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { VideoDataContext } from '../../context/DataContext';

const Navbar = () => {

  const {likedItem, watchLater} = useContext(VideoDataContext)

   return (
    <>
      <div className='navbar'>
        <div>
            <h1>Video Library</h1>
        </div>
        <div>
            <NavLink to='/' className='navlinks'>Home</NavLink>
            <NavLink to='/videos'  className='navlinks'>Videos</NavLink>
            <NavLink to='/likedvideos' className='navlinks'>Liked Videos:<span>({likedItem.length})</span></NavLink>
            <NavLink to='/watchlater'  className='navlinks'>Watch Later:<span>({watchLater.length})</span></NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
