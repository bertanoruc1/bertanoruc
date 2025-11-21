<template>
  <!-- min-h-screen ile sayfanın minimum yüksekliğini ayarlıyoruz -->
  <section class="px-6 md:px-20 py-16 text-white min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Ana Hakkımda Bölümü -->
      <div class="mb-12">
        <h2 class="text-5xl font-extrabold mb-6 border-b-4 border-[#4caf50] inline-block pb-2">
          Hakkımda
        </h2>
        <p class="text-lg max-w-4xl leading-relaxed text-gray-300">
          Merhaba, ben <span class="font-semibold text-[#4caf50]">Bertan Örüç</span>. 22 yaşında, bilgisayar programcılığı eğitimi almış ve yazılım dünyasında kendini sürekli geliştiren bir yazılımcıyım.
          Eğitim sürecinde sadece teorik bilgi ile yetinmedim; interaktif projeler, web uygulamaları ve eğitim içerikleri üreterek teknolojiye olan ilgimi pratiğe dönüştürdüm.
          <br /><br />
          Yazılım benim için bir tutku. Her proje, yeni bir öğrenme deneyimi ve yaratıcı bir meydan okuma anlamına geliyor. Aynı zamanda <span class="font-semibold text-[#4caf50]">YouTube'da yazılım eğitim içerikleri</span> üreterek öğrendiklerimi paylaşmayı ve başkalarına ilham vermeyi önemsiyorum.
          <br /><br />
          Hedefim, yazılım dünyasında kalıcı bir iz bırakmak ve değer üreten, yaratıcı çözümler geliştiren bir yazılımcı olarak kendimi kanıtlamak. Sürekli öğrenmek, üretmek ve teknoloji ile insanlara fayda sağlamak en büyük önceliğim.
        </p>
      </div>

      <!-- Vizyon/Misyon Kartları (Glow ve Şeffaflık Efektleri Eklendi) -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Misyon Kartı -->
        <div class="card-glow-effect group p-8 rounded-3xl shadow-xl border border-gray-700/50 
                    bg-gray-900/70 overflow-hidden transition-transform duration-300 transform 
                    hover:scale-[1.03] hover:-translate-y-1 relative cursor-pointer">
          <h3 class="text-3xl mb-4 font-bold text-[#4caf50]">Misyonum</h3>
          <p class="text-gray-100 leading-relaxed text-base">
            Yenilikçi ve özgün çözümler üretmek, teknolojiyi insanlara değer katacak şekilde kullanmak.
            Her seviyeden bireye ulaşan, öğretici ve ilham verici projeler geliştirerek yazılım dünyasında fark yaratmak.
          </p>
        </div>

        <!-- Vizyon Kartı -->
        <div class="card-glow-effect group p-8 rounded-3xl shadow-xl border border-gray-700/50 
                    bg-gray-900/70 overflow-hidden transition-transform duration-300 transform 
                    hover:scale-[1.03] hover:-translate-y-1 relative cursor-pointer">
          <h3 class="text-3xl mb-4 font-bold text-[#4caf50]">Vizyonum</h3>
          <p class="text-gray-100 leading-relaxed text-base">
            Küresel çapta tanınan, güvenilir ve yaratıcı bir yazılımcı olmak.
            Sadece kod yazmak değil, aynı zamanda değer üreten projeler geliştirerek yazılım dünyasında kalıcı bir etki bırakmak.
          </p>
        </div>
      </div>

      <!-- Bana Ulaş Butonu -->
      <div class="mt-16 text-center">
        <!-- Nuxt projesi olduğu için NuxtLink kullanıldı -->
        <NuxtLink to="/contact" class="px-8 py-4 bg-[#4caf50] text-black font-semibold rounded-full shadow-lg hover:bg-[#43a047] transition-colors duration-300 hover:shadow-[#4caf50]/40">
          Bana Ulaş
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { NuxtLink } from '#components'
// Bu bileşenin çalışması için sadece template yeterlidir
</script>

<style scoped>
/* Kartlara Hover Glow Efekti için CSS */
.card-glow-effect {
  /* Z-index bağlamını oluşturur, böylece ::before elementi kartın arkasında kalır */
  isolation: isolate; 
}

.card-glow-effect::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  /* Yeşil/Mavi Karışımı Parlama Efekti */
  background: radial-gradient(circle at center, rgba(76, 175, 80, 0.4), transparent 70%);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  /* Başlangıçta biraz daha küçük */
  transform: scale(0.9);
}

.card-glow-effect:hover::before {
  opacity: 0.8; /* Hover'da parlamayı göster */
  transform: scale(1.2); /* Parlamayı karttan daha büyük yap */
}
</style>