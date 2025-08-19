import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function OurFacilities() {
  const images = [
    "https://www.onehealthhospitals.com/wp-content/uploads/2024/03/OHSSH-Facilities-6-scaled.webp",
    "https://www.onehealthhospitals.com/wp-content/uploads/2024/03/OHSSH-Facilities-2-768x511.webp",
    "https://www.onehealthhospitals.com/wp-content/uploads/2024/03/OHSSH-Facilities-6-scaled.webp",
    "https://www.onehealthhospitals.com/wp-content/uploads/2024/03/OHSSH-Facilities-2-768x511.webp",
    "https://www.onehealthhospitals.com/wp-content/uploads/2024/03/OHSSH-Facilities-6-scaled.webp",
  ];

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-[#1aab3c]">Facilities</span>{" "}
          <span className="text-[#0B3A4A]">at OneHealth</span>
        </h1>
      </div>

      {/* Carousel */}
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
    </div>
  );
}
