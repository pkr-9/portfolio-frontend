// src/lib/validation.js
export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
export const isPhoneValid = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);
