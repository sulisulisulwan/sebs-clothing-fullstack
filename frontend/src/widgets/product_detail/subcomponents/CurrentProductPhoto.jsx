import React from 'react';

const CurrentProductPhoto = ({ parentClassName, currentProduct }) => {
  console.log(currentProduct)
  let photoUrl = currentProduct !== null ? currentProduct.styles[currentProduct.defaultStyleIndex].photos[0].url : '';

  return (
    <div className={`${parentClassName}-photo-container`}>
      <img className={`${parentClassName}-photo-large`} src={photoUrl}></img>
    </div>
  )
}

export default CurrentProductPhoto;