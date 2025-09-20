import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollAnimation from "../ScrollAnimation";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import fac1 from "../../assets/fac1.jpeg";
import fac2 from "../../assets/fac2.jpeg";
import fac3 from "../../assets/fac3.jpeg";
import fac4 from "../../assets/fac4.jpeg";
import fac5 from "../../assets/fac5.jpeg";
import fac6 from "../../assets/fac6.jpeg";
import fac7 from "../../assets/fac7.jpeg";
import fac8 from "../../assets/fac8.jpeg";
import fac9 from "../../assets/fac9.jpeg";
import fac10 from "../../assets/fac10.jpeg";

export default function OurFacilities() {
  const images = [
    img1,
    img2,
    img4,
    img5,
    img6,
    img8,
    img9,
    img10,
    fac2,
    fac3,
    fac4,
    fac5,
    fac6,
    fac7,
    fac8,
    fac9,
    fac10,
  ];

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-[#1aab3c]">Facilities</span>{" "}
            <span className="text-[#0B3A4A]">at Aram Medicals</span>
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
