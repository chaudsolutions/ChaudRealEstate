import { useResponsive } from "../../Hooks/useVariable";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./slide.css";

const PropertySlide = () => {
  const { isMobile } = useResponsive();

  const newProperty = [];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={isMobile ? 1 : 3}
      className="mySwiper">
      {newProperty?.map((property) => (
        <SwiperSlide key={property._id} className="swiperSlide">
          property details
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PropertySlide;
