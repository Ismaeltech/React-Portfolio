import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

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

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sketching & Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interface architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dynamic prototype</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Graphic interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design review</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI guidelines and kit</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive web design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PSD to HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MVP Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cybersecurity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessibility </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Landing Pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactive Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Case Studies</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services