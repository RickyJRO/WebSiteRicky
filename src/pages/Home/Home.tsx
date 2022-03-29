
import React from 'react'
import ricky from '../../assets/avatar2.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

import './index.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Testimonials from '../../components/testimonials/Testimonials'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

export const Home: React.FC = () => {
  const isFirstOpening = useSelector(
    (state: RootState) => state.app.isFirstOpening
  )

  return (
    <>
     
      <motion.div className="homeContainer" exit={{ opacity: 0 }}>
        <div className="leftSideBar">
     
          <motion.a
            initial={isFirstOpening ? { x: -50, opacity: 0 } : { opacity: 0 }}
            animate={
              isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={isFirstOpening ? { delay: 3.4 } : { delay: 0 }}
            href="https://www.facebook.com/profile.php?id=100006426765983"
            target="_blank"
          >
            <motion.img
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              className="socialIcon"
              src={facebook}
            />
          </motion.a>
          <motion.a
            initial={isFirstOpening ? { x: -50, opacity: 0 } : { opacity: 0 }}
            animate={
              isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={isFirstOpening ? { delay: 3.2 } : { delay: 0 }}
            href="https://www.linkedin.com/in/ricardo-oliveira-09393419b/"
            target="_blank"
          >
            <motion.img
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              className="socialIcon"
              src={linkedin}
            />
          </motion.a>
          <motion.a
            initial={isFirstOpening ? { x: -50, opacity: 0 } : { opacity: 0 }}
            animate={
              isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={isFirstOpening ? { delay: 3 } : { delay: 0 }}
            href="https://github.com/RickyJRO"
            target="_blank"
          >
            <motion.img
              whileHover={{ scale: 1.1, cursor: 'pointer' }}
              className="socialIcon"
              src={github}
            />
          </motion.a>
        </div>
        <div className="someContent">
          <div className="textHomeDiv">
           <div>     <motion.p
              initial={isFirstOpening ? { opacity: 0 } : { opacity: 0 }}
              animate={isFirstOpening ? { opacity: 1 } : { opacity: 1 }}
              transition={{ delay: 0 }}
              className="textHomeTiny"
            >
              Hey!
            </motion.p>
            <motion.p
              initial={isFirstOpening ? { opacity: 0 } : { opacity: 0 }}
              animate={isFirstOpening ? { opacity: 1 } : { opacity: 1 }}
              transition={isFirstOpening ? { delay: 1 } : { delay: 0 }}
              className="textHome"
            >
              I'm <span className="r">Ricardo</span>,
            </motion.p>
            <motion.p
              initial={isFirstOpening ? { opacity: 0 } : { opacity: 0 }}
              animate={isFirstOpening ? { opacity: 1 } : { opacity: 1 }}
              transition={isFirstOpening ? { delay: 2 } : { delay: 0 }}
              className="textHomeTiny2"
            >
              A Full Stack Developer who specializes in JavaScript Techs across
              the whole stack.<br></br> (Node.js, Express, React, React Native)
            </motion.p>
            </div>
       
         
          </div>
          <motion.div
            initial={isFirstOpening ? { opacity: 0 } : { opacity: 0 }}
            animate={isFirstOpening ? { opacity: 1 } : { opacity: 1 }}
            transition={isFirstOpening ? { delay: 2 } : { delay: 0 }}
            className="testimonials"
          >
            <Testimonials />
          </motion.div>
        </div>
        <motion.div
          initial={isFirstOpening ? { opacity: 0 } : { opacity: 0 }}
          animate={isFirstOpening ? { opacity: 1 } : { opacity: 1 }}
          transition={isFirstOpening ? { delay: 1 } : { delay: 0 }}
          className="rickyCartoon"
        >
          <div className="homeRickyContainer">
            <img src={ricky} className="homeRicky" />
          </div>
        </motion.div>

        <div className="rightSideBar">
          <motion.div
            initial={isFirstOpening ? { x: 50, opacity: 0 } : { opacity: 0 }}
            animate={
              isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
            }
            transition={isFirstOpening ? { delay: 3.4 } : { delay: 0 }}
          >
            <motion.button
              whileHover={{ color: 'rgb(46, 219, 250)' }}
              style={{ color: 'rgb(46, 219, 250)' }}
              className="rightSideBarLabel"
            >
              Home
            </motion.button>
          </motion.div>
          <Link className="link" to="aboutMe">
            <motion.div
              initial={isFirstOpening ? { x: 50, opacity: 0 } : { opacity: 0 }}
              animate={
                isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
              }
              transition={isFirstOpening ? { delay: 3.4 } : { delay: 0 }}
            >
              <motion.button
                whileHover={{ color: 'rgb(46, 219, 250)' }}
                className="rightSideBarLabel"
              >
                About Me
              </motion.button>
            </motion.div>
          </Link>

          <Link className="link" to="portfolio">
            <motion.div
              initial={isFirstOpening ? { x: 50, opacity: 0 } : { opacity: 0 }}
              animate={
                isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
              }
              transition={isFirstOpening ? { delay: 3.2 } : { delay: 0 }}
            >
              <motion.button
                whileHover={{ color: 'rgb(46, 219, 250)' }}
                className="rightSideBarLabel"
              >
                Portfolio
              </motion.button>
            </motion.div>
          </Link>

          <Link to="contacts">
            <motion.div
              initial={isFirstOpening ? { x: 50, opacity: 0 } : { opacity: 0 }}
              animate={
                isFirstOpening ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }
              }
              transition={isFirstOpening ? { delay: 3 } : { delay: 0 }}
            >
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
    </>
  )
}
