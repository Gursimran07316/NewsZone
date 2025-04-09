import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../assets/news-700x435-1.jpg'
import img2 from '../assets/news-700x435-2.jpg'
import img3 from '../assets/news-700x435-3.jpg'
import img4 from '../assets/news-700x435-4.jpg'
import img5 from '../assets/news-700x435-5.jpg'
const FeaturedSection = () => {
  const slides = [
    { img: img1, category: "Business", date: "Jan 01, 2045", title: "Lorem ipsum dolor sit amet elit..." },
    { img: img2, category: "Business", date: "Jan 01, 2045", title: "Lorem ipsum dolor sit amet elit..." },
    { img: img3, category: "Business", date: "Jan 01, 2045", title: "Lorem ipsum dolor sit amet elit..." },
    { img: img4, category: "Business", date: "Jan 01, 2045", title: "Lorem ipsum dolor sit amet elit..." },
    { img: img5, category: "Business", date: "Jan 01, 2045", title: "Lorem ipsum dolor sit amet elit..." },
  ];

  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          loop
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="position-relative overflow-hidden" style={{ height: "300px" }}>
                <img
                  className="img-fluid h-100"
                  src={slide.img}
                  alt={`News ${index + 1}`}
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay">
                  <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2" href="#">
                      {slide.category}
                    </a>
                    <a className="text-white" href="#">
                      <small>{slide.date}</small>
                    </a>
                  </div>
                  <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="#">
                    {slide.title}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
