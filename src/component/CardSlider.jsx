import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ProductCard from "./ProductCard";
import "./CardSlider.css";
import { v4 as uuidv4 } from "uuid";
function CardSlider({ details }) {
  return (
    <div className="sliderBox">
      <div>
        <Swiper
          // slidesPerView={4}
          // spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1030: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {details.map((company) => (
            <SwiperSlide key={uuidv4()}>
              <ProductCard alldetails={company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CardSlider;
