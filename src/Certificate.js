import React from 'react'
import MySvg from "./link.svg";

const Certificate = (props) => {
  return (
    <div className='element'>
        <div className='name-issuer-vrspace'>
        <h5>{props.certName}</h5>
        <p>{props.issuer}.{props.timeOfAchievment}</p>
        </div>

        <img className='svg' style={{ fill: 'blue' }} src={MySvg}></img>

        
    </div>
  )
}

export default Certificate
