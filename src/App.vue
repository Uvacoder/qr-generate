<script setup lang="ts">
import { ref } from 'vue'

import { Input, Button, Form, Flex } from '@sigveh/basic-ui'
import Container from '@/components/Container.vue'
import Heading from '@/components/Heading.vue'
import Preview from '@/components/Preview.vue'

const url = ref('')
const value = ref('')

function onSubmit() {
  value.value = url.value
}
</script>

<template>
  <Container>
    <Flex direction="column" align="stretch">
      <Heading :level="1">QR-code generator</Heading>
      <Form @submit="onSubmit">
        <Flex justify="stretch">
          <Input
            placeholder="https://example.com"
            type="url"
            v-model="url"
            style="flex-grow: 1"
          />
          <Button theme="primary" type="submit">Generate</Button>
        </Flex>
      </Form>
      <Preview :url="value" />
    </Flex>
  </Container>
</template>

<style>
#app {
  padding-block: 4rem;
  height: 100%;
}
</style>
