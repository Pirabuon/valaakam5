import React from "react";
import PostsList from "../components/PostsList";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomePage() {
  return (
    <div className="page-container">
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link to="/">முகப்பு</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/science">அறிவியல்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/puzzles">புதிர்கள்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/abnormal">அமானுடம்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/scholars">மேதைகள்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/history">வரலாறுகள்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/mystery">வினோதங்கள்</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/others">ஏனையவை</Link>
          </SwiperSlide>
        </Swiper>
      </>
      <PostsList />
    </div>
  );
}
