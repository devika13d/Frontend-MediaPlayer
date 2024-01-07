import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='footer d-flex align-items-center justify-content-evenly'>
          <div className='website' style={{ width: '400px' }}>
            <h5>   <i class="fa-solid fa-video text-warning me-2"></i>Media Player</h5>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis dicta neque nobis, quidem molestiae natus tempora vero vel, cumque quae quos culpa esse atque magnam voluptate non eos! Sint!</p>
          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
            <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
            <Link to='/watch' style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
          </div>
          <div className='guides d-flex flex-column ms-5 '>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</Link>
            <Link to='https://react-bootstrap.github.io/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Boots Watch</Link>
          </div>
          <div className='contactus ms-5'>
            <h3>Contact Us</h3>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter your email' />
              <button className='btn btn-warning ms-2'>Subscribe</button>
            </div>
            <div className=' d-flex justify-content-evenly align-items-center mt-2'>
              <Link><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link ><i class="fa-brands fa-facebook fa-2x"></i></Link>
            </div>
          </div>
        </div>

      </div>
      <p className='mt-5 text-center'>Copyright &copy;2023 mediaplayer Bulit with React</p>
    </>
  )
}

export default Footer