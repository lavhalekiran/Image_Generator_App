import React from 'react'

const ImageCard = ({image}) => {
  return (
    <img className="w-full rounded shadow-sm" src={image} alt=''/>
  )
}

export default ImageCard