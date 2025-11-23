<script setup lang="ts">
// ~/constants/nav dosyasından veri alınıyor
import { navs, socialLinks } from '~/constants/nav';

// DÜZELTME: Bu arayüzün yapısı, nav.ts'deki socialLinks yapısıyla eşleşmelidir.
// TypeScript'in hata mesajında belirttiği 'ExternalLink' ismini kullanıyoruz.
interface ExternalLink {
  label: string; // nav.ts'den gelen 'label'
  to: string;    // nav.ts'den gelen 'to' (link)
  icon: string;  // nav.ts'den gelen 'icon' (UnoCSS sınıfı)
}

// Veriyi tanımlanan tipe dönüştürerek (type casting) TypeScript hatası çözülür.
const typedSocialLinks = socialLinks as unknown as ExternalLink[];

</script>

<template>
  <header>
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
      <div class="flex items-center gap-2">
        <img src="/logo.png" alt="logo" class="w-25 h-25" />

        <NuxtLink to="/" class="font-bold text-xl">
          Bertan Örüç
        </NuxtLink>
      </div>

      <nav class="flex items-center gap-4">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.to"
          :to="nav.to"
        >
          {{ nav.label }}
        </NuxtLink>
      </nav>

      <div class="flex gap-4">
        <a
          v-for="social in typedSocialLinks"
          :key="social.to"
          :href="social.to" 
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
        >
          <span 
            :class="social.icon" 
            class="w-6 h-6 transition-colors hover:text-cyan-400"
          ></span>
        </a>
      </div>

    </div>
  </header>
</template>