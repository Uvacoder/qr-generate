<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  max-width: 70ch;
  margin-inline: auto;
  padding-inline: 1rem;
}
</style>
