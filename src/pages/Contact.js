import React from 'react'
import Form from '../components/Form'
import Info from '../components/Info'
import '../style/Contact.css'

function Contact() {
  return (
    <div className='contacts'>
      <div className='contacts--container'>
        <Form />
        <Info />
      </div>
    </div>
  )
}

export default Contact
