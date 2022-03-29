import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AboutMe from './pages/AboutMe/AboutMe'
import Contacts from './pages/Contacts/Contacts'
import { Home } from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import hamburguer from './assets/hamburguer.png'
import CustomLink from './CustomLink'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './features/store'
import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import { setIsFirstOpening, setTestimonials } from './features/counter/appSlice'
export const AnimatedRoutes = () => {
  const location = useLocation()
  const [navVisibility, setNavVisibility] = useState(false)
  const [loading, setLoading] = useState(true);
  const isFirstOpening = useSelector(
    (state: RootState) => state.app.isFirstOpening
  )
  const testimonials = useSelector(
    (state: RootState) => state.app.testimonials
  )
  const dispatch = useDispatch()

  const getTestimonials = async ()=>{
    const testimonials: DocumentData[] = [];
    await getDocs(collection(db, "Testimonials")).then((querySnapshot)=>{
      querySnapshot.docs.forEach((e)=>{
        testimonials.push(e.data())
      })
     
    }).then(()=>{
      console.log(testimonials)
      dispatch(setTestimonials(testimonials))
    })
  
  }

  useEffect(()=>{
    getTestimonials()
  },[]);

  useEffect(()=>{
    if(testimonials){
      setLoading(false)
    }
  },[testimonials])
  
  useEffect(() => {
    if (isFirstOpening) {
      setTimeout(() => {
        dispatch(setIsFirstOpening())
      }, 5000)
    }
  }, [dispatch, isFirstOpening]);
  
  if(loading){
    <div className="containerMain">
      </div>
  }
  return (
    <div className="containerMain">
      <div
        className="mobileNav"
        onClick={() => setNavVisibility(!navVisibility)}
      >
        <img className="mobileNavIcon" src={hamburguer} />
      </div>
      {navVisibility && (
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -1000, opacity: 0 }}
          className="mobileNavContainer"
        >
          <CustomLink
            to={'/'}
            name="Home"
            onClick={() => setNavVisibility(!navVisibility)}
          />
          <CustomLink
            to={'/aboutMe'}
            name="About Me"
            onClick={() => setNavVisibility(!navVisibility)}
          />
          <CustomLink
            to={'/portfolio'}
            name="Portfolio"
            onClick={() => setNavVisibility(!navVisibility)}
          />
          <CustomLink
            to={'/contacts'}
            name="Contacts"
            onClick={() => setNavVisibility(!navVisibility)}
          />
        </motion.div>
      )}

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
