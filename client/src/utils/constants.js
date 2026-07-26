// ============================================================
// constants.js — Central store for all app-wide constants
// ============================================================

export const STORE = {
  name: 'Pushpa Fabrics',
  tagline: 'Elegance Woven in Every Thread',
  description:
    'Premium textile and fashion store offering sarees, silk fabrics, lehengas, wedding dresses, and tailoring services in Bengaluru.',
  address: 'Bengaluru, Karnataka',
  phone: '+91 **********',
  phone2: '+91 **********',
  whatsapp: '91 **********',
  email: 'abc@gmail.com',
  mapUrl: import.meta.env.VITE_MAPS_EMBED_URL,
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 6:00 PM',
  },
};

export const WHATSAPP_MESSAGE =
  'Hello Pushpa Fabrics, I want to know more about your collections.';

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Customized Blouses', path: '/customized-blouses' },
  { label: 'Wedding Dresses', path: '/wedding-dresses' },
  { label: 'Rental Dresses', path: '/rental-dresses' },
  { label: 'Tailoring Classes', path: '/tailoring-classes' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];
