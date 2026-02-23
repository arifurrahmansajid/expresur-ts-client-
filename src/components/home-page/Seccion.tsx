import React from "react";
import car from "../../assets/Grupo car.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Seccion: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-[1920px] mx-auto overflow-visible mb-24">
      <div className="bg-secondary-orange rounded-[40px] md:rounded-[60px] min-h-[500px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 relative shadow-xl">
        
        {/* LEFT IMAGE - Isometric Van/Phone */}
        <div className="lg:absolute lg:left-0 lg:-bottom-20 w-full lg:w-[60%] z-20 flex justify-center lg:justify-start">
          <img
            src={(car as any).src || car}
            alt="Pickup Logistics"
            className="w-full max-w-[800px] object-contain drop-shadow-2xl scale-110 lg:scale-125 origin-center lg:-translate-y-10 lg:-translate-x-10"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-right space-y-8 z-10 lg:ml-auto">
          <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            {t ? t("seccion_recogida") : "Sección de Recogida"}
          </h2>

          <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl font-medium opacity-90">
            {t ? t("tracking_lorem") : "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."}
          </p>

          <button className="bg-primary-green hover:opacity-90 text-white font-bold py-4 px-16 rounded-2xl text-xl md:text-2xl transition-all shadow-xl active:scale-95">
            {t ? t("solicitar_recogida") : "SOLICITAR RECOGIDA"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seccion;
