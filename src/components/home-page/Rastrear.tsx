import React from "react";
import rastrearImg from "../../assets/rastrear.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Rastrear: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-[1920px] mx-auto overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 max-w-2xl">
          <h2 className="text-secondary-orange text-5xl md:text-7xl font-bold tracking-tight">
            {t ? t("rastrear_paquete_title") : "Rastrear paquete"}
          </h2>

          <form className="bg-white rounded-2xl p-1 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder={t ? t("n_rastreo") : "Número de rastreo"}
              className="flex-grow px-6 py-4 border-2 border-secondary-orange rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-orange/20 text-lg font-medium"
            />
            <button
              type="submit"
              className="bg-primary-green hover:opacity-90 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-md whitespace-nowrap"
            >
              {t ? t("rastrear_btn") : "RASTREAR"}
            </button>
          </form>

          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {t ? t("tracking_lorem") : "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={(rastrearImg as any).src || rastrearImg}
            alt="Tracking Logistics"
            className="w-full max-w-[900px] object-contain drop-shadow-2xl scale-110 lg:scale-[1.4] origin-center lg:translate-x-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Rastrear;
