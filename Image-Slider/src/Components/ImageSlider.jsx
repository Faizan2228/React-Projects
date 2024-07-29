import React, { useState } from 'react'
import '../App.css'

export const ImageSlider = () => {

    const [current, setCurrent] = useState(0)

    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ];

      const handlePrevious = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
      }

      const handleForward = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
      }

  return (
    <div className='slide-container'>
        <div className='prev-btn' onClick={handlePrevious}>prev</div>
        <div className='forward-btn' onClick={handleForward}>Forward</div>
        {images.map((imgs,index) => (

            current === index && (
                <div className='image-box' key={imgs}>
                    <img src={imgs} alt="Images" width={640} height={400} />
                </div>
            )

        ))}
    </div>
  )
}
