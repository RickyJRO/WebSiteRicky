import { DocumentData } from '@firebase/firestore'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AppState {
  isFirstOpening: boolean
  testimonials: {
    userImage: string
    uid: string
    name: string
    role: string
    description: string
  }[] | null
}

// Define the initial state using that type
const initialState: AppState = {
  isFirstOpening: true,
  testimonials: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsFirstOpening: (state) => {
      state.isFirstOpening = !state.isFirstOpening
    },
    setTestimonials: (state, payload) => {
      state.testimonials = payload.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsFirstOpening, setTestimonials } = appSlice.actions

export const selecIsFirstOpening = (state: RootState) =>
  state.app.isFirstOpening
export const selectTestimonials = (state: RootState) => state.app.testimonials
export default appSlice.reducer
