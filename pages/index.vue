<template>
    <div class="body">
      <div id="content" class="flex flex-col md:flex-row items-center md:items-start text-center md:text-left m-8 md:m-16 md:mt-32 gap-6">
        <div>
          <p class="text-3xl font-semibold">Merhaba Ben Bertan</p>
          <h1 class="text-6xl md:text-8xl font-bold leading-tight">
            Bilgisayar <br> Programcısı
          </h1> 
        </div>
        <div class="flex justify-center md:justify-end">
  <img
    src="/images/IMG_0523.jpeg"
    alt="Bertan Örüç"
    class="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover object-top md:ml-80"
  />
</div>

      </div>
  
      <div id="about" class="m-16">
        <h4 class="text-5xl">Hakkımda</h4>
        <p class="mt-4">Merhaba ben Bertan Örüç, 22 yaşında ve bilgisayar programcılığı eğitimi almış genç yazılımcıyım. Erzincan'da eğitimimi tamamladıktan sonra yazılım geliştirme alanında kendimi geliştirmeye devam etmekteyim. Youtube yazılımla ilgili eğitim içerikleri hazırlıyorum. Teknolojiye olan ilgimi ve programlama konusundaki tutkumu ile yazılım dünyasında kendime sağlam bir yer edinmeyi hedeflemekteyim.</p>
        <br><br><br>
  
        <div class="space-y-5">
          <h2 class="text-3xl mb-4">Yeteneklerim</h2>
          
          <div class="space-y-1">
            <div class="font-bold">HTML</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden"> 
              <div class="h-full bg-gradient-to-r from-red-500 to-red-300 w-[100%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">100%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">CSS</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-500 to-blue-300 w-[80%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">80%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">JavaScript</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-yellow-400 to-yellow-200 w-[50%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">50%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">C</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-green-500 to-green-300 w-[60%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">60%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">C++</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-purple-500 to-purple-300 w-[70%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">70%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">C#</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-gray-600 to-gray-400 w-[80%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">80%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">Vue.js</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-green-400 to-green-200 w-[40%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">40%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">React.js</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-blue-400 to-blue-200 w-[40%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">40%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">SQL</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-orange-500 to-orange-300 w-[60%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">60%</div>
            </div>
          </div>
  
          <div class="space-y-1">
            <div class="font-bold">Bootstrap</div>
            <div class="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-purple-600 to-purple-400 w-[70%] text-right text-white text-sm font-bold pr-2 flex items-center justify-end rounded-r-full">70%</div>
            </div>
          </div>

        </div>  
      </div>
      <Contact />
    </div>
    
  </template>
  <script setup>
  import { useHead } from 'nuxt/app'
  
  useHead({
    title: 'Bertan Örüç | Bilgisayar Programcısı',
    meta: [
      { name: 'description', content: 'Bertan Örüç\'ün kişisel web sitesi. Bilgisayar programcılığı, yazılım geliştirme ve teknoloji hakkında içerikler sunar.' },
      { name: 'keywords', content: 'Bertan Örüç, yazılım, bilgisayar programcılığı, web geliştirme, Vue.js, Nuxt.js' },
      { name: 'author', content: 'Bertan Örüç' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bertan Örüç",
          "url": "https://bertanoruc.com",
          "sameAs": [
            "https://twitter.com/bertanoruc",
            "https://www.linkedin.com/in/bertanoruc/"
          ],
          "jobTitle": "Bilgisayar Programcısı",
          "alumniOf": "Erzincan Üniversitesi",
          "description": "Bertan Örüç, yazılım geliştirme ve web teknolojileri alanında uzmanlaşmış bir bilgisayar programcısıdır."
        })
      }
    ]
  })
  </script>
  <style>
  .body {
    background-color: #03595E;
  }
  </style>
  