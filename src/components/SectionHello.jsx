import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/SectionHello.scss'

const SectionHello = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section id="section-hello">
      <div className="inner">
        <div className="img_wrap" data-aos="fade-right">
          <img src="/img/tocobo_intro_2021.gif" alt="Tocobo Intro" />
        </div>
        <div className="tit_wrap" data-aos="fade-left">
          <p className="txt_1">1 Hello❤️ We are TOCOBO!</p>
          <h2 className="con_tit">FollowYour Intuition</h2>
          <p className="txt">
            토코보는 본질을 중시하며, 직관력을 바탕으로 만든 브랜드입니다. <br />
            당신의 직감이 YES를 외친다면, 고민없이 토코보를 선택하세요. <br />
            우리의 인사이트로 탄탄하게 기획된 제품을 보내드립니다.
          </p>
          <a href="#" className="con_btn">MEET TOCOBO</a>
        </div>
      </div>
    </section>
  )
}

export default SectionHello
