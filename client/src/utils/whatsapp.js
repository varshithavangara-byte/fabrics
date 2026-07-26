// ============================================================
// whatsapp.js — Utility to build WhatsApp chat URLs
// ============================================================

import { STORE, WHATSAPP_MESSAGE } from './constants';

/**
 * Builds a WhatsApp click-to-chat URL.
 * @param {string} message - Custom message (defaults to store template)
 * @param {string} number  - WhatsApp number with country code (no +, no spaces)
 * @returns {string} WhatsApp URL
 */
export const buildWhatsAppUrl = (
  message = WHATSAPP_MESSAGE,
  number = STORE.whatsapp
) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

/**
 * Opens WhatsApp chat in a new browser tab.
 * @param {string} message - Custom message
 */
export const openWhatsApp = (message = WHATSAPP_MESSAGE) => {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Builds a WhatsApp enquiry message for a specific product/category.
 * @param {string} category - Name of the product or category
 * @returns {string} WhatsApp URL
 */
export const buildEnquiryUrl = (category) => {
  const message = `Hello Pushpa Fabrics, I am interested in *${category}*. Please share more details.`;
  return buildWhatsAppUrl(message);
};
