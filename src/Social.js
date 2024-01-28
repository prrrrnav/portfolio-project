import React from 'react'
import svg2 from './adjust.svg'

const Social = (props) => {
    const mousehover = () => {
        let linkBoxJs = document.querySelector('.link-box')
        
        linkBoxJs.style.display="flex"
    }
    const mousehout = () => {
        let linkBoxJs = document.querySelector('.link-box')
        
        linkBoxJs.style.display="none"
    }
    
    return (
        <div>
            <div className='social-link-hrspace' >
                <img onMouseOver={mousehover} onMouseOut={mousehout} className='svg-socials'  src={svg2} ></img>
                <div  className='link-box'>{props.link}</div>
            </div>
            
        </div>
    )
}

export default Social
