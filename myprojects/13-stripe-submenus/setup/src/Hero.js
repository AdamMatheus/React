import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu}=useGlobalContext()
  return (
      <section className='hero' onMouseOver={closeSubmenu}>
        <div className="hero-center">
          <article className='hero-info'>
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi delectus reiciendis, odio fugit nihil quod beatae et enim sed.
            </p>
            <button className="btn">
              Start Now!
            </button>
          </article>
          <article className="hero-images">
            <img src={phoneImg}  className='phone-img' alt="phone" />
          </article>


        </div>
      </section>
  )
}

export default Hero 
