import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { galleryImages } from '../helpers/ImageGallery'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import "../style/SingleProjectPage.css"

function SingleProjectPage() {

  const { id } = useParams()
  const image = galleryImages.find((img) => img.id === id);

  return (
    <div className='single--page--wrapper'>
      <div className="single--page--container">
        <div className="single--page--header">
          <Link className='single--page--link' to='/projects'>
            <ArrowCircleLeftOutlinedIcon className='svg'/>
          </Link>
          <h2 className='single--page--title'>{ image.title }</h2>
        </div>
        <p className='project--description'>{image.description}</p>
        <div className='single--page--grid'>
          {image.img.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={image.title} className='single--page--img'/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleProjectPage
