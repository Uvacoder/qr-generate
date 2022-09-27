<script setup lang="ts">
import { ref } from 'vue'

import { Input, Button, Form, Flex } from '@sigveh/basic-ui'
import { ArrowRightIcon } from 'vue-tabler-icons'
import Container from '@/components/Container.vue'
import Preview from '@/components/Preview.vue'
import Header from '@/components/Header.vue'

const url = ref('')
const value = ref('')

const loading = ref(false)

function onSubmit() {
  loading.value = true
  setTimeout(() => {
    value.value = url.value
    loading.value = false
  }, 500)
}
</script>

<template>
  <Container v-auto-animate>
    <Header />
    <Flex direction="column" align="stretch">
      <Form @submit="onSubmit">
        <Flex>
          <Input
            name="url"
            placeholder="https://example.com"
            type="url"
            v-model="url"
          />
          <Button theme="primary" type="submit" :loading="loading">
            Generate
            <template #icon-right>
              <ArrowRightIcon size="16" />
            </template>
          </Button>
        </Flex>
      </Form>
    </Flex>
    <Preview :url="value" />
  </Container>
</template>

<style>
#app {
  height: 100%;
}

.b-button__content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.b-input {
  flex-grow: 1;
}
</style>
