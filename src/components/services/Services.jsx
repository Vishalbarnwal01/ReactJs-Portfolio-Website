import React from 'react'
import './Services.css'
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Animated UI.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Banners.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Ready To Code UI.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Style Document \ Guide.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>User Research & Interviews.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Website Design.</p>
            </li>

          </ul>
        </article>

        {/* ENd of ui and  ux  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>E-commerce Development.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>WordPress Website Development.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Shopify Website development.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Static Web Services.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>PHP Development.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p> Website Maintenance.</p>
            </li>

          </ul>
        </article>

        {/* End of web development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Content Research.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>SEO.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Video Editing.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Social Media Handling.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Posters, Logo, Flyers Designing service.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Thumbnails designing.</p>
            </li>

          </ul>
        </article>
        {/* end of the content creation */}
      </div>
    </section>
  )
}

export default Services