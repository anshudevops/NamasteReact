import React from 'react'
import RestaurantCard from './RestaurantCard';
import './Body.scss';
function Body() {
  return (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
          <RestaurantCard/>
        </div>
        
    </div>
  )
}

export default Body