<script setup lang="ts">
import { Flex } from '@sigveh/basic-ui'
import QRCode from '@chenfengyuan/vue-qrcode'

const options = {
  width: 300,
  margin: 0,
}

defineProps<{
  url: string
}>()
</script>

<template>
  <Flex v-if="url" justify="center" align="center" style="flex-grow: 1">
    <QRCode :value="url" :options="options" />
  </Flex>
</template>
