<script setup lang="ts">
import { Flex } from '@sigveh/basic-ui'
import Heading from './Heading.vue'
</script>

<template>
  <Flex class="header" justify="space-between" align="center">
    <Heading :level="1">Simple QR</Heading>
  </Flex>
</template>

<style scoped>
.header {
  border-bottom: 1px solid #eaeaea;
  padding-block-end: 1rem;
  margin-block: 4rem;
}
</style>
