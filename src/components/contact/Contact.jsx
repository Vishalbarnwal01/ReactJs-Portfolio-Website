import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0ynvcd', 'template_zazka2o', form.current,'MViWfZo_QvCQEIP-W')

    e.target.reset()
      
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kumarvishal121v@gmail.com</h5>
            <a href="mailto:kumarvishal121v@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Vishalbarnwal001</h5>
            <a href="https://www.instagram.com/vishalbarnwal001/" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8709891552</h5>
            <a href="https://wa.me/918709891552?text=Hello_Vishal" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows={"7"} placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact