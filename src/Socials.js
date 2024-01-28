import React from 'react'

import Social from './Social'

const Socials = () => {
    return (
        <div className='socials' >
            <h2>Socials</h2>
            <div>
                <div className='social1' >
                    <Social link="https://www.google.com" />
                </div>
                <div className='sociallinks-horizontal' >
                    <Social link="https://www.Coursera.com" />
                    <Social link="https://www.Youtube.com" />
                </div>
            </div>

        </div>
    )
}

export default Socials
