import React from 'react'
import Carousel from '../components/Carousel'
import GalleryCards from '../components/GalleryCards'
import '../style/Projects.css'

function Projects() {
  return (
    <div>
      <section className='projectsHeader'>
        <div className="showcase">
          <h1>Gallery of our<span className='thin'> projects</span></h1>
          <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry.</p>
        </div>
      </section>
      <div className="filter--city--box">
        <ul className="filter--list">
          <li className="filter--list--item">
            <button>All</button>
          </li>
          <li className="filter--list--item">
            <button>Sofia</button>
          </li>
          <li className="filter--list--item">
            <button>Pernik</button>
          </li>
          <li className="filter--list--item">
            <button>Breznik</button>
          </li>
        </ul>
      </div>
      <GalleryCards />
      <Carousel />
    </div>
  )
}

export default Projects
