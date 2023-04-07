import React from 'react'
import Banner from '../assets/banner.png'
import Whoarewe from '../assets/whoarewe02.png'
import Whatwedo from '../assets/whoarewe01.png'
import Projects from '../assets/projects02.png'
// import Rectangle from '../assets/rectangle.png'
import '../style/Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homepageContainer'>
      <img src={ Banner } alt="bannerImage" className='bannerImage' />
      {/* About Us */}
      <div className="aboutUs">
        <div className="topSide">
          <img src={ Whoarewe } alt="asfaltingAbout" className='topImg'/>
          <div className='textBox'>
            <h1>WHO ARE WE?</h1>
            <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry. Dedicated to enhancing the road construction industry in Australia by providing the highest quality products and services.</p>
          </div>
        </div>
        <div className="bottomSide">
          <img src={ Whatwedo } alt="asfaltingAbout" className='topImg'/>
          <div className='textBox'>
            <h1>WHAT WE DO?</h1>
            <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry. Dedicated to enhancing the road construction industry in Australia by providing the highest quality products and services.</p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="projects">
        <h1> <span className='our'> OUR </span><span className='projectsTitle'>PROJECTS</span></h1>
        <div className="projects--container">
          <div className='projectsImage'>
            <img src={ Projects } alt="projects" />
          </div>
          <div className="projectsInfo">
            <div className='infoBox'>
              <h1>PROJECTS</h1>
              <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry. Dedicat</p>
            </div>
            <Link to="/projects">EXPLORE</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
