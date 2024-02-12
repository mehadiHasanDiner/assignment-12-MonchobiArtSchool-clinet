import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./HomeBanner.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeBanner = () => {
  const sliderData = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Beautiful landscape view of mountains",
    },
    {
      id: 2,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664303256304-a16bffdb08bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Adorable puppies playing in the park",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Delicious and colorful assortment of fruits",
    },
    {
      id: 4,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663050956267-fa2f5f905862?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Spectacular night skyline of a city",
    },
    {
      id: 5,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661274147103-367dd0b3f0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Cute kittens cuddling together",
    },
  ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        effect="coverflow"
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="w-full relative next-icon">
              <img className="w-full" src={slider.imageUrl} alt="" />
              <div className="bg-gradient-to-l from-neutral-950 opacity-80 w-full h-full absolute top-0"></div>
              <div className="text-white w-1/2 absolute top-0 md:top-1/3 right-0 p-8 lg:top-1/4">
                <h3 className=" text-2xl lg:text-7xl ">{slider.text}</h3>
                <p className=" text-xl mt-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default HomeBanner;
