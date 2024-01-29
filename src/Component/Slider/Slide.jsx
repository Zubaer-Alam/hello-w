import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const offers = [
    {
      id: 1,
      title: "100% Bonus on First Deposit",
      description: "Get a 100% Bonus on your first deposit!",
      content:
        "Don't miss out on this exclusive promotion. Make your first deposit and double your initial funds!",
      buttonText: "Claim Now",
      offerValidity: "Offer valid until [Date].",
      termsAndConditions: "Terms and conditions apply.",
      image: "https://lottie.host/embed/44364065-d4bc-4554-b4b4-492cd1a3d68c/y7xjyN9B8b.json",
    },
    {
      id: 2,
      title: "50% Bonus on Each Deposit on Fridays",
      description: "Enjoy a 50% Bonus on every deposit made on Fridays!",
      content:
        "Make the most of your Fridays with additional bonuses on each deposit you make.",
      buttonText: "Claim Now",
      offerValidity: "Offer valid only on Fridays.",
      termsAndConditions: "Terms and conditions apply.",
      image: "https://lottie.host/embed/3046fdac-16dd-40f9-872b-13b2c7a6866d/1q5gtzstCj.json",
    },
    {
      id: 3,
      title: "20% Reimbursement on Deposits",
      description: "Get a 20% reimbursement on all your deposits!",
      content:
        "Every deposit you make comes with a 20% reimbursement, adding extra value to your account.",
      buttonText: "Claim Now",
      offerValidity: "Limited-time offer.",
      termsAndConditions: "Terms and conditions apply.",
      image: "https://lottie.host/embed/85bed690-e9a3-4001-89e2-b85cbb2f6bc6/Qa4hnPPc4X.json",
    },
    {
      id: 4,
      title: "One-Click Registration",
      description:
        "Experience hassle-free registration with our one-click registration process!",
      content:
        "Register quickly and start enjoying our services without any delays.",
      buttonText: "Register Now",
      offerValidity: "Available anytime.",
      termsAndConditions: "Terms and conditions apply.",
      image:"https://lottie.host/embed/59299925-ec05-49c3-877f-882fb5ecb2df/JSHkyshlw5.json",
    },
  ];
  

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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {offers.map((offer) => (
          <SwiperSlide>
            <Card key={offer.id} offer={offer}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
