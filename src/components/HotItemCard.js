import React from 'react'
import "../styles/hotItemcard.css"
const HotItemCard = ({image,index,name,price}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index+1} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard