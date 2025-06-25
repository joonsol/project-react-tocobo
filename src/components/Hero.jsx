import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import heroData from '../data/heroData'
import './styles/Hero.scss'

const Hero = () => {
  return (
    <section id="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="swiper hero_slider"
        navigation={{
          nextEl: '.arr_next',
          prevEl: '.arr_prev'
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction'
        }}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id} className={slide.className}>
            <div className="inner">
              <div className="tit_wrap">
                <h2
                  className="con_tit large_tit"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="txt l_txt">{slide.description}</p>
                <a href="#" className={`con_btn ${slide.btnColor}`}>
                  {slide.btnText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Hero navigation buttons + pagination */}
        <div className="hero_nav">
          <div className="arr_prev"></div>
          <div className="swiper-pagination swiper-pagination-fraction"></div>
          <div className="arr_next"></div>
        </div>
      </Swiper>
    </section>
  )
}

export default Hero
