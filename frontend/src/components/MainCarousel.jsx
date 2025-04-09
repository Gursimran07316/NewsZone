import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = ({maincrousel}) => {
 const [slides, setSlides] = useState([])

useEffect(() => {
  setSlides(maincrousel)
}, [])
if(! slides) return <p>Loading...</p>;
  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
              <img
                className="img-fluid h-100"
                src={slide.largeImg}
                alt={`Slide ${index + 1}`}
                style={{ objectFit: "cover" }}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="#">
                    {slide.category}
                  </a>
                  <a className="text-white" href="#">{slide.date}</a>
                </div>
                <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="#">
                  {slide.title}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
