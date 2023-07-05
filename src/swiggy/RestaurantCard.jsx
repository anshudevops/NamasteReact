import React from 'react'
import './RestaurantCard.scss';

const styleCard={
  background: '#f0f0f0'
}
function RestaurantCard() {
  return (
    <div className='res-card' style={styleCard}>
        <h3>Meghna Foods</h3>

    </div>
  )
}

export default RestaurantCard