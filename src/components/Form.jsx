import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import '../style/Form.css'

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hu7w363', 'template_a2ff4eb', form.current, 'CfOrMmS_-3xan4S9E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

  return (
    <div className="form-wrapper">
      <div className='form--container'>
        <form ref={form} onSubmit={sendEmail} className='form--controll'>
          <h1 className='form--header'>Get in Touch</h1>
          <p className='form--text'>Feel free to drop us a line below!</p>
          <input className='form--input' type="text" name='user_name' placeholder='Name'required/>
          <input className='form--input' type="text" name='user_email' placeholder='Email'/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your message...'></textarea>
          <button className='btn--primary' type='submit' >SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Form
