import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollAnimation from "../ScrollAnimation";


export default function OurFacilities() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/fac2.jpeg",
    "/fac3.jpeg",
    "/fac4.jpeg",
    "/fac5.jpeg",
    "/fac6.jpeg",
    "/fac7.jpeg",
    "/fac8.jpeg",
    "/fac9.jpeg",
    "/fac10.jpeg",
  ];

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-[#1aab3c]">Facilities</span>{" "}
            <span className="text-[#212878]">at Aram Medicals</span>
          </h1>
        </div>
      </ScrollAnimation>

      {/* Carousel */}
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg md:text-xl mb-8">
            Explore our state-of-the-art facilities designed for your health and
            comfort.
          </p>
        </div>
      </ScrollAnimation>

      {/* Swiper Carousel */}
      <ScrollAnimation direction="up" delay={0.4}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Facility ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </div>
  );
}
