import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../assets/logo.png";

const SlidingCards = () => {

  const cards = [
    { id: 1, title: "Card 1", description: "decx of cards", img: image1 },
    { id: 2, title: "Card 2", description: "decx of cards", img: "https://source.unsplash.com/300x200/?city" },
    { id: 3, title: "Card 3", description: "decx of cards", img: "https://source.unsplash.com/300x200/?technology" },
    { id: 4, title: "Card 4", description: "decx of cards", img: "https://source.unsplash.com/300x200/?business" },
  ];

  return (
    <div className="p-8 flex flex-col items-start font-display">
      <div className="p-8">
        <h1 className="text-md font-display font-bold text-left mt-8">My Skills</h1>
        <h1 className="text-4xl font-display font-bold text-left mt-8">My Expertise</h1> 


        <div className="w-screen mx-auto p-6 mt-8 rounded-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <div className="flex flex-col justify-center items-center h-[370px] w-[405px] bg-[rgba(255,255,255,0.9)] shadow-md rounded-xl p-6">
                  <img src={card.img} alt={card.title} className="w-[80px] h-[80px] object-cover rounded-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800 mt-4 text-center">{card.title}</h2>
                  <p className="text-lg font-medium text-gray-600 mt-1 text-center">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;
