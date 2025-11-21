<template>
<<<<<<< HEAD
    <section class="px-6 md:px-20">
        <div class="mt-10">
            <h2 class="text-5xl mb-10 text-center font-bold">Hakkımda</h2>
            <p class="text-lg text-center mx-auto mb-10 max-w-3xl leading-relaxed">
                Merhaba, ben <span class="font-semibold">Bertan Örüç</span>. 22 yaşında, bilgisayar programcılığı eğitimi almış ve yazılım dünyasında kendini geliştirmeye devam eden bir yazılımcıyım.  
                Erzincan'da eğitimimi tamamladıktan sonra yazılım geliştirme alanında ilerlemeye odaklandım.  
                Aynı zamanda <span class="font-semibold">YouTube'da yazılım eğitim içerikleri</span> üretiyorum ve teknolojiye olan ilgimi, öğrendiklerimi paylaşarak pekiştiriyorum.  
                Hedefim, yazılım dünyasında sağlam bir yer edinerek sürekli öğrenmek ve üretmektir.
            </p>

            <div class="flex flex-col md:flex-row justify-between gap-5 mt-10 text-balance">
                <div class="flex flex-1 flex-col p-6 rounded-2xl shadow-md text-white" style="background-color: #03595E;">
                    <h3 class="text-2xl mb-3 font-semibold text-[#4caf50]">Misyonum</h3>
                    <p class="text-base leading-relaxed">
                        Yenilikçi çözümler üreterek, yazılım dünyasında sürekli gelişen bir bakış açısıyla projeler oluşturmak.  
                        Teknolojiyi en iyi şekilde kullanarak her seviyeden bireye ulaşan, öğretici ve ilham verici içerikler sunmak.
                    </p>
                </div>
                <div class="flex flex-1 flex-col p-6 rounded-2xl shadow-md "style="background-color: #03595E;">
                    <h3 class="text-2xl mb-3 font-semibold text-[#4caf50]">Vizyonum</h3>
                    <p class="text-base leading-relaxed">
                        Küresel çapta tanınan, güvenilir ve ilham veren bir yazılımcı olmak.  
                        Yalnızca kod yazmak değil, aynı zamanda değer yaratan projeler geliştirerek yazılım dünyasında kalıcı bir etki bırakmayı hedefliyorum.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div class="mt-10">
        <Contact />
    </div>
</template>
=======
  <section class="px-6 md:px-20 py-16  text-white">
    <!-- Başlık -->
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

    <!-- Misyon ve Vizyon -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Misyon -->
      <div class="relative group p-8 rounded-3xl bg-gray-800 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:-translate-y-2">
        <!-- Hover ışık efekti -->
        <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-3xl"></div>

        <h3 class="text-3xl mb-4 font-bold text-[#4caf50]">Misyonum</h3>
        <p class="text-gray-100 leading-relaxed text-base">
          Yenilikçi ve özgün çözümler üretmek, teknolojiyi insanlara değer katacak şekilde kullanmak.  
          Her seviyeden bireye ulaşan, öğretici ve ilham verici projeler geliştirerek yazılım dünyasında fark yaratmak.
        </p>
      </div>

      <!-- Vizyon -->
      <div class="relative group p-8 rounded-3xl bg-gray-800 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:-translate-y-2">
        <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none rounded-3xl"></div>

        <h3 class="text-3xl mb-4 font-bold text-[#4caf50]">Vizyonum</h3>
        <p class="text-gray-100 leading-relaxed text-base">
          Küresel çapta tanınan, güvenilir ve yaratıcı bir yazılımcı olmak.  
          Sadece kod yazmak değil, aynı zamanda değer üreten projeler geliştirerek yazılım dünyasında kalıcı bir etki bırakmak.
        </p>
      </div>
    </div>

    <!-- Contact Button -->
    <div class="mt-16 text-center">
      <a href="contact" class="px-8 py-4 bg-[#4caf50] text-black font-semibold rounded-full shadow-lg hover:bg-[#43a047] transition-colors duration-300">
        Bana Ulaş
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Hover ışık efektleri daha yumuşak ve şık */
.group:hover::after {
  opacity: 0.05;
}
</style>
>>>>>>> fb9713b (İlk commit)
