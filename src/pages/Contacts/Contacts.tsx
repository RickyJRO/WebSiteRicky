import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import error from '../../assets/error.png'
import google from '../../assets/google.png'
import ricky from '../../assets/Ricardo.png'
import success from '../../assets/success.png'
import { Modal } from '../../components/Modal/Modal'
import { auth, db } from '../../firebase'

import './index.css'

const googleProvider = new GoogleAuthProvider()
export default function Contacts() {

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [description, setDescription] = useState('')
  const [alertTestimonial, setAlertTestimonial] = useState('')

  const [showSuccessMesage, setShowSuccessMesage] = useState(false)
  const [showErrorMessage, setShowErrormessage] = useState(false)

  const submitTestimonial = () => {
    if (name === '' || role === '' || description === '') {
      setAlertTestimonial('Missing fields...')
    } else if (name.length < 5) {
      setAlertTestimonial('Come on, is that really your name?')
    } else if (role.length < 5) {
      setAlertTestimonial('Come on, is that really your role?')
    } else if (name.length > 30) {
      setAlertTestimonial('Name length cannot exceed 30 characters :(')
    } else if (role.length > 30) {
      setAlertTestimonial('Role length cannot exceed 30 characters :(')
    } else if (description.length > 270) {
      setAlertTestimonial('Description length cannot exceed 270 characters :(')
    } else {
      setAlertTestimonial('')
      submitTestimonialFirebase({
        name: name,
        role: role,
        description: description,
      })
    }
  }
  const submitTestimonialFirebase = async (payload: {
    name: any
    role: any
    description: any
  }) => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user
      const q = query(
        collection(db, 'Testimonials'),
        where('uid', '==', user.uid)
      )
      const docs = await getDocs(q)

      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'Testimonials'), {
          uid: user.uid,
          description: payload.description,
          role: payload.role,
          userImage: user.photoURL,
          name: payload.name,
        })
        setShowSuccessMesage(true)
      } else {
        setAlertTestimonial('You already submitted a testimonial, you naughty')
      }
    } catch (err: any) {
      setShowErrormessage(true)
      console.error(err)
      alert(err.message)
    }
  }

  return (
    <>
      <Modal
        show={showErrorMessage}
        handleClose={() => {
          setShowErrormessage(false)
        }}
      >
        <div className="modalContainer">
          <div className="modalIcon">
            <img className="alertIcon" alt="" src={error} />
          </div>
          <div className="modalMessage">Server error</div>
        </div>
      </Modal>
      <Modal
        show={showSuccessMesage}
        handleClose={() => {
          setShowSuccessMesage(false)
        }}
      >
        <div className="modalContainer">
          <div className="modalIcon">
            <img className="alertIcon" alt="" src={success} />
          </div>
          <div className="modalMessage">Testimonial sent successfully</div>
        </div>
      </Modal>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: 'just' }}
        exit={{ x: 1500 }}
        className="containerContacts"
      >
        <div className="contactsContainer">
          <div className="contactsCard">
            <div className="contactsForm">
            
              <p className="workedWithMe">
                Leave a Testimonial
              </p>
              <div className="testimonialForm">
                <div className="nameAndRole">
                  <div className="name">
                    <p style={{ marginBottom: '10px' }}>Name</p>
                    <input
                      className="inputRole"
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div className="role">
                    <p style={{ marginBottom: '10px' }}>Profession</p>
                    <input
                      className="inputRole"
                      onChange={(e) => {
                        setRole(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <p style={{ marginBottom: '10px', marginTop: '20px' }}>
                  Testimonial
                </p>
                <textarea
                  className="testimonialText"
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                />
                {alertTestimonial.length > 0 && (
                  <p
                    style={{
                      marginTop: '1rem',
                      fontSize: '1vw',
                      color: 'red',
                    }}
                  >
                    {alertTestimonial}
                  </p>
                )}
                <div className="submitTestimonialContainer">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="submitTestimonial"
                    onClick={submitTestimonial}
                  >
                    Submit your testimonial with{' '}
                    <div className="googleContainer">
                      <img className="googleLogo" src={google}  alt=""/>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="contactsPictureContainer">
            <div>
              <div className="contactsPicture">
                <img className="pictureRicardo" src={ricky} alt="" />
              </div>
            </div>
            <div className="myContacts">
              <div>
                <p className="contactsLabels">
                  Email:{' '}
                  <span className="spanContacts">
                    Ricardojribeirooliveira@gmail.com
                  </span>
                </p>
                <p className="contactsLabels">
                  Phone Number:{' '}
                  <span className="spanContacts">+351 915224279</span>
                </p>
                <p className="contactsLabels">
                  Location:{' '}
                  <span className="spanContacts">Lisbon, Portugal</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactsLinkContainer">
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
        </div>
      </motion.div>
    </>
  )
}
