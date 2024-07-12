import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pt1.png'
import IMG2 from '../../assets/pt2.png'
import IMG3 from '../../assets/pt3.png'
import IMG4 from '../../assets/pt4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'COffee Shop Landing Page',
    github: 'https://github.com/Vishalbarnwal01/Octanet_Task1?tab=readme-ov-file',
    demo: 'https://vishalbarnwal01.github.io/Octanet_Task1/#shop'
    },
    
    {
    id:2,
    image:IMG2,
    title:'Portfolio Landing Page',
    github: 'https://github.com/Vishalbarnwal01/Portfolio-Landing-Page',
    demo: 'https://www.vishalbarnwal.epizy.com/?i=1'
    },
    
    {
    id:3,
    image:IMG3,
    title:'Book-Store Ecommerce Website',
    github: 'https://github.com/Vishalbarnwal01/E-commerce-book-store',
    demo: 'https://github.com/Vishalbarnwal01/E-commerce-book-store'
    },
    
    {
    id:4,
    image:IMG4,
    title:'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/Vishalbarnwal01',
    demo: 'https://www.codesoftyt.free.nf/'
    },
    
    // {
    // id:5,
    // image:IMG5,
    // title:'Figma dashboard UI kit for data design web apps',
    // github: 'https://github.com',
    // demo: 'https://dribbble.com'
    // },
    
    // {
    // id:6,
    // image:IMG6,
    // title:'Figma dashboard UI kit for data design web apps',
    // github: 'https://github.com',
    // demo: 'https://dribbble.com'
    // },
    
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, github, demo,title}) => {

            return(
              <article key={id} className="portfolio__item">

              <div className="portfolio__item-image">
                <img src={image} alt={title} />
    
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
              </div>
            </article>
            )

          })
        }

        
      </div>

    </section>
  )
}

export default Portfolio