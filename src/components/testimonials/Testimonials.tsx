import React from 'react'
import ricky from '../../assets/ricky2.jpg'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'

export default function Testimonials() {
  const testimonials = useSelector((state: RootState) => state.app.testimonials)

  if (testimonials) {
    return (
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiperTestimonials"
      >
        {testimonials.map((e) => {
          return (
            <SwiperSlide key={e.uid}>
              <div className="testimonialContainer">
                <div className="testimonialAvatar">
                  <img className="testimonialPhoto" src={`${e.userImage}`} alt="" />
                </div>
                <div className="testimonialJob">
                  <p className="testimonialDescription">
                    "{e.description}"
                  </p>
                  <p className="testimonialName">{e.name}</p>

                  <p className="textimonialJobRole">{e.role}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  return null
}
