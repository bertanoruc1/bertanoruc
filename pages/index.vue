<template>
  <div class="body">
    <div id="content" class="flex flex-col md:flex-row items-center md:items-start text-center md:text-left m-8 md:m-16 md:mt-32 gap-6">

      <!-- Yazılar (TypeWriter ile) -->
      <div class="flex-1 max-w-full md:max-w-lg order-1 md:order-1">
        <p class="text-3xl font-semibold mb-2">
          <TypeWriter :text="'Merhaba Ben Bertan'" :speed="60" @finished="showTitle = true"/>
        </p>

        <h1 v-if="showTitle" class="text-6xl md:text-8xl font-bold leading-tight mt-4">
          <TypeWriter text="Bilgisayar Programcısı" :speed="160" />
        </h1> 
      </div>

      <!-- Fotoğraf -->
      <div class="flex-shrink-0 mt-6 md:mt-0 order-2 md:order-2 flex justify-center md:justify-end md:ml-60">
        <img
          src="/images/IMG_0523.jpeg"
          alt="Bertan Örüç"
          class="rounded-full w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 object-cover object-top transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#4caf50]/50"
        />
      </div>

    </div>
    
    <!-- Hakkımda ve Yeteneklerim -->
    <div id="about" class="m-16">
      <h4 class="text-5xl">Hakkımda</h4>
      <p class="mt-4 max-w-10xl leading-relaxed text-lg">
        Merhaba, ben <strong>Bertan Örüç</strong>. 22 yaşındayım ve bilgisayar programcılığı alanında eğitim aldım. Yazılım geliştirme tutkusu ile kod dünyasında kendime sağlam bir yol çiziyorum. Teknolojiye olan ilgim ve öğrenme isteğim, beni sürekli olarak yeni beceriler kazanmaya ve farklı projelerde kendimi sınamaya yönlendiriyor. Web uygulamaları, interaktif projeler ve eğitim içerikleri hazırlayarak, hem kendi yeteneklerimi geliştiriyor hem de başkalarına değer katmayı hedefliyorum.

Programlama benim için yalnızca bir iş değil, aynı zamanda bir tutku; her satır kodda yeni bir çözüm, her proje ile yeni bir öğrenme fırsatı buluyorum. Kullanıcı deneyimini ön planda tutarak, estetik ve fonksiyonel yazılımlar geliştirmeye özen gösteriyorum. Vue.js, React, C#, JavaScript ve diğer teknolojilerle geliştirdiğim projelerde, yaratıcı ve yenilikçi yaklaşımlarla sorunlara çözüm üretiyorum.

Eğitim sürecim boyunca kazandığım teorik bilgileri, gerçek dünya projeleri ile birleştirerek, yazılım geliştirme alanında hem teknik hem de analitik becerilerimi sürekli olarak güçlendiriyorum. Youtube ve diğer platformlarda hazırladığım içeriklerle, yazılım dünyasına ilgi duyan gençlere ilham vermeyi ve bilgi paylaşımını önemsiyorum.

Amacım, teknoloji ve yazılım dünyasında kalıcı bir iz bırakmak, kullanıcıların hayatını kolaylaştıran ve değer katan çözümler üretmek. Her yeni proje benim için bir fırsat, her zorluk ise gelişim ve deneyim demek. Yazılım dünyasında hem öğrenmeye hem de öğretmeye devam ederek, geleceğin teknolojilerine katkıda bulunmayı hedefliyorum. 
      </p>
      <br><br>

      <div class="space-y-5 mt-8">
        <h2 class="text-3xl mb-4">Yeteneklerim</h2>

        <div v-for="skill in skills" :key="skill.name" class="space-y-1">
          <div class="font-bold text-lg">{{ skill.name }}</div>
          <div class="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full animate-fill"
              :class="skill.color"
              :style="{ '--w': skill.percent }"
            >
              {{ skill.percent }}
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showTitle = ref(true);

const skills = [
  { name: 'HTML', percent: '100%', color: 'from-red-500 to-red-300' },
  { name: 'CSS', percent: '80%', color: 'from-blue-500 to-blue-300' },
  { name: 'JavaScript', percent: '50%', color: 'from-yellow-400 to-yellow-200' },
  { name: 'C', percent: '60%', color: 'from-green-500 to-green-300' },
  { name: 'C++', percent: '70%', color: 'from-purple-500 to-purple-300' },
  { name: 'C#', percent: '80%', color: 'from-gray-600 to-gray-400' },
  { name: 'Vue.js', percent: '40%', color: 'from-green-400 to-green-200' },
  { name: 'React.js', percent: '40%', color: 'from-blue-400 to-blue-200' },
  { name: 'SQL', percent: '60%', color: 'from-orange-500 to-orange-300' },
  { name: 'Bootstrap', percent: '70%', color: 'from-purple-600 to-purple-400' },
]
</script>

<style>
.body {
  background:
    radial-gradient(circle at 20% 30%, rgba(0,255,200,0.07), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.05), transparent 60%),
    #0c0f10;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(circle at 20% 30%, rgba(0,255,200,0.07), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.05), transparent 60%),
    linear-gradient(135deg, #0c0f10, #0a1c18);
  background-size: 40px 40px, 40px 40px, 100% 100%, 100% 100%, 100% 100%;
  background-attachment: fixed;
  color: #e8e8e8;
  min-height: 100vh;
}

/* Yetenek barları animasyonu */
@keyframes fillBar {
  0% { width: 0; }
  100% { width: var(--w); }
}
.animate-fill {
  animation: fillBar 4s ease forwards;
}
</style>