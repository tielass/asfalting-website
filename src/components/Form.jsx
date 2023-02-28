import React from 'react'
import '../style/Form.css'

function Form() {
  return (
    <div className="form-wrapper">
      <div className='form--container'>
        <form className='form--controll'>
          <h1 className='form--header'>Get in Touch</h1>
          <p className='form--text'>Feel free to drop us a line below!</p>
          <input className='form--input' type="text" name='name' placeholder='Name'required/>
          <input className='form--input' type="text" name='email' placeholder='Email'/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your message...'></textarea>
          <button className='btn--primary' type='submit' >SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Form
