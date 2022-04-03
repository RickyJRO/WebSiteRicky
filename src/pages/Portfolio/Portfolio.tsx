import { motion } from 'framer-motion'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './index.css'
import Card from './Card/Card'
import werepair from '../../assets/werepair.png'
import teleufo from '../../assets/teleufo.png'
import selfmade from '../../assets/selfmade.png'
import vortal from '../../assets/vortal.png'
import naturefriend from '../../assets/naturefriendback.png'
import { Link } from 'react-router-dom'
import dotnet from '../../assets/dotnet.png'
import reactpng from '../../assets/react.png'
import firebase from '../../assets/firebase.png'
import php from '../../assets/wordpress.png'
import wordpress from '../../assets/php.png'
import nodejs from '../../assets/nodejs.png'
import johnybravo from '../../assets/johnybravo.jpg'

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'just' }}
      className="portfolioContainer"
      exit={{ y: -1000 }}
    >
      <div className="PortfolioTitle">Portfolio</div>
      <div className="swiperContainer">
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="portfolioCard">
            <Card
              image={vortal}
              projectName="Vortal"
              projectDescription="An eProcurement platform"
              responsabilityDescription="Develop new features, fix bugs and support the release on regression and acceptance phases"
              stacks={[
                { name: 'React', image: reactpng },
                { name: 'Dotnet', image: dotnet },
              ]}
              projectLink="https://www.vortal.biz/"
            />
          </SwiperSlide>
          <SwiperSlide className="portfolioCard">
            <Card
              image={johnybravo}
              projectName="JohnnyBravo"
              projectDescription="An advertising music artist website"
              responsabilityDescription="Designed the website, and also developed it"
              stacks={[
                { name: 'React', image: reactpng }
              ]}
              projectLink="https://www.johnnybravo77.com/"
            />
          </SwiperSlide>
          <SwiperSlide className="portfolioCard">
            <Card
              image={teleufo}
              projectName="Teleufo Mobile"
              projectDescription="An advertising mobile repairment website"
              responsabilityDescription="Designed the website, and also developed it"
              stacks={[
                { name: 'React', image: reactpng },
                { name: 'Firebase', image: firebase },
              ]}
              projectLink="https://www.teleufo.com/"
            />
          </SwiperSlide>
          <SwiperSlide className="portfolioCard">
            <Card
              image={selfmade}
              projectName="NGO Selfmade"
              projectDescription="An advertising enterpreneurship company website"
              responsabilityDescription="Designed the app, and also developed it"
              stacks={[
                { name: 'WordPress', image: wordpress },
                { name: 'PHP', image: php },
              ]}
              projectLink="https://selfmade.pt/"
            />
          </SwiperSlide>
          <SwiperSlide className="portfolioCard">
            <Card
              image={werepair}
              projectName="WeRepair"
              projectDescription="An advertising home appliances repair website"
              responsabilityDescription="Designed the website, and also developed it"
              stacks={[{ name: 'React', image: reactpng }]}
              projectLink="https://werepair.com.pt/"
            />
          </SwiperSlide>
          <SwiperSlide className="portfolioCard">
            <Card
              image={naturefriend}
              projectName="NatureFriend"
              projectDescription="My college final project, a web-app and a mobile app together to fight off world-wide pollution"
              responsabilityDescription="Designed the web-app/mobile-app and developed it"
              stacks={[
                { name: 'React', image: reactpng },
                { name: 'Node', image: nodejs },
                { name: 'React Native', image: reactpng },
              ]}
              projectLink="https://github.com/RickyJRO/NatureFriend-WebApp"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="portfolioLinksContainer">
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
        <Link className="link" to="/aboutMe">
          <motion.div>
            <motion.button
              whileHover={{ color: 'rgb(46, 219, 250)' }}
              className="rightSideBarLabel"
            >
              About Me
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
