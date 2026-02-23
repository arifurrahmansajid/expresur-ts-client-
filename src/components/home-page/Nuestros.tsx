"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import iconPackage from "../../assets/icon-pickup.png";
import iconRemesas from "../../assets/icon-remesas.png";
import iconPickup from "../../assets/icon-package.png";
import iconConfirm from "../../assets/icon-confirm1.png";
import { useLanguage } from "../../i18n/LanguageContext";

interface CardData {
  titleKey: string;
  icon: any;
}

const serviceCards: CardData[] = [
  { titleKey: "envios_paquetes", icon: iconPackage },
  { titleKey: "envio_remesas", icon: iconRemesas },
  { titleKey: "recogida_paquetes", icon: iconPickup },
  { titleKey: "conformar_envios", icon: iconConfirm },
  // Duplicate for slider if needed, or Swiper loop
];

const Nuestros: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-[1920px] mx-auto">
      <div className="bg-primary-green rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-xl -mt-24 md:-mt-32 relative z-20">
        <h2 className="text-center text-white text-4xl md:text-6xl font-bold mb-12 tracking-tight">
          {t ? t("nuestros_servicios") : "Nuestros servicios"}
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full">
                <div className="bg-transparent border-2 border-secondary-orange rounded-[30px] p-6 flex flex-col items-center h-full transition-all duration-300 group-hover:bg-secondary-orange group-hover:border-transparent cursor-pointer">
                  {/* Icon Container */}
                  <div className="w-full aspect-[4/3] flex items-center justify-center mb-6">
                    <img 
                      src={card.icon?.src || card.icon} 
                      alt={card.titleKey} 
                      className="max-h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-4 transition-colors duration-300 group-hover:text-primary-green">
                    {t ? t(card.titleKey as any) : card.titleKey}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-center text-sm mb-8 line-clamp-3 transition-colors duration-300 group-hover:text-primary-green">
                    {t ? t("lorem_short") : "ismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exer"}
                  </p>

                  {/* Button */}
                  <button className="mt-auto bg-primary-green text-white font-bold py-2.5 px-8 rounded-full border border-secondary-orange transition-all duration-300 group-hover:bg-primary-green group-hover:border-primary-green">
                    {t ? t("ver_mas") : "VER MÁS"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-3 mt-4"></div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #f97316 !important;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Nuestros;
