import React from 'react'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import '../style/Projects.css'

function Projects() {
  return (
    <div>
      <div className='projectsHeader'>
        <h1>Gallery of our<span className='thin'> projects</span></h1>
        <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry.</p>
      </div>
      <Cards />
      <Carousel />
    </div>
  )
}

export default Projects
