import React from 'react'
import Certificate from './Certificate'

const Certificates = () => {
  return (
    <div className='certificate-box' >
      <h2>Certificates</h2>
      <div  className='certificate-container'>
        <Certificate certName="Start the UX Design Process: Empathize, Define, and Ideate" issuer="Coursera " timeOfAchievment=" March 2022"  />
        <Certificate certName="Foundations of User Experience (UX) Design " issuer="Coursera " timeOfAchievment=" March 2022"  />
        <Certificate certName="Artificial Intelligence" issuer="IIT Kanpur " timeOfAchievment=" Jul 2023"  />

      </div>
    </div>
  )
}

export default Certificates
// https://www.coursera.org/account/accomplishments/certificate/XASFEPKR85WP