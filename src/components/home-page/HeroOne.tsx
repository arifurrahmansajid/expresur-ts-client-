import React from "react";
import HeroImg from "../../assets/Hero1.png";
import HeroImg2 from "../../assets/Hero2.png";
import HeroBg from "../../assets/HeroBg.png";
import { useLanguage } from "../../i18n/LanguageContext";

const HeroOne: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden w-full min-h-[80vh] md:min-h-[90vh] bg-gradient-to-br from-[#046838] via-[#046838] to-[#f97316]/40"
      style={{
        backgroundImage: `url(${(HeroBg as any).src || HeroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="mx-auto px-6 h-full flex items-center"
        style={{
          backgroundImage: `url(${(HeroImg2 as any).src || HeroImg2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 pb-20">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-8 text-center lg:text-left lg:w-1/2 z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight whitespace-pre-line">
              {t ? t("hero_title") : "PROVEEDOR\nDE SERVICIOS\nLOGÍSTICOS"}
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t ? t("hero_subtitle") : "Soluciones logísticas integrales — transporte, almacenamiento y distribución con tecnología para que tu operación fluya."}
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <button
                type="button"
                className="px-10 py-4 bg-secondary-orange text-white text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20"
              >
                {t ? t("solicitar_cotizacion") : "SOLICITAR COTIZACIÓN"}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-[60%] flex justify-center lg:justify-end">
            <img
              src={(HeroImg as any).src || HeroImg}
              alt="Servicios logísticos"
              className="w-full max-w-[1000px] object-contain drop-shadow-2xl translate-y-4 lg:translate-x-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
