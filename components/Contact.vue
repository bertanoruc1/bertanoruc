<template>
<<<<<<< HEAD
<section class="py-10">
    <div class="container mx-auto">
        <h2 class="text-3xl mb-2.5">İletişim</h2>
        <p class="mb-5">Bize mesaj gönderin, en kısa sürede dönüş yapacağız!</p>
        <form action="https://formspree.io/f/xgvalrwe" id="contact-form" method="POST">
            <div class="mb-3.75">
                <label for="name" class="block font-bold">Adınız</label>
                <input type="text" id="name" name="name" required placeholder="Adınızı girin" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black">
            </div>
            <div class="mb-3.75">
                <label for="email" class="block font-bold">E-posta</label>
                <input type="email" id="email" name="email" required placeholder="E-postanızı girin" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black">
            </div>
            <div class="mb-3.75">
                <label for="message" class="block font-bold">Mesajınız</label>
                <textarea id="message" name="message" required placeholder="Mesajınızı yazın" rows="4" class="w-full p-2.5 border border-neutral-200 rounded-md focus:outline-[#4caf50] focus:outline-2 focus:outline-offset-2 text-black"></textarea>
            </div>
            <button type="submit" class="bg-[#4caf50] text-white px-5 py-3 border-none rounded-md cursor-pointer transition-colors" >Gönder</button>
        </form>
    </div>
</section>
</template>

=======
  <section class="py-16 px-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-center">İletişim</h2>
      <p class="text-center mb-10 text-lg text-gray-400">
        Aşağıdaki formu doldurarak bana kolayca ulaşabilirsiniz.
      </p>

      <!-- Başarı Mesajı -->
      <div
        v-if="success"
        class="mb-6 p-4 bg-green-600 text-white rounded-md text-center animate-fade"
      >
        Mesajınız başarıyla gönderildi! 🎉
      </div>

      <!-- Hata Mesajı -->
      <div
        v-if="error"
        class="mb-6 p-4 bg-red-600 text-white rounded-md text-center animate-fade"
      >
        Bir hata oluştu! Lütfen tekrar deneyin.
      </div>

      <form @submit.prevent="sendMail" class="space-y-6">
        <div>
          <label class="font-semibold block mb-1">Adınız</label>
          <input
            v-model="form.name"
            type="text"
            class="p-3 w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-[#4caf50]"
            placeholder="Adınızı girin"
            required
          />
        </div>

        <div>
          <label class="font-semibold block mb-1">E-posta</label>
          <input
            v-model="form.email"
            type="email"
            class="p-3 w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-[#4caf50]"
            placeholder="E-postanızı girin"
            required
          />
        </div>

        <div>
          <label class="font-semibold block mb-1">Mesajınız</label>
          <textarea
            v-model="form.message"
            rows="5"
            class="p-3 w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-[#4caf50]"
            placeholder="Mesajınızı yazın"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 text-lg font-semibold rounded-md transition bg-[#4caf50] hover:bg-[#45a346] disabled:opacity-50"
        >
          <span v-if="!loading">Gönder</span>
          <span v-else>Gönderiliyor...</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Nuxt 3 plugin kullanımı için emailjs importunu plugin üzerinden yapacağız
// plugins/email.js oluşturman gerekiyor (daha stabil)
import { useNuxtApp } from "#app";

const { $emailjs } = useNuxtApp();

const loading = ref(false);
const success = ref(false);
const error = ref(false);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendMail = async () => {
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    await $emailjs.send(
      "service_chy964n",     // EmailJS Service ID
      "template_bw3owcl",    // EmailJS Template ID
      form.value,
      "3zQp4EBOFW9t6hG5n"    // EmailJS Public Key
    );

    success.value = true;
    form.value = { name: "", email: "", message: "" };
  } catch (err) {
    console.log(err);
    error.value = true;
  }

  loading.value = false;

  // Mesaj 3 sn sonra kaybolsun
  setTimeout(() => {
    success.value = false;
    error.value = false;
  }, 3000);
};
</script>

<style>
/* Yumuşak Fade Animasyonu */
@keyframes fade {
  from { opacity: 0; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade {
  animation: fade 0.4s ease;
}
</style>
>>>>>>> fb9713b (İlk commit)
