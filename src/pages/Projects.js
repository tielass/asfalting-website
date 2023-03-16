import React, {useState, useEffect} from 'react'
import Carousel from '../components/Carousel'
import GalleryCard from '../components/GalleryCard'
import TagButton from '../components/TagButton'
import { galleryImages } from '../helpers/ImageGallery'
import '../style/Projects.css'
import '../style/GalleryCards.css'

function Projects() {

  const [tag, setTag] = useState('All')
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(
    () => {
      tag === 'All' ? setFilteredImages(galleryImages) : setFilteredImages( galleryImages.filter( image => image.tag === tag ))
    },
    [tag]
  )

  return (
    <div className='projects--container--main'>
      <section className='projectsHeader'>
        <div className="showcase">
          <h1>Gallery of our<span className='thin'> projects</span></h1>
          <p>Stanley Roads is a Queensland based company with a company heritage of over 50 years experience and expertise in the road construction industry.</p>
        </div>
      </section>
      <div className="filter--city--box" handleSetTag={ setTag }>
        <ul className="filter--list">
          <li className="filter--list--item">
            <TagButton name='All' handleSetTag={ setTag }/>
          </li>
          <li className="filter--list--item">
            <TagButton name='Sofia' handleSetTag={ setTag }/>
          </li>
          <li className="filter--list--item">
            <TagButton name='Pernik' handleSetTag={ setTag }/>
          </li>
          <li className="filter--list--item">
            <TagButton name='Breznik' handleSetTag={ setTag }/>
          </li>
          <li className="filter--list--item">
            <TagButton name='Batanovtsi' handleSetTag={ setTag }/>
          </li>
        </ul>
      </div>
      <div className='gallery--grid'>
        { filteredImages.map((image) => {
          return (
            <GalleryCard key={image.id} title={image.title} img={image.img} />
          );
        }) }
    </div>
      <Carousel />
    </div>
  )
}

export default Projects
