import emailjs from '@emailjs/browser'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      emailjs
    }
  }
})