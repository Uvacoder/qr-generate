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
  font-family: 'Lora', serif;
}

h1 {
  font-size: 3rem;
  line-height: 1;
}

h2 {
  font-size: 2.3rem;
  line-height: 1.1;
}

h3 {
  font-size: 1.8rem;
  line-height: 1.2;
}

h3 {
  font-size: 1.5rem;
  line-height: 1.5;
}
</style>
