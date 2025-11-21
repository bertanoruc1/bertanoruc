import emailjs from "emailjs-com";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      emailjs
    }
  };
});