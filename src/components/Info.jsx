import React from 'react'
import '../style/Info.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function Info() {
  return (
    <div className="info--wrapper">
      <div className='info--container'>
        <div className="info--text">
          <h1>Info</h1>
          <p>Find out more about us</p>
        </div>
        <div className="info--row">
          <MailOutlineIcon />
          <p className='info--paragraph'>asfalting@gmail.com</p>
        </div>
        <div className="info--row">
          <LocalPhoneOutlinedIcon />
          <p className='info--paragraph'>(+359) 0886 738 218</p>
        </div>
        <div className="info--row">
          <LocationOnOutlinedIcon />
          <p className='info--paragraph'>Panayot Hitov 9, Pernik Bulgaria</p>
        </div>
        <div className="info--row">
          <AccessTimeOutlinedIcon />
          <p className='info--paragraph'>09:00 - 18:00</p>
        </div>
      </div>
    </div>
  )
}

export default Info
