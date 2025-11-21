<template>
  <!-- Sadece EmailJS ile çalışan Vue formunu tutuyoruz. 
       Statik Formspree formu (ilk <section>) ve hatalı yapı kaldırıldı. -->
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
          <label for="name-input" class="font-semibold block mb-1">Adınız</label>
          <input
            id="name-input"
            v-model="form.name"
            type="text"
            class="p-3 w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-[#4caf50]"
            placeholder="Adınızı girin"
            required
          />
        </div>

        <div>
          <label for="email-input" class="font-semibold block mb-1">E-posta</label>
          <input
            id="email-input"
            v-model="form.email"
            type="email"
            class="p-3 w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-[#4caf50]"
            placeholder="E-postanızı girin"
            required
          />
        </div>

        <div>
          <label for="message-input" class="font-semibold block mb-1">Mesajınız</label>
          <textarea
            id="message-input"
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
          class="w-full py-3 text-lg font-semibold rounded-md transition duration-300 ease-in-out 
                 bg-[#4caf50] hover:bg-[#45a346] hover:shadow-lg hover:shadow-[#4caf50]/50 
                 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!loading">Gönder</span>
          <span v-else>Gönderiliyor...</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNuxtApp } from "#app";

// TypeScript kullanımı için <script setup> içinde lang="ts" kullanıldı.
// EmailJS'in Nuxt plugin'i olarak yüklendiği varsayılır.
const { $emailjs } = useNuxtApp();

// State yönetimi
const loading = ref(false);
const success = ref(false);
const error = ref(false);

const form = ref({
  name: "",
  email: "",
  message: "",
});

/**
 * Form verilerini EmailJS servisi üzerinden gönderir.
 */
const sendMail = async () => {
  // Durumları sıfırla ve yükleniyor durumunu başlat
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    // EmailJS API çağrısı
    await $emailjs.send(
      "service_chy964n",     // EmailJS Service ID
      "template_bw3owcl",    // EmailJS Template ID
      form.value,
      "3zQp4EBOFW9t6hG5n"    // EmailJS Public Key
    );

    success.value = true;
    // Başarılı gönderim sonrası formu temizle
    form.value = { name: "", email: "", message: "" };
  } catch (err) {
    // Orijinal kodunuzdaki console.log yerine daha açıklayıcı bir hata logu bıraktım.
    console.error("EmailJS Gönderim Hatası:", err); 
    error.value = true;
  } finally {
    // Yükleniyor durumunu bitir
    loading.value = false;

    // Mesaj 3 sn sonra kaybolsun (Orijinal süreyi koruduk)
    setTimeout(() => {
      success.value = false;
      error.value = false;
    }, 3000); // Orijinal süreniz 3000ms idi.
  }
};
</script>

<style scoped>
/* Yumuşak Fade Animasyonu (scoped eklendi) */
@keyframes fade {
  from { opacity: 0; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade {
  animation: fade 0.4s ease;
}
</style>,
