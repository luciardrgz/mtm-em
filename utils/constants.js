import { faBuildingFlag, faIndustry, faStore, faArrowUpRightDots, faArrowTrendUp, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const navLinks = [
  {
    id: 'home',
    title: 'Inicio',
  },
  {
    id: 'services',
    title: 'Servicios',
  },
  {
    id: 'work',
    title: 'Trabajos',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

export const industrial = [
  {
    url: '/industria1.webp',
  },
  {
    url: '/industria2.webp',
  },
  {
    url: '/industria3.webp',
  },
  {
    url: '/industria4.webp',
  },
  {
    url: '/industria5.webp',
  },
];

export const particular = [
  {
    url: '/particular1.webp',
  },
  {
    url: '/particular2.webp',
  },
  {
    url: '/particular3.webp',
  },
  {
    url: '/particular4.webp',
  },
  {
    url: '/particular5.webp',
  },
];

export const stats = [
  {
    id: 'stat1',
    title: 'Años de experiencia',
    value: '+15',
  },
  {
    id: 'stat2',
    title: 'Empresas que confían',
    value: '+20',
  },
  {
    id: 'stat3',
    title: 'Trabajos realizados',
    value: '+25',
  },
];

export const servicesDetails = [
  {
    id: 'service1',
    imgUrl: '/industria1.webp',
    icon: faBuildingFlag,
    title: 'Estudios',
    description: 'Información para estudios de arquitectura, consorcio e inmobiliarias',
  },
  {
    id: 'service2',
    imgUrl: '/industria2.webp',
    icon: faIndustry,
    title: 'Industrias',
    description: 'Información para industrias y pymes',
  },
  {
    id: 'service3',
    imgUrl: '/industria3.webp',
    icon: faStore,
    title: 'PYMES',
    description: 'Información para PYMES',
  },
  {
    id: 'service4',
    imgUrl: '/industria4.webp',
    icon: faArrowUpRightDots,
    title: 'Micro Industrias',
    description: 'Información para micro industrias',
  },
  {
    id: 'service5',
    imgUrl: '/industria5.webp',
    icon: faArrowTrendUp,
    title: 'Mini PYMES',
    description: 'Información para mini pymes',
  },
];

export const contactInfo = [
  {
    id: 'phone',
    icon: faPhone,
    title: 'Llamanos',
    info: '+54 9 223 582 8183',
  },
  {
    id: 'location',
    icon: faLocationDot,
    title: 'Estamos aquí',
    info: 'Mar del Plata, Buenos Aires, Argentina (C.P. B7600)',
  },
];
