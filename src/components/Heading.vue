<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level: 1 | 2 | 3 | 4
}>()

const heading = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="heading">
    <slot />
  </component>
</template>

<style scoped>
h1,
h2,
h3,
h4 {
  font-weight: bold;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.3rem;
}

h3 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.5rem;
}
</style>
