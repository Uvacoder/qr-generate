<script setup lang="ts">
import { ref } from 'vue'
import { useSvgToUri } from '@/composables'

import { Flex, Button } from '@sigveh/basic-ui'
import QRCode from '@chenfengyuan/vue-qrcode'

const options = {
  width: 300,
  margin: 0,
}

defineProps<{
  url: string
}>()

const downloading = ref(false)
const code = ref()

function download() {
  downloading.value = true
  const { dataUri } = useSvgToUri(code.value.$el)

  const a = document.createElement('a')
  a.href = dataUri
  a.download = `qrcode.svg`
  a.click()

  downloading.value = false
}
</script>

<template>
  <Flex
    v-if="url"
    direction="column"
    justify="center"
    align="center"
    class="preview"
  >
    <QRCode ref="code" tag="svg" :value="url" :options="options" />
    <Button
      size="small"
      theme="secondary"
      :loading="downloading"
      @click="download"
    >
      Download
    </Button>
  </Flex>
</template>

<style scoped>
.preview {
  flex-grow: 1;
  min-height: 50vh;
}
</style>
