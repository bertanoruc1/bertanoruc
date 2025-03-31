<script setup lang="ts">
import { socialLinks } from '~/constants/nav';
</script>
<template>
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