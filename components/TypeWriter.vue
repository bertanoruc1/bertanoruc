<template>
  <span>{{ displayedText }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    default: 80
  }
})

const displayedText = ref('')

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    displayedText.value += props.text[i]
    i++
    if (i === props.text.length) clearInterval(interval)
  }, props.speed)
})
</script>

<style scoped>
span {
  white-space: pre-line;
}
</style>