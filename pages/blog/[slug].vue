<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

console.log(page.value, route.path)
</script>

<template>
    <div class="container mx-auto">
  <ContentRenderer v-if="page" :value="page" class="prose" />
</div>
</template>
