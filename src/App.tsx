import { DocumentData } from '@firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AnimatedRoutes } from './AnimatedRoutes'
import { setIsFirstOpening, setTestimonials } from './features/counter/appSlice'
import { RootState } from './features/store'
import { db } from './firebase'

const App: React.FC = () => {
 
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
