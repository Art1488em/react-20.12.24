import React from 'react'
import s from './Hero.module.scss'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <>
    <section className={s.hero}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.box}>
                    <h1><span>Dive</span> Into The Depths Of   <span>Virtual Reality</span></h1> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  <br />
sed do eiusmod tempor incididunt ut labore et dolore <br />
nisl tincidunt eget. Lectus mauris eros in vitae .</p>

                    <div>
                        <Button>BUILD YOUR WORLD</Button>
                        <img src="/public/Strelka.png" alt="" />
                    </div>
                </div>

                <img src="/Mask group.png" alt="" className={s.photo} />
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero