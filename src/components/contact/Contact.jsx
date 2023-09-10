import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2vxdqcd', 'service_2vxdqcd', form.current, 'IajLqTVKIHdNMV6Fw')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>dev.web.manish@gmail.com</h5>
          <a href="mailto:dev.web.manish@gmail.com" target={'_blank'}>Send the Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>Dev_Web_Manish</h5>
          <a href="https://www.instagram.com/dev_web_manish/" target={'_blank'}>Send the Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>Manish Kumar</h5>
          <a href=" https://wa.me/+917282870518" target={'_blank'}>Send the Message</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref = {form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
