import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    name: 'Kevin Lopez',
    review: 'Ismael was a real pleasure to work with and I look forward to working with him again. He’s definitely the kind of developer you can trust with a project from start to finish'
  },
  {
    name: 'Zachery Kalivas',
    review: 'Working with Ismael was better than expected and I had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials