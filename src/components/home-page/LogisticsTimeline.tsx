"use client"

import React from "react";
import icon from "../../assets/Grupo-icon.png";
import { useLanguage } from "../../i18n/LanguageContext";

const LogisticsTimeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
      <div className="relative w-full">
        {/* SCROLLING MARQUEE */}
        <div className="flex animate-scrollX whitespace-nowrap">
          {/* First Set */}
          <div className="flex items-center gap-12 px-6">
            <span className="text-[#046838] text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              RÁPIDOS, ECONÓMICOS Y SEGUROS
            </span>
            <img src={(icon as any).src || icon} alt="icon" className="h-12 md:h-16 w-auto" />
            <span className="text-[#046838] text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              RÁPIDOS, ECONÓMICOS Y SEGUROS
            </span>
            <img src={(icon as any).src || icon} alt="icon" className="h-12 md:h-16 w-auto" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-12 px-6">
            <span className="text-[#046838] text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              RÁPIDOS, ECONÓMICOS Y SEGUROS
            </span>
            <img src={(icon as any).src || icon} alt="icon" className="h-12 md:h-16 w-auto" />
            <span className="text-[#046838] text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              RÁPIDOS, ECONÓMICOS Y SEGUROS
            </span>
            <img src={(icon as any).src || icon} alt="icon" className="h-12 md:h-16 w-auto" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollX {
          animation: scrollX 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogisticsTimeline;
