<script setup lang="ts">
import { socialLinks } from '~/constants/nav';
</script>
<template>
<<<<<<< HEAD
    <footer>
        <div class="container mx-a px-4 flex flex-col rounded-lg p-4 shadow-lg shadow-neutral-700">
            <div class="flex flex-col lg:flex-row gap-4">
                <div class="footer-section">
                    <h4>Hakkımızda</h4>
                    <p>Biz yazılım dünyasında lider bir şirketiz. Teknolojiyi en iyi şekilde kullanarak müşterilerimize çözümler sunuyoruz.</p>
                </div>
                <div class="footer-section">
                    <h4>Sosyal Medya</h4>
                    <div class="hidden md:flex gap-4">
            <NuxtLink
                v-for="social in socialLinks"
                :key="social.to"
                :to="social.to"
                target="_blank">
            <Icon :name="social.icon" class="block h-5 w-5" />
        </NuxtLink>
        </div>
        
                </div>
                <div class="footer-section">
                    <h4>İletişim</h4>
                    <p>Email:orucbertan7@gmail.com</p>
                    <p>Telefon: +90 541 150 72</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p style="display: flex; justify-content: center; align-items: center;">&copy; 2025 Tüm Hakları Saklıdır. | <a href="#">Gizlilik Politikası</a> | <a href="#">Kullanım Şartları</a></p>
            </div>
        </div>
    </footer>
</template>
=======
 <footer>
    <div class="container mx-auto px-4 p-4 rounded-lg shadow-lg shadow-neutral-700">

        <!-- Üst Kısım -->
        <div class="flex flex-col lg:flex-row justify-between gap-10">

            <!-- Hakkımızda -->
            <div class="footer-section max-w-md">
                <h4 class="text-lg font-semibold mb-2">Hakkımızda</h4>
                <p class="text-sm leading-relaxed">
                    Yazılımın gücünü hayata geçiren bir ekibiz. <br>
                    Yaratıcı çözümler ve modern teknolojilerle dijital dünyayı şekillendiriyoruz.
                </p>
            </div>

            <!-- Sosyal Medya -->
            <div class="footer-section">
                <h4 class="text-lg font-semibold mb-2">Sosyal Medya</h4>
                <div class="hidden md:flex gap-3">
                    <NuxtLink
                        v-for="social in socialLinks"
                        :key="social.to"
                        :to="social.to"
                        target="_blank"
                        class="social-icon p-3 rounded-full transition">
                        <Icon :name="social.icon" class="h-5 w-5" />
                    </NuxtLink>
                </div>
            </div>

            <!-- İletişim -->
            <div class="footer-section">
                <h4 class="text-lg font-semibold mb-2">İletişim</h4>

                <p class="mb-1">
                    <a href="mailto:orucbertan7@gmail.com" class="hover:underline">
                        orucbertan7@gmail.com
                    </a>
                </p>

                <p>
                    <a href="tel:+905411507217" class="hover:underline">
                        +90 541 150 72 17
                    </a>
                </p>
            </div>

        </div>

        <!-- Alt Çizgi -->
        <div class="footer-bottom border-t border-neutral-300 mt-8 pt-4 text-center text-sm">
            <p>
                &copy; 2025 Tüm Hakları Saklıdır. |
                <a href="#" class="hover:underline">Gizlilik Politikası</a> |
                <a href="#" class="hover:underline">Kullanım Şartları</a>
            </p>
        </div>

    </div>
    <div style="height: 30px;"></div>
</footer>
</template>

<style>
/* Sosyal ikonlar için tam oval, glow ve büyüme efekti */
.social-icon {
  border: 1px solid #555;
  border-radius: 9999px; /* tam oval */
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.social-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 0 12px rgba(180, 180, 255, 0.7);
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
}
</style>
>>>>>>> fb9713b (İlk commit)
