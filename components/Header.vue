<script setup lang="ts">
import { navs, socialLinks } from '~/constants/nav';
</script>

<template>
  <header>
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
      <div class="flex items-center gap-2">

        <img src="/public/b.png" alt="" class="w-20 h-20">

        <img src="/public/logo.png" alt="" class="w-20 h-15">

        <NuxtLink to="/" class="font-bold text-xl">
          Bertan Örüç
        </NuxtLink>
      </div>

      <nav class="flex items-center gap-4">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.to"
          :to="nav.to">
          {{ nav.label }}
        </NuxtLink>
      </nav>

      <div class="flex gap-4">
        <NuxtLink
          v-for="social in socialLinks"
          :key="social.to"
          :to="social.to"
          target="_blank">
          <Icon :name="social.icon" class="block h-5 w-5" />
        </NuxtLink>
      </div>

    </div>
  </header>
</template>
