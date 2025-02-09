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
    <div className='p-8 flex flex-col items-start bg-bgPage'>
      <div className='p-8'>
        <h1 className='text-md font-bold text-left mt-8'>My Skills</h1>
        <h1 className='text-4xl font-bold text-left mt-8'>My Expertise</h1>
        <div className="max-w-4xl mx-auto p-6 bg-cardBg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 10000 }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="p-4 bg-white shadow-lg rounded-lg">
                <img src={card.img} alt={card.title} className="w-full h-40 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-2">{card.title}</h2>
                <p className="text-sm text-gray-500">{card.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

      );
};

      export default SlidingCards;




