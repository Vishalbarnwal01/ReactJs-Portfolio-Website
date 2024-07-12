import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com/in/vishalbarnwal" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Vishalbarnwal01" target='_blank'><FaGithub/></a>
        <a href="https://www.instagram.com/vishalbarnwal001/" target='_blank'><FaInstagram/></a>
        <a href="https://twitter.com/vishalbarnwal58" target='_blank'></a>




    </div>
  )
}

export default HeaderSocials