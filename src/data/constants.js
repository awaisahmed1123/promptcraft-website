// src/data/constants.js
const phoneNumber = "923173823076";

// Yeh message user ke WhatsApp mein pehle se likha hua aayega
const prefilledMessage = "Hello! I'm interested in the 100+ Premium Prompt Pack.";

// Yeh line message ko URL-friendly banati hai
const encodedMessage = encodeURIComponent(prefilledMessage);

// Final WhatsApp Link
export const WHATSAPP_LINK = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;