import React from 'react'
import './Footer.css'
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vishal Barnwal</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Us</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Vishalbarnwal01"><RiFacebookCircleFill/></a>
        <a href="https://www.instagram.com/vishalbarnwal001/"><FaInstagram/></a>
        <a href="https://twitter.com/vishalbarnwal58"><BsTwitterX/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Vishal Barnwal. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer