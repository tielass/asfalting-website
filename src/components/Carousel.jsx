import React, { useState } from 'react'
import '../style/Carousel.css'
import { images } from "../helpers/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carousel() {
  const [currImg, setCurrImg] = useState(0)

  return (
    <div className="container">
      <div className='carousel'>
        <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img })`}}>
          <div className="left"
          onClick={ () => {
              currImg > 0 && setCurrImg(currImg - 1)
            }
          }>
            <ArrowBackIosIcon/>
          </div>
          <div className="middle">
            <div className='middle-container'>
              <h1>{images[currImg].title}</h1>
              <p>{images[currImg].subtitle}</p>
            </div>
          </div>
          <div className="right"
          onClick={ () => {
            currImg < images.length - 1 && setCurrImg(currImg + 1)
            }
          }>
            <ArrowForwardIosIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
