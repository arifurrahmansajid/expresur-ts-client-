"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AvatarImg from "./../../assets/medium-shot-smiley-woman-with-crossed-arms (1).png";
import { useLanguage } from "../../i18n/LanguageContext";

interface Testimonial {
  textKey: string;
  nameKey: string;
  role: string;
  avatar: any;
}

const testimonials: Testimonial[] = [
  {
    textKey: "lorem_testimonial",
    nameKey: "karen",
    role: "Lorem ipsum dolor",
    avatar: AvatarImg,
  },
  {
    textKey: "lorem_testimonial",
    nameKey: "karen",
    role: "Lorem ipsum dolor",
    avatar: AvatarImg,
  },
  {
    textKey: "lorem_testimonial",
    nameKey: "karen",
    role: "Lorem ipsum dolor",
    avatar: AvatarImg,
  },
  {
    textKey: "lorem_testimonial",
    nameKey: "karen",
    role: "Lorem ipsum dolor",
    avatar: AvatarImg,
  },
];

const Quedicen: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-primary-green py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          {t ? t("que_dicen_clientes") : "¿Qué dicen nuestros clientes?"}
        </h2>

        <div className="relative px-12">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  {/* Card Bubble */}
                  <div className="bg-white rounded-[30px] p-8 relative shadow-xl mb-10 w-full">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium mb-6">
                      {t ? t(item.textKey as any) : "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"}
                    </p>
                    <div className="flex text-secondary-orange text-2xl">
                      ★★★★★
                    </div>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white rotate-45 rounded-sm"></div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 w-full pl-6">
                    <img
                      src={(item.avatar as any).src || item.avatar}
                      alt={item.nameKey}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{t ? t(item.nameKey as any) : item.nameKey}</h3>
                      <p className="opacity-80 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-4 -translate-y-1/2 z-30 text-secondary-orange text-5xl hover:scale-110 transition-transform">
            ❮
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-4 -translate-y-1/2 z-30 text-secondary-orange text-5xl hover:scale-110 transition-transform">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quedicen;