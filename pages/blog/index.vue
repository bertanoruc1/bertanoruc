<template>
  <div class="p-4">

    <!-- Grid: her satırda 3 kart (mobil 1, sm 2, md 3) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      <!-- 1 WEB TARAYICILARIN DÜNYASI -->
      <div class="card">
        <div class="card-inner-1" style="display: flex; flex-direction: column; justify-content: center;">
          <div class="flex items-center gap-2">
            <i class="i-mdi-web text-2xl"></i>
            <div class="font-bold mt-2">WEB TARAYICILARIN DÜNYASI VE HTTP’YE YAKINDAN BAKIŞ ÖNEMİ</div>
          </div>
          <div class="mb-2">
            Bu makale benim 2022 de yazdığım ilk makaledir incelemek için tıklayınız.
          </div>
          <div class="text-blue-500">
            <NuxtLink to="https://bertanoruc.com/blog/ilk-makalem">Gitmek için tıklayınız.</NuxtLink>
          </div>
        </div>
      </div>

      <!-- 2 Authentication Sistemi -->
      <div class="card">
        <div class="card-inner-1">
          <div class="flex items-center gap-2">
            <i class="i-mdi-shield-lock text-2xl"></i>
            <div class="font-bold mt-2">Authentication Sistemi</div>
          </div>
          <div class="mb-2">
            Bu makale benim 2025 de yazdığım makaledir incelemek için tıklayınız.
          </div>
          <div class="text-blue-500">
            <NuxtLink to="https://bertanoruc.com/blog/ikinci-makalem">Gitmek için tıklayınız.</NuxtLink>
          </div>
        </div>
      </div>

      <!-- 3 Form Sayfası -->
      <div class="card relative overflow-hidden">
        <video class="media-video" autoplay loop muted playsinline>
          <source src="/kullanici.mov" type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-account-plus text-2xl"></i>
            <div class="font-bold text-lg mt-2">Form Sayfası</div>
          </div>
          <div class="mb-2">
            Kullanıcılar için hazırlanmış modern ve kullanışlı bir kayıt panelidir.
          </div>
          <div class="text-blue-300 font-semibold">
            <a href="https://github.com/bertanoruc1/kullan-c-kay-t-paneli" target="_blank" class="hover:underline">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 4 Blog Sayfası -->
      <div class="card relative overflow-hidden">
        <div class="bg-media" :style="{ backgroundImage: `url('/denme-1.png')` }"></div>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-blog text-2xl"></i>
            <div class="font-bold mt-2">Blog sayfası</div>
          </div>
          <div class="mb-2">Kullanıcılar için oluşturulmuş blog uygulamasıdır.</div>
          <div class="text-blue-200">
            <a href="https://github.com/bertanoruc1/blog-uygulamas-" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 5 Kitap Deposu -->
      <div class="card relative overflow-hidden">
        <div class="bg-media" :style="{ backgroundImage: `url('/kitap.png')` }"></div>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-book-open-page-variant text-2xl"></i>
            <div class="font-bold">Kitap deposu</div>
          </div>
          <div class="mb-2">Kullanıcıların kitaplarını depolamak için kullanması gereken uygulamadır.</div>
          <div class="text-blue-200">
            <a href="https://github.com/bertanoruc1/kitap-deposu" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 6 Kelime Oyunu -->
      <div class="card relative overflow-hidden">
        <video class="media-video" autoplay loop muted playsinline>
          <source src="/kelime.mp4" type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-alpha-k-circle text-2xl"></i>
            <div class="font-bold text-lg">Kelime Oyunu</div>
          </div>
          <div class="mb-2">C# ile oluşturulmuş basit ve eğlenceli kelime oyunu.</div>
          <div class="text-blue-300">
            <a href="https://github.com/bertanoruc1/kelime-uygulamas-" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 7 İnteraktif To-Do List -->
      <div class="card relative overflow-hidden">
        <video class="media-video" autoplay loop muted playsinline>
          <source src="/interaktif.mov" type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-format-list-checks text-2xl"></i>
            <div class="font-bold text-lg opacity-90">İnteraktif To-Do List</div>
          </div>
          <div class="mb-2">Modern ve kullanımı kolay bir yapılacaklar listesi. Vue 3 ile geliştirildi.</div>
          <div class="text-blue-300">
            <a href="https://github.com/bertanoruc1/interaktif-To-Do-List-Yap-lacaklar-Listesi-" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 8 To-Do List -->
      <div class="card relative overflow-hidden">
        <div class="bg-media" :style="{ backgroundImage: `url('/yapılacaklar.png')` }"></div>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-check-circle text-2xl"></i>
            <div class="font-bold text-lg">To-Do List</div>
          </div>
          <div class="mb-2">Vue3 ile interaktif, kullanıcı dostu yapılacaklar listesi.</div>
          <div class="text-blue-300">
            <a href="https://github.com/bertanoruc1/To-Do-liste-uygulmas--" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

      <!-- 9 Kullanıcı Uygulamaları -->
      <div class="card relative overflow-hidden">
        <video class="media-video" autoplay loop muted playsinline>
          <source src="/kullanıcı.mov" type="video/mp4" />
        </video>
        <div class="overlay"></div>
        <div class="card-inner z-top text-white">
          <div class="flex items-center gap-2">
            <i class="i-mdi-account-group text-2xl"></i>
            <div class="font-bold text-lg">Kullanıcı Uygulamaları</div>
          </div>
          <div class="mb-2">Sayaç, geri sayım ve To-Do List’in birleştiği uygulama.</div>
          <div class="text-blue-300">
            <a href="https://github.com/bertanoruc1/kullan-c-uygulamalar-" target="_blank">Gitmek için tıklayınız.</a>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div style="height: 100px;"></div>
</template>

<script>
export default {
  name: "BlogIndex"
}
</script>

<style scoped>
.card {
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  border: 1px solid rgba(255,255,255,0.06);
}

.card-inner {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity .35s ease, transform .35s ease;
}

.card:hover .card-inner {
  opacity: 1;
  transform: translateY(0);
}

.bg-media {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform .35s ease, filter .25s ease;
  filter: brightness(.95);
}

.media-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease, filter .25s ease;
  filter: brightness(.95);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 20px 50px rgba(0,150,255,0.12);
  border-color: rgba(0,150,255,0.25);
}

.card:hover .bg-media,
.card:hover .media-video {
  transform: scale(1.06);
  filter: brightness(1.1) saturate(1.15);
}

.card::after {
  content: "";
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle at 50% 10%, rgba(0,170,255,0.06), transparent 10%),
              radial-gradient(circle at 80% 90%, rgba(0,170,255,0.03), transparent 20%);
  opacity: 0;
  transition: opacity .3s ease;
  pointer-events: none;
}

.card:hover::after {
  opacity: 1;
}
</style>