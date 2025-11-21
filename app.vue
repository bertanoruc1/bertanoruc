<template>

<script setup lang="ts">
import contentConfig from './content.config';

</script>


<template>
  
 fb9713b (İlk commit)
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>

#__nuxt,
html,
body {
 background-color: #03595E;
  color: #F2EFEA;


#__nuxt,
html,
body {
  /* Temel koyu arka plan + hafif zümrüt tonları */
  background:
    radial-gradient(circle at 20% 30%, rgba(0,255,200,0.07), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.05), transparent 60%),
    #0c0f10;

  /* Teknik blog hissi için grid */
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
    radial-gradient(circle at 20% 30%, rgba(0,255,200,0.07), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0,200,255,0.05), transparent 60%),
    linear-gradient(135deg, #0c0f10, #0a1c18);

  background-size:
    40px 40px, /* grid vertical */
    40px 40px, /* grid horizontal */
    100% 100%,
    100% 100%,
    100% 100%;

  background-attachment: fixed;
  color: #e8e8e8;
  min-height: 100vh;

fb9713b (İlk commit)
}
</style>
