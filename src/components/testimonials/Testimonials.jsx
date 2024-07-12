import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[

  {
   avatar: AVTR1,
  name: 'Gina Cruz',
  review: 'Launching a new startup is challenging, but Vishal made the web development part of it a breeze. They took the time to understand our brand and objectives, delivering a sleek, professional website that stands out in our industry. Their technical skills and creative flair are top-notch. We’ve received numerous compliments on our website, and it has been a key factor in our early success. Thank you, [Your Name]!'
  },
  
  {
   avatar: AVTR2,
  name: 'Tina Rew',
  review: 'Working with [Your Name] has been an absolute pleasure. They completely transformed our outdated website into a modern, user-friendly platform. Their attention to detail and commitment to delivering high-quality work on time exceeded our expectations. We’ve seen a significant increase in website traffic and customer engagement since the redesign. Highly recommend'
  },
  
  {
   avatar: AVTR3,
  name: 'Ravi Singh',
  review: 'Beautiful, functional site reflecting our mission. Dedication and attentiveness ensured success. Extremely happy with the outcome.'
  },
  
  {
   avatar: AVTR4,
  name: 'Marga fashion',
  review: 'this is reviewed by this person with there own words and appreaction so i am lucky and happy to gettignt hsi review and hope this will help me for increase my potentials'
  },
  
  ]
  

const Testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      pagination={{ clickable: true }}
       >
       {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
  
            <h5 className='client__namr'>{name}</h5>
            <small className='client__review'>
  
              {review}
            </small>
          </SwiperSlide>
  
          )
        })
       }
        


      </Swiper>

    </section>
  )
}

export default Testimonials