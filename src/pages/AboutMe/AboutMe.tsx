import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import ricky from '../../assets/ricky2.jpg'
import rickyBoxe from '../../assets/rickyBoxe.png'
import marrocos from '../../assets/marrocos.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import smart from '../../assets/smartconsulting.png'
import { EffectCards } from 'swiper'
import './index.css'
export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, type: 'just' }}
      exit={{ x: -1500 }}
      className="aboutme"
    >
      <div className="aboutMeContainer">
        <div className="aboutMeTextContainer">
          <h1 className="aboutMeTitle">About Me</h1>
          <p className="aboutMeText">
            Born in 1998 in the centre of Lisbon, since my youth I have been in
            love with computers and everything related to technology.<br></br>I
            played basketball and even became a boxer.<br></br> I earned a
            bachelor's degree in computer science where I had contact with
            several programming languages like Python, Java, C, Javascript and
            now I work as a front-end developer and could not be happier,
            because I am doing what I love.<br></br>I also love travelling and a
            nice cup of coffee.
          </p>
          <p className="currentlyTitle">Currently working at</p>
          <a
            href="https://www.smartconsulting.pt/splash/index.html"
            target={'_blank'}
          >
            <img className="jobImage" src={smart} />
          </a>
        </div>
        <div className="aboutMePhotoContainer">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="swiuperAboutMe"
          >
            <SwiperSlide>
              <img src={ricky} className="aboutMePhoto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rickyBoxe} className="aboutMePhoto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={marrocos} className="aboutMePhoto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="aboutMeLinksContainer">
        <Link className="link" to="/">
          <motion.div>
            <motion.button
              whileHover={{ color: 'rgb(46, 219, 250)' }}
              className="rightSideBarLabel"
            >
              Home
            </motion.button>
          </motion.div>
        </Link>
        <Link className="link" to="/portfolio">
          <motion.div>
            <motion.button
              whileHover={{ color: 'rgb(46, 219, 250)' }}
              className="rightSideBarLabel"
            >
              Portfolio
            </motion.button>
          </motion.div>
        </Link>
        <Link className="link" to="/contacts">
          <motion.div>
            <motion.button
              whileHover={{ color: 'rgb(46, 219, 250)' }}
              className="rightSideBarLabel"
            >
              Contacts
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
