import React from 'react'

const Connect = () => {
  return (
    <div className='connect-box'>   
        <h2>Connect</h2>
        <div className='connect-partition'>
            <div className=' part1 form-box'>
                <form>
                    <input className='input-box' placeholder='Name'></input>
                    <input className='input-box' placeholder='Email'></input>
                    <input className='input-box' placeholder='Message'></input>
                    <button className='submit' type='submit' >submit</button>
                </form>
            </div>
            <div className='part2'>
              <p className='part2-p'>Connect with me at d.officialpranav@gmail.com</p>
            </div>

        </div>
    </div>
  )
}

export default Connect
