// export type Lang = "es" | "en";

// export const translations = {
//   es: {
//     servicios: "Servicios",
//     envio_nacionales: "Envíos Nacionales",
//     envio_internacional: "Envíos Internacionales",
//     carga_pesada: "Carga Pesada",
//     express: "Express 24h",
//     tienda: "Tienda",
//     quienes_somos: "Quiénes Somos",
//     faq: "FAQ",
//     recogida: "Recogida",
//     rastrear: "RASTREAR PAQUETE",
//     inicio: "Inicio",
//     siguuenos: "Síguenos",
//     languageShort: "ES",
//     switchTo: "English",
//   },
//   en: {
//     servicios: "Services",
//     envio_nacionales: "National Shipping",
//     envio_internacional: "International",
//     carga_pesada: "Heavy Cargo",
//     express: "Express 24h",
//     tienda: "Store",
//     quienes_somos: "About Us",
//     faq: "FAQ",
//     recogida: "Pickup",
//     rastrear: "TRACK PACKAGE",
//     inicio: "Home",
//     siguuenos: "Follow us",
//     languageShort: "EN",
//     switchTo: "Español",
//   },
// } as const;

// export type Translations = typeof translations;
// export type TKey = keyof Translations["es"];



// src/i18n/translations.ts (recommended normalized)
export type Lang = "es" | "en";

export const translations = {
  es: {
    // Navbar
    servicios: "Servicios",
    locker: "Locker",
    pickup: "Pickup",
    contacto: "Contact Us", // Wait, the screenshot says "Contact Us" in English on the ES version? Let's fix that.
    faq: "FAQ",
    quienes_somos: "Quiénes somos",
    track_package: "Track Package",
    login: "Login",

    // Hero
    hero_title: "PROVEEDOR\nDE SERVICIOS\nLOGÍSTICOS",
    hero_subtitle: "Soluciones logísticas integrales — transporte, almacenamiento y distribución con tecnología para que tu operación fluya.",
    solicitar_cotizacion: "SOLICITAR COTIZACIÓN",

    // Services
    nuestros_servicios: "Nuestros servicios",
    envios_paquetes: "Envíos de paquetes",
    envio_remesas: "Envío de remesas",
    recogida_paquetes: "Recogida de paquetes",
    conformar_envios: "Conformar envíos",
    ver_mas: "VER MÁS",
    lorem_short: "ismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exer",

    // Tracking
    rastrear_paquete_title: "Rastrear paquete",
    n_rastreo: "Número de rastreo",
    rastrear_btn: "RASTREAR",
    tracking_lorem: "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

    // Pickup
    seccion_recogida: "Sección de Recogida",
    solicitar_recogida: "SOLICITAR RECOGIDA",

    // Testimonials
    que_dicen_clientes: "¿Qué dicen nuestros clientes?",
    karen: "Karen",
    lorem_testimonial: "rápidos, económicos y seguros Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",

    // Footer
    direccion_footer: "dirección general del local para atención",
    contacta: "Contacta",
    privacidad: "Declaración de Privacidad",

    // Legacy/Old mapping compatibility
    envio_nacionales: "Envíos Nacionales",
    envio_internacional: "Envíos Internacionales",
    carga_pesada: "Carga Pesada",
    express: "Express 24h",
    tienda: "Tienda",
    recogida: "Recogida",
    nuestros: "nuestros",
    CasilleroEscritorio: "CasilleroEscritorio",
    rastrear: "RASTREAR PAQUETE",
    inicio: "Inicio",
    siguenos: "Síguenos",
    languageShort: "ES",
    switchTo: "English",
  },
  en: {
    // Navbar
    servicios: "Services",
    locker: "Locker",
    pickup: "Pickup",
    contacto: "Contact Us",
    faq: "FAQ",
    quienes_somos: "Who we are",
    track_package: "Track Package",
    login: "Login",

    // Hero
    hero_title: "LOGISTICS\nSERVICES\nPROVIDER",
    hero_subtitle: "Comprehensive logistics solutions — transportation, storage and distribution with technology to make your operation flow.",
    solicitar_cotizacion: "REQUEST QUOTE",

    // Services
    nuestros_servicios: "Our services",
    envios_paquetes: "Package Shipping",
    envio_remesas: "Money Transfer",
    recogida_paquetes: "Package Pickup",
    conformar_envios: "Shipping Consolidation",
    ver_mas: "VIEW MORE",
    lorem_short: "ismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exer",

    // Tracking
    rastrear_paquete_title: "Track Package",
    n_rastreo: "Tracking Number",
    rastrear_btn: "TRACK",
    tracking_lorem: "fast, economical and safe Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",

    // Pickup
    seccion_recogida: "Pickup Section",
    solicitar_recogida: "REQUEST PICKUP",

    // Testimonials
    que_dicen_clientes: "What our clients say?",
    karen: "Karen",
    lorem_testimonial: "fast, economical and safe Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",

    // Footer
    direccion_footer: "general local address for attention",
    contacta: "Contact",
    privacidad: "Privacy Statement",

    // Legacy/Old mapping compatibility
    envio_nacionales: "National Shipping",
    envio_internacional: "International",
    carga_pesada: "Heavy Cargo",
    express: "Express 24h",
    tienda: "Store",
    recogida: "Pickup",
    nuestros: "Our Services",
    CasilleroEscritorio: "Desk Locker",
    rastrear: "TRACK PACKAGE",
    inicio: "Home",
    siguenos: "Follow us",
    languageShort: "EN",
    switchTo: "Español",
  },
} as const;

export type Translations = typeof translations;
export type TKey = keyof Translations["es"];
