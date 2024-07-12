import React from 'react'
import './About.css'
import ME from '../../assets/3rd.jpeg'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

      <div className="about__me">

        <div className="about__me-image">
          <img src={ME} alt="About img" />
        </div>
      </div>

      <div className="about__content">

        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ years working</small>

          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>20+ Worldwide</small>

          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>7+ completed</small>

          </article>
        </div>

        <p>Enthusiastic undergraduate with a strong focus on 
Fullstack Developer and a passion for Information Technology.
 Demonstrates problem-solving and 
leadership skills while delivering innovative and 
efficient projects. Eager to explore opportunities 
and contribute to impactful projects in the 
technology sector. </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>

      </div>



    </section>
  )
}

export default About