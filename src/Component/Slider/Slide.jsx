// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img
//             className="h-full mx-auto rounded-3xl w-4/5 "
//             src="https://academia.r.worldssl.net/uploads/default/resized/dicas-para-seguir-um-tipster_646_380_HOME_BOX.webp"
//             alt="Album"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             className="h-full mx-auto rounded-3xl w-4/5 "
//             src="https://academia.r.worldssl.net/uploads/default/resized/dicas-para-seguir-um-tipster_646_380_HOME_BOX.webp"
//             alt="Album"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             className="h-full mx-auto rounded-3xl w-4/5 "
//             src="https://academia.r.worldssl.net/uploads/default/resized/dicas-para-seguir-um-tipster_646_380_HOME_BOX.webp"
//             alt="Album"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             className="h-full mx-auto rounded-3xl w-4/5 "
//             src="https://academia.r.worldssl.net/uploads/default/resized/dicas-para-seguir-um-tipster_646_380_HOME_BOX.webp"
//             alt="Album"
//           />
//         </SwiperSlide>

//       </Swiper>
//     </>
//   );
// }

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./styles.css";
import Card from "./Card";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 270,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        loop={true} // Add loop prop to enable looping
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card></Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
