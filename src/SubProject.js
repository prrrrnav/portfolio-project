import React from 'react'
import { useState } from 'react'
import './SubProject.css'



export const SubProject = (props) => {
    let [url,setUrl] =useState('')
    const handleclick = () =>{
        if(url!==''){
        window.location.href = url
    }
    }
    const setUrlAndHandleClick = () => {
        setUrl(props.link);
        handleclick();
      };
  


  return (
    <div className='tag-spacing'>
        <h4>{props.name}</h4>
        <div>Technology used - {props.tech}</div>
       <button  onClick={setUrlAndHandleClick}>Explore</button>
      
    </div>
  )
}
